import React from "react";
import classnames from "classnames";
import CardContent from "offcourse-component-card-content";

class Card extends React.Component {

  static propTypes(){
    return {
      model: React.PropTypes.object.isRequired,
      schema: React.PropTypes.array.isRequired
    };
  }

  constructor(props){
    super(props);
    this.name = "card";
  }

  classes(){
    return classnames({
      [this.name]: true
    });
  }

  render() {
    return (
      <section className={ this.classes() }>
        <CardContent {...this.props} context={ this.name }/>
      </section>
    );
  }
}

export default Card;
