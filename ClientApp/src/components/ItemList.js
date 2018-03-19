import React from 'react';
import { Segment, Grid, Input, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Item from './Item';

const ItemList = ({ listName, segmentStyle, items }) => {
  const filteredItems = items.reduce((acc, item) => {
    const itemComponent = <Item name={item.name} key={item.name} isChecked={item.isChecked} />;

    if (listName === 'Items Packed' && item.isChecked) {
      acc.push(itemComponent);
    }

    if (listName === 'Items to Pack' && !item.isChecked) {
      acc.push(itemComponent);
    }

    return acc;
  }, []);

  return (
    <Grid columns={2}>
      {/* Title Row */}
      <Grid.Row>
        <Grid.Column width={5} />
        <Grid.Column>
          <Segment style={{ ...segmentStyle, background: 'darkgreen' }}>
            <h2>{listName}</h2>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      {/* row 2 */}
      <Grid.Row>
        {/* New Item column */}
        <Grid.Column width={5}>
          <Segment style={segmentStyle}>
            <h3>Add New Item</h3>
            <Input size="small" style={{ opacity: '0.5' }} />
            <Button style={{ marginLeft: '20px' }} size="small" color="green">
              Add
            </Button>
          </Segment>
        </Grid.Column>
        {/* Packed */}
        <Grid.Column>
          <Grid.Row>{filteredItems}</Grid.Row>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

function mapStateToProps(state = {}) {
  return state;
}

export default connect(mapStateToProps, {})(ItemList);
