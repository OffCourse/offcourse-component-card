import React from "react";
import Card from "../src/index.jsx";

let model = {
  title: "Bla di Bla",
  curator: "Bla Bla Bla"
};

let schema = ["title", {meta: ["curator", "followers"]}];

class Example extends React.Component {

  render() {
    return (
      <Card model={ model } schema={ schema }/>
    );
  }
}

export default Example;
