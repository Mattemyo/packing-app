import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Footer from '../Footer';
import ItemList from '../ItemList';
import { localStorageListRetrieved } from '../../actions/items';
import SaveListCtA from '../ctas/SaveListCtA';

const segmentStyle = {
  background: '#008080',
  boxShadow: '2px 2px 8px 0px rgba(0, 0, 0, 0.2)',
  width: '100%'
};

class PackingListPage extends Component {
  state = {};

  componentWillReceiveProps = () => {
    //  get info from localstorage when mounting
    const savedList = JSON.parse(localStorage.getItem('list'));

    console.log(savedList);
    if (savedList) localStorageListRetrieved(savedList);
  };

  handleListSave = () => {
    // dispatch action
    // for now: cheat and just save to localStorage
    localStorage.setItem('list', JSON.stringify(this.props.items));
    console.log(localStorage.getItem('list'));

    // code below for talking to api, postpone that
    // this.props.listSaved();
  };

  render() {
    const { props: { items }, handleListSave } = this;
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
          <Grid.Row>
            <SaveListCtA handleListSave={handleListSave} />
          </Grid.Row>
        </Grid>
        <Footer />
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { localStorageListRetrieved })(PackingListPage);
