import React from "react";
import classnames from "classnames";
import CardHeader from "offcourse-component-card-header";
import CardContent from "offcourse-component-card-content";
import CardFooter from "offcourse-component-card-footer";

class Card extends React.Component {

  constructor(props){
    super(props);
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

  splitChildren(children){
    if(children && Array.isArray(children)){
      const [head, ...tail] = children;
      return [ head, tail ];
    }
    return [ children ];
  }

  render() {
    const { model, context, selectModel, children } = this.props;
    const schema = model.schema[context] || model.schema;
    const [ image, buttons ] = this.splitChildren(children);

    return (
      <section className={ this.classes() }>
        { image && <CardHeader image={ image }></CardHeader> }
        <CardContent schema={ schema } model={ model }/>
        { buttons && <CardFooter buttons={ buttons }></CardFooter> }
      </section>
    );
  }
}

Card.defaultProps = {};

Card.propTypes = {
  model: React.PropTypes.object.isRequired
};

export default Card;
