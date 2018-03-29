import express from "express";
// import comments from "./comments";
// import products from "./products";
// import vehicles from "./vehicles";
// import contacts from "./contacts";

import commentRoute from "./routes/commentRoute";
import contactRoute from "./routes/contactRoute";
import productRoute from "./routes/productRoute";
import vehicleRoute from "./routes/vehicleRoute";


// const app = express();

import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://express-practice:jgorman@ds145148.mlab.com:45148/express-practice")

const bodyParser = require("body-parser"),
  app = express();

app.use(bodyParser.json());
app.use(commentRoute);
app.use(contactRoute);
app.use(productRoute);
app.use(vehicleRoute);


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
// app.get("/comments/", function (request, response) {
//   response.json(comments);
// });
//
// app.get("/products/", function (request, response) {
//   response.json(products);
// });
//
// app.get("/vehicles/", function (request, response) {
//   response.json(vehicles);
// });
// app.get("/contacts/", function (request, response) {
//   response.json(contacts);
// });
//
// app.get("/products/:userId", function (request, response) {
//   response.json(products[request.params.userId]);
// });
//
// app.get("/vehicles/:userId", function (request, response) {
//   response.json(vehicles[request.params.userId]);
// });
//
// app.get("/comments/:userId", function (request, response) {
//   response.json(contacts[request.params.userId]);
// });
//
// app.post("/comments/", function (request, response) {
//   const newUser = request.body;
//   comments.push(newUser);
//   response.json(comments);
// });
//
// app.post("/products/", function (request, response) {
//   const newUser = request.body;
//   products.push(newUser);
//   response.json(products);
// });
//
// app.post("/vehicles/", function (request, response) {
//   const newUser = request.body;
//   vehicles.push(newUser);
//   response.json(vehicles);
// });
// app.post("/contacts/", function (request, response) {
//   const newUser = request.body;
//   contacts.push(newUser);
//   response.json(contacts);
// });