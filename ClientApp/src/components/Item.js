import React, { Component } from 'react';
import { Segment, Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { itemChecked, itemDeleted } from '../actions/items';
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

  animateLeave = (action, elementAtrributes) => {
    this.setState({ style: { transform: 'scaleY(0)', height: '60px' } });
    setTimeout(() => {
      action(elementAtrributes);
    }, 150);
  };

  handleCheck = (e, { name, checked }) => {
    this.animateLeave(this.props.itemChecked, { name, checked });
  };

  deleteItem = () => {
    this.animateLeave(this.props.itemDeleted, { name: this.props.name });
  };

  render() {
    const {
      state: { style },
      props: { name, segmentStyle, isChecked },
      handleCheck,
      deleteItem
    } = this;

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
        <Icon onClick={deleteItem} name="delete" style={{ cursor: 'pointer' }} />
      </Segment>
    );
  }
}

export default connect(null, { itemChecked, itemDeleted })(Item);
