import React, { Component } from "react";

class Comment extends Component {
  componentDidMount() {
    const myId = this.props.match.params.id;
    this.props.getComment(myId);

  }
  render() {
    return (
      <div>
        <h2>Comment: {this.props.comment.body}</h2>
        {/*<h3>ID: {this.props.comment._id}</h3>*/}
      </div>
    );
  }
}
export default Comment;
