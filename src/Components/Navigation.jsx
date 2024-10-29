import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class Navigation extends Component {
  render() {
    return (
      <nav
        style={{backgroundColor:"#bcdeeb", border: "2px solid blue", width:"80%", margin: "20px auto", height: "250px"}}
        className="py-2"
      >
        <div style={{marginLeft: "20px", marginTop: "40px"}}>
          <h1>A Warm Welcome!</h1>
          <p>This is the navigation/banner area</p>
          <Button className="btn-primary">Call so accept</Button>
        </div>


      </nav>
    );
  }
}
