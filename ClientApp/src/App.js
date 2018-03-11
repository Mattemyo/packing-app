import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TopNav from './components/navigation/TopNav';
import PackingListPage from './components/pages/PackingListPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import BounceSwitch from './components/transitions/BounceSwitch';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <TopNav>
          <BounceSwitch>
            <Route exact path="/" component={PackingListPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
          </BounceSwitch>
        </TopNav>
        <Footer />
      </div>
    );
  }
}
