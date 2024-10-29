import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer style={{marginTop: "1%", width: "100%"}} className="bg-dark text-white text-center py-3">
          <p>© Your Website 2024</p>
        </footer>
      </div>
    );
  }
}
