const fs = require('fs');
let html = '<div class="container px-4 px-lg-5 mt-5"><div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">\n'

function transformObjectToHtml(obj) {
    let imgName = obj.name.toLowerCase().split(' ').join('_')
    html += `<div class="col mb-5"><div class="card h-100"><a href="assets/${imgName}.jpeg" ><img class="card-img-top" src="assets/resized_${imgName}.png" alt="${obj.name}" /></a><div class="card-body p-4"><div class="text-center"><h5 class="fw-bolder">${obj.name}</h5>${obj.size}<br>£${obj.price}<br>${obj.availability}</div></div></div></div>\n`;
}


function transformJsonToHtml(input) {
    let products = JSON.parse(input).products;
    console.log(products);
    products.forEach(transformObjectToHtml);
    html += "</div></div>";
    return html
}

fs.readFile('text/products.json', (err, inputJson) => {
    if (err) throw err;
    let inputHtml = transformJsonToHtml(inputJson.toString())
    fs.writeFile('views/products.html', inputHtml, (err) => {
       if (err) throw err;
       else{
          console.log("The products have been updated with the above data")
       }
    })
})

