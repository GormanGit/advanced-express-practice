// import contacts from "../contacts";
import Contact from "../models/Contact";

// old
// export function list(request, response) {
//   return response.json(contacts);
// }

// new
export function list(request, response){
  Contact.find({}).exec()
  .then(contacts => {
    return response.json(contacts);
  });
}
// old
// export function show(request, response){
//   return response.json(contacts.find(contact => contact._id == request.params.id));
// }

// new
export function show(request, response) {
  Contact.findById(request.params.id).exec()
  .then(contacts => {
    return response.json(contacts);
  });
}

// old
// export function create(request, response){
//   contacts.push(request.body);
//   return response.json({});
// }

// new
export function create(request, response) {
  const contact = new Contact({
    name: request.body.name,
    occupation: request.body.occupation,
    avatar: request.body.avatar
  });
  contact.save()
  .then(contacts =>{
    return response.json(contacts);
  });
}

// old
// export function update(request, response) {
//   return response.json({theId: request.params.id});
// }

// new
export function update(request, response) {
  return response.json(Contact[0].name = request.params.id);
}

// old
// export function remove(request, response) {
//   return response.json({});
// }

// new
export function remove(request, response) {
  return response.json(Contact.pop());
}
