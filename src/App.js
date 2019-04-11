import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomAppBar from "./components/AppBar";
import PostGrid from "./components/PostGrid";

class App extends Component {
  render() {
    return (
      <div>
        <CustomAppBar />
        <PostGrid />
      </div>
    );
  }
}

export default App;
