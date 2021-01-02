import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../css/auth.css";
import apiLink from "../api.js";
import Cookies from "js-cookie";

export default class Login extends Component {
  state = {
    showPassword: false,
    password: "",
    username: "",
    redirect: false,
    error: false,
  };

  handleChange = (prop) => (event) => {
    // setValues({ ...values, [prop]: event.target.value });
    const input = event.nativeEvent.data;
    let password = this.state.password;
    if (input !== null) {
      password += input;
      this.setState({ password: password });
    } else {
      if (this.state.password.length !== 0) {
        password = password.slice(0, -1);
        this.setState({ password: password });
      }
    }
  };

  handleClickShowPassword = () => {
    this.state.showPassword
      ? this.setState({ showPassword: false })
      : this.setState({ showPassword: true });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  textFieldDidChange = (event) => {
    this.setState({ username: event.target.value });
  };

  login = () => {
    this.setState({ error: false });
    let credientials;
    const username = this.state.username;
    const password = this.state.password;
    if (username.includes("@")) {
      credientials = {
        validate: {
          email: username,
          password: password,
        },
      };
    } else {
      credientials = {
        validate: {
          username: username,
          password: password,
        },
      };
    }
    console.log(credientials);
    fetch(apiLink + "/users", {
      method: "POST",
      body: JSON.stringify(credientials),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status === 500) {
          this.setState({ error: true });
          return;
        }
        return res.json();
      })
      .then((data) => {
        if (data !== null) {
          // const obj = data[0];
          // Cookies.set("user", {
          //   loggedIn: true,
          //   details: obj,
          // });
          this.setState({ redirect: true });
        }
        console.log(data[0]);
      })
      .catch((err) => console.log(err));
  };

  render() {
    if (this.state.redirect) return <Redirect to="/" />;

    return (
      <form style={{ width: " 50vh", height: "75vh", margin: "300px auto" }}>
        <div className="form-group">
          <h1>Wabbit</h1>
        </div>
        {this.state.error ? (
          <p className="alert alert-info small">
            Invalid credientials.
            <Link to="/"> Forgot your password?</Link>
          </p>
        ) : null}
        <div className="form-group">
          <FormControl className="w-100" variant="outlined">
            <TextField
              onChange={this.textFieldDidChange}
              id="outlined-basic"
              label="Username or Email"
              variant="outlined"
            />
          </FormControl>
        </div>
        <div className="form-group">
          <FormControl className="w-100" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={this.state.showPassword ? "text" : "password"}
              value={this.state.password}
              onChange={this.handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    onMouseDown={this.handleMouseDownPassword}
                    edge="end"
                  >
                    {this.state.showPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
        </div>
        <div className="form-group d-flex justify-content-end">
          <Button
            onClick={this.login}
            disabled={
              this.state.password.length !== 0 &&
              this.state.username.length !== 0
                ? null
                : true
            }
          >
            Login
          </Button>
        </div>
      </form>
    );
  }
}
