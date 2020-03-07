import React, { Component } from 'react';
import Fade from 'react-reveal';
import Gallery from './gallery';

class HomeGallery extends Component {
  render() {
    const imageItems = [
        {
            src: require("../public/static/abstract1.svg"),
            caption: <div><h4>Abstract 1</h4><br/><p>Filler Image</p></div>,
            width: 4
        },
        {
            src: require("../public/static/abstract2.svg"),
            caption: <div><h4>Abstract 2</h4><br/><p>Filler Image</p></div>,
            width: 4
        },
        {
            src: require("../public/static/abstract3.svg"),
            caption: <div><h4>Abstract 3</h4><br/><p>Filler Image</p></div>,
            width: 4
        },
        {
            src: require("../public/static/abstract4.svg"),
            caption: <div><h4>Abstract 4</h4><br/><p>Filler Image</p></div>,
            width: 4
        },
        {
            src: require("../public/static/abstract5.svg"),
            caption: <div><h4>Abstract 5</h4><br/><p>Filler Image</p></div>,
            width: 4
        },
        {
            src: require("../public/static/abstract6.svg"),
            caption: <div><h4>Abstract 6</h4><br/><p>Filler Image</p></div>,
            width: 4
        },

       
    ]

    return (
    <div>
    <section id = "art-traditional">
    <div className = "dark-container" style={{minHeight:"100vh"}}>            
        <div className="center-row" style={{paddingBottom:"3%"}}>
            <div className= "art-header">
                <Fade bottom duration={5000}>
                    <div style= {{paddingBottom:"5vh"}}>
                    <h2>
                    Our Gallery
                    </h2>
                    </div>
                </Fade>
            </div>
        </div>
    <Gallery images={imageItems}/>

    </div>
    </section>
    </div>
    );
  }
}

export default HomeGallery;
