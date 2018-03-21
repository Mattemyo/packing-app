import React, { Component } from 'react';
import { Segment, Button, Input, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { itemCreated } from '../../actions/items';

class AddItemCtA extends Component {
  state = {
    name: '',
    isInvalid: false
  };

  onInputChange = (e) => {
    this.setState({ name: e.target.value, isInvalid: false });
  };

  handleSubmit = () => {
    let isInvalid = false;
    // check if input is empty
    if (this.state.name === '') {
      isInvalid = true;
      return;
    }
    // check if item already exists
    isInvalid = false;
    this.props.items.forEach((item) => {
      // since state is set asynconeously, this is the best solution for now
      if (item.name === this.state.name) {
        this.setState({ isInvalid: true });
        isInvalid = true;
      }
    });

    if (!isInvalid) {
      this.createItem();

      // reset input box, and validity
      this.setState({ name: '' });
    }
  };

  // create item
  createItem = () => {
    // dispatch action, payload contains the new item only if name has not been used
    if (!this.state.isInvalid) {
      this.props.itemCreated({
        name: this.state.name,
        isChecked: this.props.listName === 'Items Packed'
      });
    }
  };

  render() {
    const {
      props: { segmentStyle },
      onInputChange,
      handleSubmit,
      state: { name, isInvalid }
    } = this;

    return (
      <Segment style={segmentStyle}>
        <h3>Add New Item</h3>
        <Input
          value={name}
          onChange={onInputChange}
          onKeyPress={(e) => e.which === 13 && handleSubmit()}
          style={{ opacity: '0.5', maxWidth: '96%' }}
        />
        <Button
          onClick={handleSubmit}
          style={{ margin: '6px auto', width: '80%' }}
          size="small"
          color="green"
        >
          Add
        </Button>
        {isInvalid && (
          <Segment style={{ ...segmentStyle, color: 'red', fontWeight: 'bold' }}>
            <p>Oops! Item already exists</p>
          </Segment>
        )}
      </Segment>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { itemCreated })(AddItemCtA);
