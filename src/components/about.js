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
          [Filler text] The term art has come to encompass so many diverse and exciting 
          fields that it would be impossible to cover it all in an article, 
          so for now let’s focus our attention primarily on visual art, although 
          the concepts we explore here will extend to other forms of art as well. 
          Too often, we narrow our scope of art to be something that depicts 
          reality as is. It’s easy to go to a museum and pick the pieces that 
          are most life-like, and marvel at the ability of artists to capture 
          realistic scenes in the absence of photography. But art has changed so 
          much since the invention of the photograph, and so too has the purpose and 
          meaning of art itself. Just as it would be unfair to judge the quality of a 
          sword by its ability to hammer a nail, so too is it unfair to judge art 
          solely by its resemblance to human vision. 
       
          </p>
        </Col>]
    
      
    return (
      <div className="dark-container" style={{paddingBottom: "10%"}}>            
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
