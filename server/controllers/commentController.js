// import comments from "../comments";
import Comment from "../models/Comment";

// old
// export function list(request, response) {
//   return response.json(comments);
// }

// new
export function list(request, response){
  Comment.find({}).exec()
  .then(comments => {
    return response.json(comments);
  });
}

// old
// export function show(request, response) {
//   return response.json(comments.find(comment => comment._id == request.params.id));
// }

// new
export function show(request, response){
  Comment.findById(request.params.id).exec()
  .then(comments => {
    return response.json(comments);
  });
}

// old
// export function create(request, response){
//   comments.push(request.body);
//   return response.json(comments);
// }

// new
export function create(request, response) {
  const comment = new Comment({
    body: request.body.body
  });
  comment.save()
  .then(comments => {
    return response.json(comments);
  });
}

// old
// export function update(request, response) {
//   return response.json({myId: request.params.id});
// }

// new
export function update(request, response) {
  return response.json(Comment[0].name = request.params.id);
}

export function remove(request, response) {
  return response.json(Comment.pop());

}
