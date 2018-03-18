import React, { Component } from 'react';
import { Segment, Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { itemChecked } from '../actions/items';

class Item extends Component {
  state = {
    style: { transform: 'scaleY(0)' }
  };

  componentDidMount = () => {
    this.setState({ style: { transform: 'scaleY(1)' } });
  };

  handleCheck = (e, { name, checked }) => {
    itemChecked({
      name,
      checked
    });
  };

  render() {
    const { state: { style }, props: { name, segmentStyle, isChecked }, handleCheck } = this;

    return (
      <Segment
        style={{ ...style, ...segmentStyle, display: 'flex', transition: 'all 0.2s ease-out' }}
      >
        <Checkbox
          name={name}
          onClick={handleCheck}
          style={{ flex: 1 }}
          fitted={false}
          checked={isChecked}
        />
        <h3 style={{ flex: 1, margin: 0 }}>{name}</h3>
      </Segment>
    );
  }
}

export default connect(null, { itemChecked })(Item);
