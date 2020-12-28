import React from "react";
import "../css/navbar.css";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar w-100 text-light d-flex justify-content-center fixed-top">
      <div className="w-25">
        <Button
          href="#"
          className="text-decoration-none text-reset swift pl-4 pr-4
        pt-2 pl-2 text-left"
          style={{ fontSize: "26px", fontWeight: "700", width: "150px" }}
          disableTouchRipple="true"
          disableRipple="true"
          disableFocusRipple="true"
        >
          Swift
        </Button>
      </div>
      <div className="d-flex" style={{ height: "80%", width: "38%" }}>
        <SearchIcon
          className="h-100"
          //   style={{ borderBottom: "1px solid white" }}
        />
        <input
          type="text"
          placeholder="Whats's on your mind?"
          className="bg-transparent flex-grow-1 pr-4 pl-4 text-light searchBar m-0 h-100"
        />
      </div>
      <div className="w-25 d-flex justify-content-end">
        <Button
          component={Link}
          to="/mywabbit/"
          color="secondary"
          className="text-light pl-4 pr-4 login h-75 text-right"
          size="large"
          disableElevation="true"
          style={{ fontSize: "13px", width: "150px" }}
        >
          My Wabbit
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
