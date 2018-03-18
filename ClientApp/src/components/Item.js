import React, { Component } from 'react';
import { Segment, Checkbox } from 'semantic-ui-react';
import {connect} from 'react-redux';

class Item extends Component {
  state = {
    style: { transform: 'scaleY(0)' }
  };

  componentDidMount = () => {
    this.setState({ style: { transform: 'scaleY(1)' } });
  };

  handleCheck = (e, element) => {
    console.log('clicked', element);
  };

  render() {
    const { state: { style }, props: { segmentStyle, isChecked }, handleCheck } = this;

    return (
      <Segment
        style={{ ...style, ...segmentStyle, display: 'flex', transition: 'all 0.2s ease-out' }}
      >
        <Checkbox onClick={handleCheck} style={{ flex: 1 }} fitted={false} checked={isChecked} />
        <h3 style={{ flex: 1, margin: 0 }}>Hello</h3>
      </Segment>
    );
  }
}


export default connect(null, {checkItem})(Item);
