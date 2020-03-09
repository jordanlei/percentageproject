import React, { Component } from 'react';
import AnimatedBar from './animated-bar';


class BarComponent extends Component {
  
  render() {
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var data = require('./data.json')
    var barplots = []

    for (var i= 0; i< data.length; i++)
    {
        var item = data[i]
        barplots.push(<AnimatedBar 
                        name={"animatedbar" + i} 
                        text = {item.text} 
                        dataset = {item.data} 
                        colors = {item.colors}/>)
    }

    return (      
      <section id = "barcharts">    
        <div className="dark-container" style={{minHeight: "200", paddingLeft: "20%", paddingRight: "18%", 
        zIndex: 1,
        color: "rgba(255, 255, 255, 0.7)"}}>
            {barplots}
        </div>
      </section>
    );
  }
}

export default BarComponent;
