import React from 'react';
import { Container } from 'semantic-ui-react';
import Footer from '../Footer';
import ItemList from '../ItemList';

export default (): Element<any> => (
  <div style={{ margin: '50px 0' }}>
    <Container>
      <ItemList listName="Items to Pack" />
    </Container>
    <hr
      style={{
        margin: '50px auto',
        width: '80%',
        border: '0',
        height: '1px',
        backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), #008080, rgba(0, 0, 0, 0))'
      }}
    />
    <Container>
      <ItemList listName="Items Packed" />
    </Container>
    <Footer />
  </div>
);
