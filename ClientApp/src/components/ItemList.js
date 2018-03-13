import React from 'react';
import { Segment, Grid, Input, Button } from 'semantic-ui-react';
import Item from './Item';

export default ({
  listName,
  segmentStyle,
  items
}: {
  listName: string,
  segmentStyle: {},
  items: []
}): JSX.Element => (
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
        <Grid.Row>
          {items.map((item: {}): JSX.Element => (
            <Item key={item.name} segmentStyle={segmentStyle} />
          ))}
        </Grid.Row>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
