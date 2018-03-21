import React from 'react';
import { Button, Input } from 'semantic-ui-react';

export default ({ handleListSave }) => (
  <div>
    <Button onClick={handleListSave}>Save List</Button>
  </div>
);
