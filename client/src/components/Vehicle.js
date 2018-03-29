import React, { Component } from "react";

class Vehicle extends Component {
  componentDidMount() {
    const myId = this.props.match.params.id;
    this.props.getVehicle(myId);

  }
  render() {
    return (
      <div>
        <h2>Model: {this.props.vehicle.model}</h2>
        <div>Year: {this.props.vehicle.year}</div>
        <div>make: {this.props.vehicle.make}</div>
      </div>
    );
  }
}
export default Vehicle;
