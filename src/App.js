import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import CatCard from "./CatCard";
import FilterTrait from "./FilterTrait";
import "./styles.css";

const cats = [
  <CatCard
    name="Furball"
    imageLink={require("./img/5.jpg")}
    breed="Tabby Cat"
    age="4 years old"
    trait="Intelligent"
    ageRange="Adult"
    dist="0.2"
  />,
  <CatCard
    name="Fluff"
    imageLink={require("./img/2.jpg")}
    breed="Ragamuffin"
    age="3 years old"
    trait="Affectionate"
    ageRange="Adult"
    dist="0.1"
  />,
  <CatCard
    name="Meep"
    imageLink={require("./img/3.jpg")}
    breed="Himalayan"
    age="1 year old"
    trait="Affectionate"
    ageRange="Kitten"
    dist="0.2"
  />,
  <CatCard
    name="Foo"
    imageLink={require("./img/4.jpg")}
    breed="Turkish Van"
    age="10 years old"
    trait="Intelligent"
    ageRange="Elder"
    dist="0.6"
  />,
  <CatCard
    name="Daisy"
    imageLink={require("./img/7.jpg")}
    breed="Shorthair mix"
    age="3 years old"
    trait="Playful"
    ageRange="Adult"
    dist="0.5"
  />,
  <CatCard
    name="Mochi"
    imageLink={require("./img/6.jpg")}
    breed="Maine Coon"
    age="10 years old"
    trait="Intelligent"
    ageRange="Elder"
    dist="0.7"
  />,
  <CatCard
    name="Oscar"
    imageLink={require("./img/8.jpg")}
    breed="Munchkin"
    age="2 months"
    trait="Playful"
    ageRange="Kitten"
    dist="0.1"
  />,
  <CatCard
    name="Muffins"
    imageLink={require("./img/1.JPG")}
    breed="American Curl"
    age="3 months"
    trait="Affectionate"
    ageRange="Kitten"
    dist="0.3"
  />,
  <CatCard
    name="Peaches"
    imageLink={require("./img/9.jpg")}
    breed="Domestic longhair"
    age="7 months old"
    trait="Playful"
    ageRange="Kitten"
    dist="0.2"
  />,
  <CatCard
    name="KitKat"
    imageLink={require("./img/10.png")}
    breed="Tabby Cat"
    age="10 years old"
    trait="Affectionate"
    ageRange="Elder"
    dist="0.9"
  />,
  <CatCard
    name="Oreo"
    imageLink={require("./img/11.jpg")}
    breed="Turkish Angora"
    age="8 years old"
    trait="Intelligent"
    ageRange="Adult"
    dist="0.4"
  />,
  <CatCard
    name="Whiskers"
    imageLink={require("./img/12.jpg")}
    breed="Shorthair mix"
    age="9 years old"
    trait="Playful"
    ageRange="Elder"
    dist="0.3"
  />
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header pageName="Cat Adoption"/>
        <div id="line" />
        <FilterTrait items={cats} />
        <div id="line" />
        <Footer />
      </div>
    );
  }
}

export default App;
