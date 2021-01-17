var express = require('express');
var app = express();
const axios = require('axios');
const fs = require('fs');
var bodyParser = require('body-parser');

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

var file = 'sample.csv';


var token = { "token": "VwHMU2WZccoD3PKDqGqEnW" };

var options = {
  method: 'post',
  url: 'https://api2.dropbase.io/v1/pipeline/generate_presigned_url',
  data: token
};


app.post("/search", (request, response) => {
    // POST Generate Pre-Signed URL
    axios(options)
        .then(res => {
            var fileUrl = res.data.upload_url;
            
            // PUT Run Pipeline from File
            var data = {}
            fs.readFile('./productTable.json', 'utf8', (err, jsonString) => {
                if (err) {
                    console.log("Error reading json file:", err);
                }
                try {
                    data = JSON.parse(jsonString);
                } catch(err) {
                    console.log('Error parsing JSON string:', err);
                }
            });
            var options2 = {
                method: 'put',
                url: fileUrl,
                headers: { 
                  'Content-Type': 'text/plain'
                },
                data: data
            };
            return axios(options2);
        })
        .then(res => {
            console.log('****')
            console.log(res);
            // res.send(res.body.upload_url);
        })
        .catch(err => {
            console.log(err);
        });
    
    //response.send({searchId: searchId});
    response.end();
});

app.get("/products/:searchId", (req, res) => {
    axios.get('https://query.dropbase.io/M388daaqKdYsLZheSCpmfq/products')
        .then(res => {
            res.send(res.body)
        })
        .catch(err => {
            console.log(err);
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
