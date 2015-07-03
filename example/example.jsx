import React from "react";
import Card from "../src/index.jsx";

let model = {
  title: "Bla di Bla",
  user: "Al Dentist",
  followers: 3
};

let context = "main";
let schema = {[context]: ["title", {"meta": ["user", "followers"]}]};

class Example extends React.Component {

  render() {
    return (
      <Card model={ model } context={ context } schema={ schema }>
      </Card>
    );
  }
}

export default Example;
