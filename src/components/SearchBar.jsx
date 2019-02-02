import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="header--search-bar">
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            value={this.state.term}
            onChange={e => {
              this.setState({ term: e.target.value });
            }}
          />
          <button onSubmit={this.onFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
