// import vehicles from "../vehicles";
import Vehicle from "../models/Vehicle";



// old
// export function list(request, response) {
//   return response.json(vehicles);
// }

// new
export function list(request, response) {
  Vehicle.find({}).exec()
  .then(vehicles => {
    return response.json(vehicles);
  });
}

// old
// export function show(request, response) {
//   return response.json(vehicles.find(vehicle => vehicle._id == request.params.id));
// }

// new
export function show(request, response) {
  Vehicle.findById(request.params.id).exec()
  .then(vehicles => {
    return response.json(vehicles);
  });
}

// old
// export function create(request, response){
//   vehicles.push(request.body);
//   return response.json({});
// }

// new
export function create(request, response) {
  const vehicle = new Vehicle({
    year: request.body.year,
    make: request.body.make,
    model: request.body.model
  });
  vehicle.save()
  .then(vehicles => {
    return response.json(vehicles);
  });
}

// old
// export function update(request, response) {
//   return response.json({theId: request.params.id});
// }

// new
export function update(request, response) {
  return response.json(Vehicle[0].name = request.params.id);
}

// old
// export function remove(request, response){
//   return response.json({});
// }

// new
export function remove(request, response) {
  return response.json(Vehicle.pop());
}
