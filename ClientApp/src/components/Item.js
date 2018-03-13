import React from 'react';
import { Segment, Checkbox } from 'semantic-ui-react';

const Item = ({ segmentStyle }: { segmentStyle: {} }): JSX.Element => (
  <Segment style={{ ...segmentStyle, display: 'flex' }}>
    <Checkbox style={{ flex: 1 }} fitted={false} />
    <h3 style={{ flex: 1, margin: 0 }}>Hello</h3>
  </Segment>
);

export default Item;
