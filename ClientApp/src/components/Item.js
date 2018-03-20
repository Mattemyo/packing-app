import React, { Component } from 'react';
import { Segment, Checkbox, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { itemChecked, itemDeleted } from '../actions/items';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon/Icon';

// TODO: Make Item editable
class Item extends Component {
  state = {
    style: { transform: 'scaleY(0)' },
    isEditable: false,
    inputValue: ''
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ style: { transform: 'scaleY(1)' } });
    }, 150);
  };

  handleCheck = (e, { name, checked }) => {
    this.animateLeave(this.props.itemChecked, { name, checked });
  };

  deleteItem = () => {
    this.animateLeave(this.props.itemDeleted, { name: this.props.name });
  };

  toggleEditability = () => {
    this.setState({ isEditable: !this.state.isEditable });
  };

  onInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  animateLeave = (action, elementAtrributes) => {
    this.setState({ style: { transform: 'scaleY(0)', height: '60px' } });
    setTimeout(() => {
      action(elementAtrributes);
    }, 150);
  };

  render() {
    const {
      state: { style, isEditable, inputValue },
      props: { name, segmentStyle, isChecked },
      handleCheck,
      deleteItem,
      toggleEditability,
      onInputChange
    } = this;

    return (
      <Segment
        style={{
          ...style,

          ...segmentStyle,
          display: 'flex',
          transition: 'all 0.2s ease-out'
        }}
        onClick={toggleEditability}
      >
        <Checkbox name={name} onClick={handleCheck} fitted={false} checked={isChecked} />
        {isEditable ? (
          <Input
            transparent
            ref={(input) => input && input.focus()}
            type="text"
            value={inputValue}
            placeholder={name}
            style={{ flex: 1, margin: 1, background: 'rgba(0, 0, 0, 0.5)' }}
            focus={isEditable}
            onChange={onInputChange}
          />
        ) : (
          <h3 style={{ flex: 1, margin: 0 }}>{name}</h3>
        )}

        <Icon onClick={deleteItem} name="delete" style={{ cursor: 'pointer' }} />
      </Segment>
    );
  }
}

export default connect(null, { itemChecked, itemDeleted })(Item);
