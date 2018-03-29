// import products from "../products";
import Product from "../models/Product";

// old
// export function list(request, response) {
//   return response.json();
// }

// new
export function list(request, response) {
  Product.find({}).exec()
  .then(products =>{
    return response.json(products);
  });
}

// old
// export function show(request, response){
//   return response.json(products.find(product => product._id == request.params.id));
// }

// new
export function show(request, response) {
  Product.findById(request.params.id).exec()
  .then(products => {
    return response.json(products);
  });
}

//old
// export function create(request, response){
//   products.push(request.body);
//   return response.json({});
// }

// new
export function create(request, response) {
  const product = new Product({
    name: request.body.name,
    description: request.body.description
  });
  product.save()
  .then(products => {
    return response.json(products);
  });
}

// old
// export function update(request, response) {
//   return response.json({theId: request.params.id});
// }

// new
export function update(request, response) {
  return response.json(Product[0].name.params.id);
}
// old
// export function remove(request, response) {
//   return response.json({});
// }

// new
export function remove(request, response) {
  return response.json(Product.pop());
}
