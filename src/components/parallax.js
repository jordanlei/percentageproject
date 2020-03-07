import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import '../css/standard.css';
import '../css/welcome_parallax.css'
import simpleParallax from 'simple-parallax-js';
import Fade from 'react-reveal';

class Parallax extends Component {
  componentDidMount(){
        window.addEventListener('scroll', function(event) {
            var depth, i, layer, layers, len, movement, topDistance, translate3d;
            topDistance = this.pageYOffset;
            var elementDistance = topDistance - document.getElementById("hero").offsetTop
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
        <div id='hero'>
        <div class='layer-bg layer' data-depth='-0.50' data-type='parallax'></div>
        <div class='layer-1 layer' data-depth='-0.50' data-type='parallax'></div>
        <div class='layer-2 layer' data-depth='-0.30' data-type='parallax'></div>
        <div class='layer-3 layer' data-depth='-0.20' data-type='parallax'></div>
        <div class='layer-4 layer' data-depth='0.0' data-type='parallax'></div>   
          <div className= "namecard">
          <Row>
            <Col md={8} className= "welcome-title">
              <Fade bottom duration={5000}>
              <h1>JORDAN LEI</h1>
              </Fade>
            </Col>
          </Row>
          </div>

        </div>
        <div id='hero-mobile'></div>
        <div id='content'>
        </div>
    </div>
    );
  }
}

export default Parallax;
