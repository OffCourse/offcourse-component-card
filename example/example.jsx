import React from "react";
import Card from "../src/index.jsx";
import TodoList from "offcourse-component-todolist";

class TodoContainer extends React.Component {
  render(){
    const { data, handlers } = this.props;
    const { foobar } = data;
    const { handleClick } = handlers;
    return (
      <TodoList
        handleTitleClick={ handleClick.bind(this, "title") }
        handleCheckboxClick={ handleClick.bind(this, "checkbox") }
        collection={ foobar }/>
     );
  }
}

let model = {
  map: "Hello",
  title: "Bla di Bla",
  curator: "Bla Bla Bla",
  foobar: [{title: "Do This"}, {title: "Then That"}, {title: "Finally This"}]
};

let h = {
  handleClick(msg){ console.log(msg); }
};

let schema = [
  { type: "title" },
  { type: "meta", fields: ["curator", "followers"] },
  { type: "list", fields: { foobar: "data" } },
  { type: "todo", fields: { foobar: "" }, component: TodoContainer, handlers: h }
];

class Example extends React.Component {

  render() {
    return (
      <Card model={ model } schema={ schema }/>
    );
  }
}

export default Example;
