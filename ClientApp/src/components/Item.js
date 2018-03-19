import React, { Component } from 'react';
import { Segment, Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { itemChecked } from '../actions/items';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon/Icon';

// TODO: Make Item editable
class Item extends Component {
  state = {
    style: { transform: 'scaleY(0)' }
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ style: { transform: 'scaleY(1)' } });
    }, 150);
  };

  handleCheck = (e, { name, checked }) => {
    this.setState({ style: { transform: 'scaleY(0)', height: '60px' } });
    setTimeout(() => {
      this.props.itemChecked({
        name,
        checked
      });
    }, 150);
  };

  render() {
    const { state: { style }, props: { name, segmentStyle, isChecked }, handleCheck } = this;

    return (
      <Segment
        style={{
          ...style,
          ...segmentStyle,
          display: 'flex',
          transition: 'all 0.2s ease-out'
        }}
      >
        <Checkbox name={name} onClick={handleCheck} fitted={false} checked={isChecked} />
        <h3 style={{ flex: 1, margin: 0 }}>{name}</h3>
        <Icon name="delete" />
      </Segment>
    );
  }
}

export default connect(null, { itemChecked })(Item);
