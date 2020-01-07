import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import Flowers from "./components/Flowers";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
  }

  onSearchSubmit = async term => {
    const response = await axios.get(
      "https://api.unsplash.com/search/photos?page=5&per_page=30",
      {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID 71fbc89519a56dbb1bce6bc3465051d1b31e8c871d52d11b2225d2514f2f8a41"
        }
      }
    );

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-sm navbar-dark teal mb-3 py-0">
          <div className="container">
            <a href="/" className="navbar-brand">
              PhotoSplash
            </a>
          </div>
        </nav>
        <div className="container">
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
        </div>
      </Router>
    );
  }
}
export default App;
