import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "../css/main.css";

export default class Main extends Component {
  state = {
    text: "",
  };

  updateText = (event) => {
    // console.log(event.target.value);
    // const text = event.target.value;
    // if (text.length==0)
    this.setState({ text: event.target.value });
  };

  postStory = () => {
    const text = this.state.text;
    // fetch("")
  };

  render() {
    return (
      <div className="h-50" style={{ width: "38%" }}>
        <h3 className="pt-3 pb-2 stricky-top" style={{ fontWeight: "650" }}>
          Stories
        </h3>
        <div style={{ height: "170px" }} className="d-flex flex-column">
          <textarea
            className="w-100 flex-grow-1 pl-4 pr-4 pt-4 pb-2"
            placeholder="Write Something"
            maxLength="400"
            onChange={this.updateText}
          ></textarea>
          <div
            className="w-100 d-flex align-items-center justify-content-between pl-4 pr-3 pt-3 pb-4"
            style={{
              height: "50px",
              borderBottomLeftRadius: "1.5rem",
              borderBottomRightRadius: "1.5rem",
              borderLeft: "1px solid rgba(0, 0, 0, 0.15)",
              borderRight: "1px solid rgba(0, 0, 0, 0.15)",
              borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
            }}
          >
            <div>Bunny</div>
            <div className="d-flex align-items-center">
              <div
                className="pl-4 pr-0 pt-2 pb-2 d-flex"
                style={{
                  color: "rgba(0, 0, 0, 0.4)",
                  width: "130px",
                }}
              >
                <div className="w-75" style={{ textAlign: "end" }}>
                  {this.state.text.length}
                </div>
                <div>/400</div>
              </div>
              <Button
                disabled={this.state.text.length === 0 ? true : null}
                onClick={this.postStory}
                className="justify-self-end pl-4 pr-4 pt-2 pb-2 text-light m-3 red-btn"
              >
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
