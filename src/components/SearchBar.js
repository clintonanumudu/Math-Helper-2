import React, { Component } from 'react';
import '../styles/style.css';

class SearchBar extends Component {
  state = {
    suggestions: [],
    height: '5vh',
  };

  handleSuggestions = (e) => {
    const list = this.props.list;
    let input = '';
    if (e.key.length == 1) {
      input = e.target.value + e.key;
    } else if (e.key == 'Backspace') {
      input = e.target.value.slice(0, -1);
    } else {
      input = e.target.value;
    }

    let suggestions = [];
    for (let i = 0; i < list.length; i++) {
      if (
        input.length > 0 &&
        list[i].name.toLowerCase().indexOf(input.toLowerCase()) > -1
      ) {
        suggestions.push(list[i]);
      }
    }
    this.setState({ suggestions: suggestions });
  };

  render() {
    return (
      <>
        <input
          className="search"
          style={{ height: this.state.height }}
          onKeyDown={this.handleSuggestions}
        />
        {this.state.suggestions.map((item) => (
          <input
            className="results"
            style={{ height: this.state.height }}
            value={item.name}
          />
        ))}
      </>
    );
  }
}

export default SearchBar;
