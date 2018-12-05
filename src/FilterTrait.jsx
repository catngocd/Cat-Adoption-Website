import React, { Component } from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";

class FilterTrait extends Component {
  constructor(props) {
    super(props);
    // TODO: Add a new key/value pair in the state to keep track of type
    this.state = {
      search: "",
      traitType: "All",
      ageGroup: "All",
      sortCat: "All"
    };
  }

  filterTrait = item => {
    if (this.state.traitType === "All") {
      return item.props.breed.toLowerCase().search(this.state.search) !== -1;
    } else {
      return (
        item.props.breed.toLowerCase().search(this.state.search) !== -1 &&
        item.props.trait === this.state.traitType
      );
    }
  };

  filterAge = item => {
    if (this.state.ageGroup === "All") {
      return item.props.breed.toLowerCase().search(this.state.search) !== -1;
    } else {
      return (
        item.props.breed.toLowerCase().search(this.state.search) !== -1 &&
        item.props.ageRange === this.state.ageGroup
      );
    }
  };

  compareFunction = (a, b) => {
    if (this.state.sortCat === "All") {
      return 0;
    } else {
      return a.props.dist - b.props.dist;
    }
  };

  onSearch = event => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  };

  onSelectEvent = (eventKey, event) => {
    this.setState({ traitType: eventKey });
    // this.filterItem(event);
  };

  onSelectAge = eventKey => {
    this.setState({ ageGroup: eventKey });
  };

  onSelectSort = eventKey => {
    this.setState({ sortCat: eventKey });
  };

  render() {
    return (
      <div className="filter-list">
        <br />
        <input
          type="text"
          placeholder="Search by breed"
          onChange={this.onSearch}
          id="search-bar"
        />
        <br /> <br />
        <div id="filter-bar">
          <div id="filter-text">
            <b>Filter by:</b>
          </div>
          <div id="dropdown-1">
            <DropdownButton id="typeDropdown" title={"Traits"}>
              <MenuItem eventKey="All" onSelect={this.onSelectEvent}>
                {" "}
                All{" "}
              </MenuItem>
              <MenuItem eventKey="Affectionate" onSelect={this.onSelectEvent}>
                Affectionate
              </MenuItem>
              <MenuItem eventKey="Playful" onSelect={this.onSelectEvent}>
                Playful
              </MenuItem>
              <MenuItem eventKey="Intelligent" onSelect={this.onSelectEvent}>
                Intelligent
              </MenuItem>
            </DropdownButton>
          </div>
          <div id="dropdown-2">
            <DropdownButton id="typeDropdown" title={"Age"}>
              <MenuItem eventKey="All" onSelect={this.onSelectAge}>
                All
              </MenuItem>
              <MenuItem eventKey="Kitten" onSelect={this.onSelectAge}>
                Kitten
              </MenuItem>
              <MenuItem eventKey="Adult" onSelect={this.onSelectAge}>
                Adult
              </MenuItem>
              <MenuItem eventKey="Elder" onSelect={this.onSelectAge}>
                Elder
              </MenuItem>
            </DropdownButton>
          </div>
          <div id="sort-text">
            <b>Sort by:</b>
          </div>
          <DropdownButton id="typeDropdown" title={"None"}>
            <MenuItem eventKey="All" onSelect={this.onSelectSort}>
              None
            </MenuItem>
            <MenuItem eventKey="distance" onSelect={this.onSelectSort}>
              Distance from you
            </MenuItem>
          </DropdownButton>
        </div>
        <div id="card-wrapper">
          {" "}
          {this.props.items
            .filter(this.filterAge)
            .filter(this.filterTrait)
            .sort(this.compareFunction)}{" "}
        </div>
      </div>
    );
  }
}

export default FilterTrait;
