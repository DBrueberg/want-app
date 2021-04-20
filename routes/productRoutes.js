// TEST SCHEMA *****NOT USED IN APPLICATION*****

const mongoose = require('mongoose');
const Product = mongoose.model('products');

module.exports = (app) => {

  app.get(`/api/product`, async (req, res) => {
    let products = await Product.find(req.body);
    return res.status(200).send(products);
  });

  app.get(`/api/product/:name`, async (req, res) => {
    const name = req.params.name;
    let products = await Product.find({name: name});
    return res.status(200).send(products);
  });

  // app.get(`/api/product/`, async (req, res) => {
  //   const {productQuery} = req.body
  //   console.log("INAXIOS/WHAT IS REQ")
  //   console.log(req)
  //   let products = await Product.find(productQuery);
  //   return res.status(200).send(products);
  // });

  app.post(`/api/product`, async (req, res) => {
    let product = await Product.create(req.body);
    return res.status(201).send({
      error: false,
      product
    })
  })

  app.put(`/api/product/:id`, async (req, res) => {
    const {id} = req.params;

    let product = await Product.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      product
    })

  });

  app.delete(`/api/product/:id`, async (req, res) => {
    const {id} = req.params;

    let product = await Product.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      product
    })

  })

}