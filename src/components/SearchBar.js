import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <form className="form-group" onSubmit={this.onFormSubmit}>
        <div className="field input-group">
          <input
            className="form-control form-control-lg"
            type="text"
            value={this.state.term}
            placeholder="Image Search"
            onChange={e => this.setState({ term: e.target.value })}
          />
          <span className="input-group-btn">
            <input className="btn btn-info" type="submit" value="Submit" />
          </span>
        </div>
      </form>
    );
  }
}

export default SearchBar;
