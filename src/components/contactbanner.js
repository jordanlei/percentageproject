import React, { Component } from 'react';
import { Row, Col, NavLink} from 'reactstrap';
import Fade from 'react-reveal';

class ContactBanner extends Component {
  
  render() {
    return (      
      <section id = "contact">    
        <div className="dark-container" style={{height: "40vh", paddingLeft: "20%", paddingRight: "18%", color: "rgba(255, 255, 255, 0.7)"}}>
        <Row>
          <Col md={4}>
          <Fade bottom duration={5000}>
            <h3>
              Contact Us
            </h3>
            <Row style={{height: "150px"}}>
            <NavLink href="/" target="_blank">
            <img src={require('../public/static/logo-linkedin.png')} style={{display: "block", padding: "5%", height: "60px", width: "60px"}}alt="Logo WV"/>
            </NavLink>
            <NavLink href="/" target="_blank">
              <img src={require('../public/static/logo-fb.png')} style={{display: "block", padding: "5%", height: "60px"}}alt="Logo WV"/>
            </NavLink>
            <NavLink href="/" target="_blank">
            <img src={require('../public/static/logo-insta.png')} style={{display: "block", padding: "5%", height: "60px", width: "60px"}}alt="Logo WV"/>
            </NavLink>
            </Row>
            
          </Fade>
          </Col>
          <Col md={1}>
          </Col>
          <Col md={7}>
            <p>
            Feel free to get in touch with us at any of the social links listed here, or at email@email.com 
            </p>
          </Col>
        </Row>
        </div>
      </section>
    );
  }
}

export default ContactBanner;
