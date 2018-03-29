import React, { Component } from "react";

class Contact extends Component {
  componentDidMount(){
    const myId = this.props.match.params.id;
    this.props.getContact(myId);

  }
  render() {
    return (
      <div>
        <h2>Name: {this.props.contact.name}</h2>
        <div>Occupation: {this.props.contact.occupation}</div>
        <img src={this.props.contact.avatar} alt="Avatar" />
      </div>
    );
  }
}
export default Contact;
