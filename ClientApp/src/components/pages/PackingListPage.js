import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Footer from '../Footer';
import ItemList from '../ItemList';

const segmentStyle = {
  background: '#008080',
  boxShadow: '2px 2px 8px 0px rgba(0, 0, 0, 0.2)',
  width: '100%'
};

class PackingListPage extends Component {
  state = {};

  render() {
    const { props: { items } } = this;

    return (
      <div style={{ margin: '50px 0 0px' }}>
        {/* Unchecked */}
        <Container>

          <ItemList
            listName="Items to Pack"
            segmentStyle={segmentStyle}
          />
        </Container>
        <hr
          style={{
            margin: '50px auto',
            width: '80%',
            border: '0',
            height: '1px',
            backgroundImage:
              'linear-gradient(to right, rgba(0, 0, 0, 0), #008080, rgba(0, 0, 0, 0))'
          }}
        />
        {/* Checked */}
        <Container>
          <ItemList
            listName="Items Packed"
            segmentStyle={segmentStyle}
          />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default PackingListPage;
