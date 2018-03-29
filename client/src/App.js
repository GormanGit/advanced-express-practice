import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import VehicleContainer from "./containers/VehicleContainer";
import ContactContainer from "./containers/ContactContainer";
import CommentContainer from "./containers/CommentContainer";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";


class App extends Component {
  constructor() {
    super();
    this.state = {users: []};
  }
  componentDidMount() {
    this.props.loadComments();
    this.props.loadContacts();
    this.props.loadVehicles();
    this.props.loadProducts();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/vehicle/:id" component={ VehicleContainer }/>
            <Route path="/contact/:id" component={ ContactContainer }/>
            <Route path="/comment/:id" component={ CommentContainer }/>
            <Route path="/" component={Main}/>
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}
export default (App);


