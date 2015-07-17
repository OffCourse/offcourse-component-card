import React from "react";
import Card from "../src/index.jsx";

class Map extends React.Component {
  render(){
    return <div>Hello World</div>;
  }
}

let model = {
  map: Map,
  title: "Bla di Bla",
  curator: "Bla Bla Bla"
};


let schema = ["map", "title", {meta: ["curator", "followers"]}];

class Example extends React.Component {

  render() {
    return (
      <Card model={ model } schema={ schema }/>
    );
  }
}

export default Example;
