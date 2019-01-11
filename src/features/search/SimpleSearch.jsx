import React, { Component } from "react";
import { Search } from "semantic-ui-react";

class SimpleSearch extends Component {
  render() {

    return (
      <Search
        size="big"
        fluid
        icon="search"
        placeholder="Etsii paikkaa..."
      />
    );
  }
}

export default SimpleSearch