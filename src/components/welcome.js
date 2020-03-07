import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import '../css/standard.css';
import '../css/parallax.css';
import '../css/welcome.css';
import Fade from 'react-reveal';

class Welcome extends Component {
  componentDidMount(){
        window.addEventListener('scroll', function(event) {
            var depth, i, layer, layers, len, movement, topDistance, translate3d;
            topDistance = this.pageYOffset;
            var elementDistance = topDistance - document.getElementById("welcome-component").offsetTop
            layers = document.querySelectorAll("[data-type='parallax']");
            for (i = 0, len = layers.length; i < len; i++) {
              layer = layers[i];
              depth = layer.getAttribute('data-depth');
              movement = -1 * (topDistance + elementDistance * depth) 
              translate3d = 'translate3d(' + 0 + ',' + movement + 'px, 0)';
              layer.style['-webkit-transform'] = translate3d;
              layer.style['-moz-transform'] = translate3d;
              layer.style['-ms-transform'] = translate3d;
              layer.style['-o-transform'] = translate3d;
              layer.style.transform = translate3d;
            }
        });   
  }
  render() {
    return (
    <div>
        <section id = "welcome">
        <div id='welcome-component' style= {{minHeight: "110vh"}}>
        <div class='layer-bg layer' data-depth='0' data-type='parallax'></div>
        <div class='layer-1 layer' data-depth='0.2' data-type='parallax'></div>
        <div class='layer-2 layer' data-depth='-0.3' data-type='parallax'></div>
        <div class='layer-3 layer' data-depth='0.3' data-type='parallax'></div>
          
        
          <div className= "namecard">
          <Row>
            <Col md={5} className= "welcome-title">
            <Fade bottom duration= {5000}>
              <h1>THE PERCENTAGE PROJECT</h1>
            </Fade>
            </Col>
          </Row>
          </div>
        </div>
        <div id='welcome-mobile'></div>
        </section>
    </div>
    );
  }
}

export default Welcome;
