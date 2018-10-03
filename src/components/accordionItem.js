import React from 'react';
import './accordion.scss';

class AccordionItem extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      active: !this.state.active,
      //   className: 'active',
    });
  }
  render() {
    const activeClass = this.state.active ? 'active' : 'inactive';
    const question = this.props.details;
    return (
      <div role="menuitem" className={activeClass} onClick={this.toggle}>
        <p className="summary">{question.summary}</p>
        <p className="folding-pannel answer">{question.answer}</p>
      </div>
    );
  }
}

export default AccordionItem;
