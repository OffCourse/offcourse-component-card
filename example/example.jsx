import React from "react";
import Card from "../src/index.jsx";

let model = {
  title: "Bla di Bla"
};

let context = "main";
let schema = {[context]: ["title"]};

class Example extends React.Component {

  render() {
    return (
      <Card model={ model } context={ context } schema={ schema }>
        <p>HELLO WORLD</p>
        <p>HELLO WORLD</p>
      </Card>
    );
  }
}

export default Example;
