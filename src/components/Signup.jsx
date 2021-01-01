import React, { Component } from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import "../css/auth.css";
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

export default class Signup extends Component {
  state = {
    selectedDate: null,
    showPassword: false,
    password: "",
    confirm: "",
    name: "",
    redirect: false,
    error: false,
    unique: "",
    validName: true,
    validPassword: true,
    validUnique: true,
    validBirthday: false,
  };

  handleDateChange = (event) => {
    this.setState({ selectedDate: event });
  };

  handlePasswordChange = (prop) => (event) => {
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

  handleConfirmPasswordChange = (prop) => (event) => {
    const input = event.nativeEvent.data;
    let confirm = this.state.confirm;
    if (input !== null) {
      confirm += input;
      this.setState({ confirm: confirm });
    } else {
      if (this.state.confirm.length !== 0) {
        confirm = confirm.slice(0, -1);
        this.setState({ confirm: confirm });
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
    this.setState({ name: event.target.value });
  };

  uniqueFieldDidChange = (event) => {
    this.setState({ unique: event.target.value });
  };

  signup = () => {
    const name = this.state.name;
    const password = this.state.password;
    const birthday = this.state.birthday;
    if (this.state.unique.includes("@")) {
      const email = this.state.unique;
      const data = {
        email: email,
        name: name,
        birthdate: birthday,
        password: password,
      };
    } else {
      const phone = this.state.unique;
      const data = {
        phone: phone,
        name: name,
        birthdate: birthday,
        password: password,
      };
    }
  };

  render() {
    if (this.state.redirect) return <Redirect to="/" />;

    return (
      <form className="w-50 m-5">
        <h1>Sign up for wabbit</h1>
        <div className="form-group d-flex">
          <FormControl className="w-100" variant="outlined">
            <TextField
              onChange={this.textFieldDidChange}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
          </FormControl>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              autoOk
              variant="inline"
              inputVariant="outlined"
              label="Birthday"
              format="dd/MM/yyyy"
              value={this.state.selectedDate}
              InputAdornmentProps={{ position: "start" }}
              onChange={this.handleDateChange}
              disableFuture="true"
              maxDateMessage="Birthday cannot be after today"
            />
          </MuiPickersUtilsProvider>
        </div>
        <div className="form-group">
          <FormControl className="w-100" variant="outlined">
            <TextField
              onChange={this.uniqueFieldDidChange}
              id="outlined-basic"
              label="Email or Phone"
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
              onChange={this.handlePasswordChange("password")}
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
        <div className="form-group">
          <FormControl className="w-100" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={this.state.showPassword ? "text" : "password"}
              value={this.state.confirm}
              onChange={this.handleConfirmPasswordChange("password")}
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
              labelWidth={135}
            />
          </FormControl>
        </div>
        <div class="form-group d-flex justify-content-end">
          <Button
            className="pt-2 pb-2 pr-4 pl-4"
            onClick={this.signup()}
            disabled={
              this.state.validPassword &&
              this.state.validName &&
              this.state.validUnique &&
              this.state.validBirthday
                ? null
                : true
            }
          >
            Sign up
          </Button>
        </div>
      </form>
    );
  }
}
