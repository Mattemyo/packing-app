import React, { Component } from 'react';
import { Segment, Button, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { itemCreated } from '../../actions/items';

class AddItemCtA extends Component {
  state = {
    name: ''
  };

  render() {
    const { props: { segmentStyle, listName } } = this;

    return (
      <Segment style={segmentStyle}>
        <h3>Add New Item</h3>
        <Input size="small" style={{ opacity: '0.5' }} />
        <Button style={{ marginLeft: '20px' }} size="small" color="green">
          Add
        </Button>
      </Segment>
    );
  }
}

export default connect(null, { itemCreated })(AddItemCtA);
