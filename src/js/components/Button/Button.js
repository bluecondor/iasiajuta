import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

class Button extends Component {
  renderButton({ link, content }) {
    return (
      <div className='Button'>
        <Link to={link}>
          <span>{content}</span>
        </Link>
      </div>
    );
  }

  render() {
    return this.renderButton({...this.props});
  };
}

Button.defaultProps = {
  link: '',
  content: ''
};

Button.PropTypes = {
  link: PropTypes.string,
  content: PropTypes.string
};

export default Button;