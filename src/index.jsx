import React, { PropTypes } from "react";
import R from "ramda";
import classnames from "classnames";
import CardHelpers from "offcourse-helpers-card-component";
import CardSection from "offcourse-component-card-section";

class Card extends React.Component {
 static defaultProps = {};

  static propTypes = {
    model: PropTypes.object.isRequired,
    schema: PropTypes.array.isRequired,
    context: PropTypes.string,
    components: PropTypes.object,
    handlers: PropTypes.object
  };

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

  createSections(){
    const { model, schema } = this.props;
    const partitions = this.partition(schema, model);
    return R.mapIndexed((partition, index) => (
      <CardSection key={ index } {...partition}/>
    ), partitions);
  }

  render() {
    const sections = this.createSections();
    return (
      <section className={ this.classes() }>
        { sections }
      </section>
    );
  }
}

export default Card;
