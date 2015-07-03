import React from "react";
import classnames from "classnames";
import CardContent from "offcourse-component-card-content";

class CardFooter extends React.Component {

  constructor(props){
    super(props);
    this.name = "card_footer";
  }

  classes(){
    return classnames({
      [this.name]: true
    });
  }

  render() {
    const { buttons } = this.props;
    return (
      <section className={ this.classes() }>
        { buttons }
      </section>
    );
  }
}

class Card extends React.Component {

  constructor(props){
    super(props);
    this.name = "card";
  }


  classes(){
    let { context } = this.props;
    let contextClass = `${this.name}-${context}`;
    return classnames({
      [this.name]: true,
      [contextClass]: context
    });
  }

  checkChildren(children){
    if(children && children.length > 1){
      let [image, ...buttons] = children;
      return { image, buttons };
    }
    return { children };
  }

  render() {
    const { model, schema, context, selectModel, children } = this.props;
    const { image, buttons } = this.checkChildren(children);

    return (
      <section className={ this.classes() }>
        { image && <CardFooter buttons={ image }>Hello</CardFooter> }
        <CardContent schema={ schema[context] } model={ model }/>
        { buttons && <CardFooter buttons={ buttons } /> }
      </section>
    );
  }
}

Card.defaultProps = {
  selectModel: () => null
};

Card.propTypes = {
  model: React.PropTypes.object.isRequired,
  schema: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array
  ]).isRequired,
  selectModel: React.PropTypes.func
};

export default Card;
