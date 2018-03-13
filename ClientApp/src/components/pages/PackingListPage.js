import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Footer from '../Footer';
import ItemList from '../ItemList';

const initialList = [
  {
    name: 'Towel',
    isChecked: true
  },
  {
    name: 'Toothbrush',
    isChecked: true
  },
  {
    name: 'Hair gel',
    isChecked: true
  },
  {
    name: 'Gillete Fusion Power',
    isChecked: true
  },
  {
    name: 'Computer',
    isChecked: false
  },
  {
    name: 'Bed sheets',
    isChecked: false
  }
];

const segmentStyle = {
  background: '#008080',
  boxShadow: '2px 2px 8px 0px rgba(0, 0, 0, 0.2)',
  width: '100%'
};

export default class PackingListPage extends Component {
  state = {
    items: initialList
  };

  render(): JSX.Element {
    const { state: { items } } = this;

    return (
      <div style={{ margin: '50px 0 0px' }}>
        {/* Unchecked */}
        <Container>
          <ItemList
            listName="Items to Pack"
            segmentStyle={segmentStyle}
            items={items.filter((item: {}): boolean => !item.isChecked)}
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
            items={items.filter((item: {}): boolean => item.isChecked)}
          />
        </Container>
        <Footer />
      </div>
    );
  }
}
