import React, { Component } from 'react';
import '../css/standard.css';
import Welcome from './welcome';
import About from './about';
import GalleryBanner from './gallerybanner';
import HomeGallery from './home-gallery';
import ContactBanner from './contactbanner'
import Menu from './menu';


class Dev extends Component {
  /*
  Dev is the main landing component, i.e. the homepage.
  The subcomponents are 
  */
  render() {
    return (
      <div className="landing-container">
        <Menu/>
        <section id = "welcome">
          <Welcome/>
        </section>
        <section id = "about">
          <About/>
        </section>
        <section id = "to-gallery">
          <HomeGallery/>
        </section>
        <ContactBanner/>
      </div>
      /* 
      <div className="landing-container">
        
        
        <section id = "about">
          <About/>
        </section>
        <section id = "education">
          <Education/>
        </section>
        <section id = "experience">
          <Experience/>
        </section>
        <ArtComponent/>
        <ContactBanner/>
      </div>
      */
    );
  }
}

export default Dev;
