import React from 'react';
import { Route } from 'react-router-dom';
import TopNav from './components/navigation/TopNav';
import PackingListPage from './components/pages/PackingListPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import SlideSwitch from './components/transitions/SlideSwitch';
import TopHeader from './components/headers/TopHeader';

export default () => (
  <div>
    <TopHeader />
    <TopNav />
    <SlideSwitch>
      <Route exact path="/" component={PackingListPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
    </SlideSwitch>
  </div>
);
