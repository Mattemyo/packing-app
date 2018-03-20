import React from 'react';
import { Segment, Grid, Input, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Item from './Item';
import AddItemCtA from './ctas/AddItemCtA';

const ItemList = ({ listName, segmentStyle, items }) => {
  // Filter Items
  const filteredItems = items.reduce((acc, item) => {
    const itemComponent = (
      <Item
        segmentStyle={segmentStyle}
        name={item.name}
        key={item.name}
        isChecked={item.isChecked}
      />
    );

    if (listName === 'Items Packed' && item.isChecked) {
      return [...acc, itemComponent];
    }

    if (listName === 'Items to Pack' && !item.isChecked) {
      return [...acc, itemComponent];
    }

    return acc;
  }, []);

  return (
    <Grid textAlign="center" columns={2}>
      {/* Title Row */}
      <Grid.Row>
        {/* Spacer */}
        <Grid.Column width={5} />
        {/* Title */}
        <Grid.Column width={10}>
          <Segment style={{ ...segmentStyle, background: 'darkgreen' }}>
            <h2>{listName}</h2>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      {/* row 2 */}
      <Grid.Row>
        {/* New Item column */}
        <Grid.Column width={5}>
          <AddItemCtA segmentStyle={segmentStyle} listName={listName} />
        </Grid.Column>
        {/* Filtered Items */}
        <Grid.Column width={10}>
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
