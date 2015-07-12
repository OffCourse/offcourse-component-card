import React from "react";
import R from "ramda";
import classnames from "classnames";

import CardHelpers from "offcourse-helpers-card-component";
import CardSection from "offcourse-component-card-section";

class Card extends React.Component {

  constructor(props){
    super(props);
    const helpers = new CardHelpers();
    this.partition = helpers.partition;
    this.name = "card";
  }

  classes(){
    const { context } = this.props;
    const contextClass = `${this.name}-${context}`;
    return classnames({
      [this.name]: true,
      [contextClass]: context
    });
  }

  createSections(schema, model){
    const partitions = this.partition(schema, model);
    return R.mapIndexed((partition, index) => (
      <CardSection key={ index } section={ partition }/>
    ), partitions);
  }

  render() {
    const { model, schema } = this.props;
    const sections = this.createSections(schema, model);
    return (
      <section className={ this.classes() }>
        { sections }
      </section>
    );
  }
}

Card.defaultProps = {};

Card.propTypes = {
  model: React.PropTypes.object.isRequired,
  schema: React.PropTypes.array.isRequired,
  context: React.PropTypes.string
};

export default Card;
