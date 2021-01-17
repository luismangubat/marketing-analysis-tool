const puppeteer = require('puppeteer');

async function scrapeProduct(id) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`https://www.etsy.com/ca/listing/${id}`);

  const [productNameElement] = await page.$x('//*[@id="listing-page-cart"]/div/div[3]/div/h1');
  const txt = await productNameElement.getProperty('textContent');
  const productName = await txt.jsonValue();

  const [producePriceElement] = await page.$x('//*[@id="listing-page-cart"]/div/div[4]/div/div/div[1]/p');
  const txt2 = await producePriceElement.getProperty('textContent');
  const producePrice = await txt2.jsonValue();


  console.log({ productName, producePrice, productReview});

  browser.close();
}


 const candleList = ["892453317", "923894864", "760401636", "120874612", 
"725056282", "877874488", "924353761", "924583056",
 "893892736", "903287133", "918911862", "903287133", "877874488", "867689378", "789378501",
 "846752874", "924686842", "804127880", "878143020"]


/*
candleList.map(candle => {
  scrapeProduct(`https://www.etsy.com/ca/listing/${candle}`)
}) 
*/
// use this url for searching 
// https://www.etsy.com/ca/search?q=table


let productTable = []

async function searchProduct(search) {

  const url  = `https://www.etsy.com/ca/search?q=${search}`
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto(url, {waitUntil:"domcontentloaded"});
  await page.setViewport({width: 408, height: 1200});

  // 
  let productIDList = []

  for (i = 1; i < 30; i++) {
    await page.waitForSelector(`#content > div > div.content.bg-white.col-md-12.pl-xs-1.pr-xs-0.pr-md-1.pl-lg-0.pr-lg-0.bb-xs-1 > div > div > div.col-group.pl-xs-0.search-listings-group.pr-xs-1 > div:nth-child(2) > div.bg-white.display-block.pb-xs-2.mt-xs-0 > div > div:nth-child(3) > div > li:nth-child(${i}) > div > div`)
    let id = await page.evaluate(`document.querySelector("#content > div > div.content.bg-white.col-md-12.pl-xs-1.pr-xs-0.pr-md-1.pl-lg-0.pr-lg-0.bb-xs-1 > div > div > div.col-group.pl-xs-0.search-listings-group.pr-xs-1 > div:nth-child(2) > div.bg-white.display-block.pb-xs-2.mt-xs-0 > div > div:nth-child(3) > div > li:nth-child(${i}) > div > div").getAttribute("data-listing-id")`)
    
    if (id != null) {
      productIDList.push(id)
    }

  }

      
  console.log(productIDList)


  
  
  for (const ID of productIDList) { 
  

    try {

      await page.goto(`https://www.etsy.com/ca/listing/${ID}`);

      var productid = String(ID);
      productid = parseInt(productid);
    
      const [productNameElement] = await page.$x('//*[@id="listing-page-cart"]/div/div[3]/div/h1');
      const txt = await productNameElement.getProperty('textContent');
      const json1 = await txt.jsonValue();
      var productname = String(json1).trim();
      productname = productname.replace(/[^\x00-\x7F]/g, "");
    
      const [producePriceElement] = await page.$x('//*[@id="listing-page-cart"]/div/div[4]/div/div/div[1]/p');
      const txt2 = await producePriceElement.getProperty('textContent');
      const json2 = await txt2.jsonValue();
      var productprice = String(json2).trim();
      var match = productprice.match(/[\d.]+/);
      productprice = parseFloat(match);
    
      const [totalSalesElement] = await page.$x('//*[@id="listing-page-cart"]/div/div[2]/div/a/span[1]');
      const txt3 = await totalSalesElement.getProperty('textContent');
      const json3 = await txt3.jsonValue()
      var totalsales = String(json3).trim();
      match = totalsales.match(/[\d]+/);
      totalsales = parseInt(match, 10);
    
      const [productDescriptionElement] = await page.$x('//*[@id="wt-content-toggle-product-details-read-more"]/p/text()[2]');
      const txt4 = await productDescriptionElement.getProperty('textContent');
      const json4 = await txt4.jsonValue()
      var productdescription = String(json4).trim();
      productdescription = productdescription.replace(/[^\x00-\x7F]/g, "");


      const [productRatingElement] = await page.$x('//*[@id="listing-page-cart"]/div/div[2]/div/span[4]/a/span/span[1]');
      const txt5 = await productRatingElement.getProperty('textContent');
      const json5 = await txt5.jsonValue()
      var productrating = String(json5).trim();
      match = productrating.match(/[\d.]+/);
      productrating = parseFloat(match);


    
      const [sellerNameElement] = await page.$x('//*[@id="listing-page-cart"]/div/div[1]/p/a/span');
      const txt6 = await sellerNameElement.getProperty('textContent');
      const json6 = await txt6.jsonValue()
      var sellername = String(json6).trim();
      sellername = sellername.replace(/[^\x00-\x7F]/g, "");
    
    
      const [locationElement] = await page.$x('//*[@id="shipping-variant-div"]/div/div[2]/div[7]');
      const txt7 = await locationElement.getProperty('textContent');
      const json7 = await txt7.jsonValue()
      var location = String(json7).trim();
      location = location.replace(/[^\x00-\x7F]/g, "");


      const [numberSellerReviewsElements] = await page.$x('//*[@id="reviews"]/div[1]/div[1]/div/h3');
      const txt8 = await numberSellerReviewsElements.getProperty('textContent');
      const json8 = await txt8.jsonValue()
      var numbersellerreviews = String(json8).trim();
      match = numbersellerreviews.match(/[\d]+/);
      numbersellerreviews = parseInt(match, 10);


      productTable.push({productid, productname, productdescription, productprice, totalsales, productrating, sellername, location, numbersellerreviews})

    }

    catch(err) {
      console.log(err)
    }
  
  }

  const jsonObjectTable = JSON.stringify({ "data": productTable });
  console.log(jsonObjectTable);

  var fs = require('fs');
  fs.writeFile("productTable.json", jsonObjectTable, function(err, result) {
      if(err) console.log('error', err);
  });
  //todo



  browser.close();


}


  try {

    searchProduct("candle");

  }
  catch (err) {

    console.log(err)
    
  }





