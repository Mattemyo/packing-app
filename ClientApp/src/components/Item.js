import React, { Component } from 'react';
import { Segment, Checkbox, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { itemChecked, itemDeleted, itemUpdated } from '../actions/items';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon/Icon';

// TODO: Make Item editable
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: { transform: 'scaleY(0)' },
      isEditable: false,
      name: props.name,
      newName: props.name
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ style: { transform: 'scaleY(1)' } });
    }, 150);
  };

  deleteItem = () => {
    this.animateLeave(this.props.itemDeleted, { name: this.props.name });
  };

  toggleInputBox = () => {
    // Don't show input box if item is being checked or deleted, therefore, set timeout to wait until

    setTimeout(() => {
      // save current name,
      this.setState({ name: this.state.name });
      // make content editable
      this.setState({ isEditable: !this.state.isEditable });

      // Dispatch: Update list of items after leaving input box, payload should include -->
      //  --> previous name and current name
      if (!this.state.isEditable) {
        this.props.itemUpdated({
          name: this.state.name,
          newName: this.state.newName
        });
      }
    }, 150);
  };

  handleInputChange = (e) => {
    this.setState({ newName: e.target.value });
  };

  handleCheck = (e, { name, checked }) => {
    this.animateLeave(this.props.itemChecked, { name, checked });
  };

  animateLeave = (action, elementAtrributes) => {
    this.setState({ style: { transform: 'scaleY(0)', height: '60px' } });
    setTimeout(() => {
      action(elementAtrributes);
    }, 180);
  };

  render() {
    const {
      state: { style, isEditable, name, newName },
      props: { segmentStyle, isChecked },
      handleCheck,
      deleteItem,
      toggleInputBox,
      handleInputChange
    } = this;

    return (
      <Segment
        style={{
          ...style,

          ...segmentStyle,
          display: 'flex',
          transition: 'all 0.2s ease-out'
        }}
        onClick={toggleInputBox}
      >
        <Checkbox name={name} onClick={handleCheck} fitted={false} checked={isChecked} />
        {isEditable ? (
          <Input
            ref={(input) => input && input.focus()}
            type="text"
            value={newName}
            placeholder={newName}
            style={{ flex: 1, margin: 1, background: 'rgba(0, 0, 0, 0.5)' }}
            onFocus={(e) => e.target.select()}
            onBlur={toggleInputBox}
            onChange={handleInputChange}
            onKeyPress={(e) => e.which === 13 && toggleInputBox()}
          />
        ) : (
          <h3 style={{ flex: 1, margin: 0 }}>{newName}</h3>
        )}

        <Icon onClick={deleteItem} name="delete" style={{ cursor: 'pointer' }} />
      </Segment>
    );
  }
}

export default connect(null, { itemChecked, itemDeleted, itemUpdated })(Item);
