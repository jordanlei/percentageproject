import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal';
import Parallax from '../parallax';

class DataWelcome extends Component {
  render() {
    const items = {
      name : "datawelcome",
      background: "black",
      backgrounddepth: "0",
      layers: [ 
      {image: require("../../public/static/datawelcome.svg"), depth: "0.2", name: "layer1"},
      {image: require("../../public/static/datawelcome1.svg"), depth: "0.2", name: "layer1"},
      ]
    }

    return (
    <div style={{minHeight: "100vh", backgroundColor: "black"}}>
        <section id = "datawelcome">
        <Parallax items = {items}>
        <div className= "namecard">
        <Row>
          <Col md={6} className= "welcome-title">
          <Fade bottom duration= {5000}>
            <h1>DATA <br/> AND RESEARCH</h1>
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

export default DataWelcome;
