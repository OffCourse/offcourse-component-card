import React from "react";
import Card from "../src/index.jsx";
import TodoList from "offcourse-component-todolist";

class Map extends React.Component {
  render(){
    const { map } = this.props;
    return (
      <div>{ map }</div>
    );
  }
}

let model = {
  map: "Hello",
  title: "Bla di Bla",
  curator: "Bla Bla Bla",
  foobar: [{title: "Do This"}, {title: "Then That"}, {title: "Finally This"}]
};
let handlers = {};

let schema = {
  map: { fields: "foobar", component: TodoList },
  title: {},
  meta: { fields: ["curator", "followers"] },
  todo: { fields: { foobar: "collection" }, component: Map, handlers: handlers },
  list: { fields: { foobar: "collection" } }
};

class Example extends React.Component {

  render() {
    return (
      <Card model={ model } schema={ schema }/>
    );
  }
}

export default Example;
