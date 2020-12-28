import Navbar from "./Navbar.jsx";
import Main from "./Main.jsx";
import Sidenav from "./Sidenav.jsx";
import Trending from "./Trending.jsx";

import React, { Component } from "react";

export default class Authenticated extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div
          className="w-100 h-100 d-flex justify-content-center"
          style={{ marginTop: "80px" }}
        >
          <Sidenav></Sidenav>
          <Main></Main>
          <Trending></Trending>
        </div>
      </div>
    );
  }
}
