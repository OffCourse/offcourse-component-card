import React from "react";
import Card from "../src/index.jsx";
import TodoList from "offcourse-component-todolist";
import Radium from "radium";

class TodoContainer extends React.Component {
  render(){
    const { data, handlers } = this.props;
    const { foobar } = data;
    const { handleHover, handleClick, handleComplete } = handlers;
    return (
      <TodoList
        handleTitleClick={ handleClick }
        handleCheckboxClick={ handleComplete }
        handleHover={ handleHover }
        collection={ foobar }/>
     );
  }
}

let aModel = {
  map: "Hello",
  title: "Bla di Bla",
  curator: "Bla Bla Bla",
  summary: "Lorem Ipsum Bla di Bla",
  foobar: [{id: 0, title: "Do This"}, {id: 1, title: "Then That"}, {id: 2, title: "Finally This"}]
};

let styles = {
  width: "300px",
  margin: "30px",
  border: "1px solid black"
};

@Radium
class Example extends React.Component {
  constructor(props){
    super(props);
    this.state = { model: aModel };
    this.handlers = {
      handleHover: this.handleHover.bind(this),
      handleComplete: this.handleComplete.bind(this),
      handleClick: this.handleClick.bind(this)
    };
  }

  schema(){
    return [
      { type: "title" },
      { type: "meta", fields: ["curator", "followers"] },
      { type: "summary"},
      { type: "todo", fields: { foobar: "" }, component: TodoContainer, handlers: this.handlers }
    ];
  }

  handleHover(id){
    const { model } = this.state;
    model.foobar[id].highlight = !model.foobar[id].highlight;
    this.setState({model});
  }

  handleComplete(id){
    const { model } = this.state;
    model.foobar[id].complete = !model.foobar[id].complete;
    this.setState({model});
  }

  handleClick(msg){ console.log(msg); }

  render() {
    const { model } = this.state;
    return (
      <div style={ [styles] }>
        <Card model={ model } schema={ this.schema() }/>
      </div>
    );
  }
}

export default Example;
