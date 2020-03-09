import React, { Component } from 'react';
import DataWelcome from './datawelcome';
import ContactBanner from '../contactbanner';
import TestData from './testdata';
import DataMenu from './datamenu';
import BarComponent from './barcomponent';

class DataHome extends Component {
  /*
  Dev is the main landing component, i.e. the homepage.
  The subcomponents are 
  */
  render() {
    return (
      <div className="landing-container">
        <DataMenu/>
        <section id = "datawelcome">
          <DataWelcome/>
        </section>
        <section id = "data">
          <TestData/>
        </section>
        <section id = "stats">
          <BarComponent/>
        </section>
        <section id = "trends">
        
        </section>
        <section id = "methods">
        
        </section>
        
        <ContactBanner/>
      </div>
    );
  }
}

export default DataHome;
