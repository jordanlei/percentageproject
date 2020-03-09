import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import '../css/standard.css';
import '../css/parallax.css';
import '../css/welcome.css';
import Fade from 'react-reveal';
import Parallax from './parallax';

class Welcome extends Component {
  render() {
    const items = {
      name : "welcome",
      background: "black",
      backgrounddepth: "0",
      layers: [ 
      {image: require("../public/static/welcome.svg"), depth: "0.2", name: "layer1"},
      {image: require("../public/static/welcome1.svg"), depth: "0.5",  name: "layer2"},
      {image: require("../public/static/welcome2.svg"), depth: "-0.3",  name: "layer3"},
      ]
    }

    return (
    <div style={{minHeight: "110vh"}}>
        <section id = "welcome">
        <Parallax items = {items}>
        <div className= "namecard">
        <Row>
          <Col md={6} className= "welcome-title">
          <Fade bottom duration= {5000}>
            <h1>THE PERCENTAGE PROJECT (v2)</h1>
          </Fade>
          </Col>
        </Row>
        </div>
        </Parallax>
        </section>
    </div>
    );
    }
  }

export default Welcome;
