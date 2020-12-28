import { Divider } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function Information() {
  return (
    <div
      className="border rounded"
      style={{ margin: "auto auto", width: "600px", height: "700px" }}
    >
      <Button component={Link} to="/login/">
        Sign in
      </Button>
    </div>
  );
}
