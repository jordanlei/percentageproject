import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import "../css/welcome.css"
import Fade from 'react-reveal';

class About extends Component {
  
  render() {

    var innerContent=[
        <Col md={3}>
        <Fade bottom duration={5000}>
          <h2>
            Our Story
          </h2>
        </Fade>
        </Col>,
        <Col md={2}></Col>,
        <Col md={7}>
          <p style= {{color: "black"}}>
          [Text subject to change] The Percentage Project is an artistic, visual outlet 
          for data collected from an anonymous survey of Computer Science 
          students each year. We want to show that the challenges that 
          minorities and underrepresented groups face are not just numbers 
          on a page - these are real people with stories to tell. 
          The goal of the Percentage Project is to showcase data along with advocates 
          to put a face to a number; we aim to encourage reflection upon the 
          situations of minorities affected by microaggression, discrimination, 
          and for what could be done to alleviate these instances.
          </p>
        </Col>]
    
      
    return (
      <div className="dark-container" style={{height: "100vh", paddingTop: "20vh", paddingBottom: "10%"}}>            
        <div className= "mobile-only">
        <Row>
          <div className= "banner">
            {innerContent}
          </div>
        </Row>
        </div>

        <div className= "web-only">
        <Row>
            {innerContent}
        </Row>
        </div>
      </div>
    );
  }
}

export default About;
