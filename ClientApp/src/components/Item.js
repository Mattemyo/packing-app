import React, { Component } from 'react';
import { Segment, Checkbox } from 'semantic-ui-react';

class Item extends Component {
  state = {
    style: { transform: 'scaleY(0)' }
  };

  

  componentDidMount = () => {
    this.setState({ style: { transform: 'scaleY(1)' } });
  };

  render() {
    const { state: { style }, props: { segmentStyle } } = this;

    return (
      <Segment
        style={{ ...style, ...segmentStyle, display: 'flex', transition: 'all 0.2s ease-out' }}
      >
        <Checkbox style={{ flex: 1 }} fitted={false} />
        <h3 style={{ flex: 1, margin: 0 }}>Hello</h3>
      </Segment>
    );
  }
}

export default Item;
