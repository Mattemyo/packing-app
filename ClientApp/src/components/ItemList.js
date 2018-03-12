import React from 'react';
import { Segment, Grid, Input, Button } from 'semantic-ui-react';

const segmentStyle = {
  background: '#008080',
  boxShadow: '2px 2px 8px 0px rgba(0, 0, 0, 0.2)',
  width: '100%'
};

export default ({listName}): Element<any> => (
  <Grid columns={2}>
    {/* Title Row */}
    <Grid.Row>
      <Grid.Column width={5} />
      <Grid.Column>
        <Segment style={segmentStyle}>
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
      {/* ListColumn */}
      <Grid.Column>
        <Grid.Row>
          <Segment style={segmentStyle}>
            <h4>Hello</h4>
          </Segment>
          <Segment style={segmentStyle}>
            <h4>Hello</h4>
          </Segment>
          <Segment style={segmentStyle}>
            <h4>Hello</h4>
          </Segment>
          <Segment style={segmentStyle}>
            <h4>Hello</h4>
          </Segment>
          <Segment style={segmentStyle}>
            <h4>Hello</h4>
          </Segment>
          <Segment style={segmentStyle}>
            <h4>Hello</h4>
          </Segment>
          <Segment style={segmentStyle}>
            <h4>Hello</h4>
          </Segment>
        </Grid.Row>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
