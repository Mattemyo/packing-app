import React, { Component } from 'react';
import { Segment, Button, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { itemCreated } from '../../actions/items';

class AddItemCtA extends Component {
  state = {
    name: ''
  };

  onInputChange = (e) => {
    this.setState({ name: e.target.value });
  };

  submitNewItem = () => {
    // check if input is empty
    if (this.state.name === '') return;
    // dispatch action, payload contains the new item
    this.props.itemCreated({
      name: this.state.name,
      isChecked: this.props.listName === 'Items Packed'
    });
    // reset input box
    this.setState({ name: '' });
  };

  render() {
    const { props: { segmentStyle }, onInputChange, submitNewItem, state: { name } } = this;

    return (
      <Segment style={segmentStyle}>
        <h3>Add New Item</h3>
        <Input
          value={name}
          onChange={onInputChange}
          onKeyPress={(e) => e.which === 13 && submitNewItem()}
          style={{ opacity: '0.5', maxWidth: '96%' }}
        />
        <Button
          onClick={submitNewItem}
          style={{ margin: '6px auto', width: '80%' }}
          size="small"
          color="green"
        >
          Add
        </Button>
      </Segment>
    );
  }
}

export default connect(null, { itemCreated })(AddItemCtA);
