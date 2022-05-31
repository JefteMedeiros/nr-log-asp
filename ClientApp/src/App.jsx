import React, { Component } from 'react';
import Header from './components/organisms/Header';
import SubHeader from './components/organisms/SubHeader';
import About from './components/organisms/About';
import Fleet from './components/organisms/Fleet';
import Map from './components/organisms/Map';

import './custom.css'
import Reviews from './components/organisms/Reviews';
import FooterBottom from './components/organisms/FooterBottom';
import Footer from './components/organisms/Footer';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <>
        <Header />
        <SubHeader />
        <About />
        <Fleet />
        <Map />
        <Reviews />
        <Footer />
        <FooterBottom />
      </>
    );
  }
}
