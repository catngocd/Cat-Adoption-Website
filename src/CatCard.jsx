import React, { Component } from "react";
import "./styles.css";
class CatCard extends Component {
  render() {
    return (
      <div id="card">
        <img id="images" src={this.props.imageLink} alt="" />
        <div id="card-text">
          <br />
          <b>Name:</b> {this.props.name}
          <br />
          <br />
          <i>{this.props.dist} miles away</i>
          <br />
          <br />
          <b>Age:</b> {this.props.age}
          <br />
          <br />
          <b>Breed:</b> {this.props.breed}
          <br />
          <br />
          <div id="trait-button">
            <div id="trait">
              <b>{this.props.trait}</b>
            </div>
            <button type="button" id="contact-button">
              <b>Contact</b>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CatCard;
