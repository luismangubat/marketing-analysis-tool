var express = require('express');
var app = express();
const axios = require('axios');
const fs = require('fs');
const util = require('util');
var bodyParser = require('body-parser');

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;
var idCounter = 2;

var token = { "token": "7Uqvv65hUJdQQTYxWqisdV" };

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
            
            var data = {}
            fs.readFile('./productTable.json', 'utf8', (err, jsonString) => {
                if (err) {
                    console.log("Error reading json file:", err);
                }
                try {
                    data = JSON.parse(jsonString).data;
                    for (let i = 0; i < data.length; i++) {
                        data[i]["searchid"] = idCounter;
                    }
                    idCounter++;
                    console.log(JSON.stringify(data));
                } catch(err) {
                    console.log('Error parsing JSON string:', err);
                }

                // PUT Run Pipeline from File
                var config = {
                    method: 'put',
                    url: fileUrl,
                    data: data,
                    transformRequest: [function (data, headers) {
                        delete headers.put['Content-Type'];    
                        return JSON.stringify(data);
                    }]
                };
                axios(config)
                    .catch(err2 => {
                        console.log(err2);
                    });
            });
        })
        .catch(err => {
            console.log(err);
        });
        response.send({ "searchId": idCounter });
    });

app.get("/products/:searchId", (request, response) => {
    var options2 = {
        method: 'get',
        url: 'https://query.dropbase.io/M388daaqKdYsLZheSCpmfq/htn3?searchid=eq.' + request.params.searchId,
        headers: { 
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhYmFzZUlkIjoiTTM4OGRhYXFLZFlzTFpoZVNDcG1mcSIsImFjY2Vzc1Blcm0iOiJmdWxsIiwidG9rZW5JZCI6Ik5KWWxNd3AwU1dBR2Z0YktJQ3R1TlF5dHM1eHZFeGh0b3BPcUR3V2tTY1o1M3ZERXVzYThpMGloRDI4bHIwcUciLCJpYXQiOjE2MTA4MTIzMTYsImV4cCI6MTYxMDkwOTUxNiwiaXNzIjoiZHJvcGJhc2UuaW8iLCJzdWIiOiJBZzhYVjlUdHJOZnBVaGRMQzJ3NmJzIn0.D2p_Oara1Kl6vl5m1NX0_uQepQvQTomhGcD1dE62YZY'
        }
    };
    axios(options2)
        .then(res => {
            response.send(res.data);
        })
        .catch(err => {
            console.log(err);
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
