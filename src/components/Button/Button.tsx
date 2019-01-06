import * as React from 'react';

import './Button.css';

class Button extends React.Component {
  public props: any;

  public render() {
    return (
      <button className="button" type="button" onClick={this.props.onClick}>
        <span className="button-content">
          {this.props.children}
        </span>
      </button>
    );
  }
}

export default Button;