import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Footer from '../Footer';
import ItemList from '../ItemList';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid';

const segmentStyle = {
  background: '#008080',
  boxShadow: '2px 2px 8px 0px rgba(0, 0, 0, 0.2)',
  width: '100%'
};

class PackingListPage extends Component {
  state = {};

  render() {
    const { props: { items } } = this;
    const tablet = window.innerWidth < 1200;

    return (
      <Container style={{ margin: '50px 0 0px' }}>
        {/* Unchecked */}

        <Grid>
          <Grid.Row>
            <Grid.Column width={tablet ? 16 : 8}>
              <ItemList listName="Items to Pack" segmentStyle={segmentStyle} />
            </Grid.Column>
            {/* Only display hr if tablet */}
            {tablet && (
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
            )}
            {/* Checked */}
            <Grid.Column width={tablet ? 16 : 8}>
              <ItemList listName="Items Packed" segmentStyle={segmentStyle} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Footer />
      </Container>
    );
  }
}

export default PackingListPage;
