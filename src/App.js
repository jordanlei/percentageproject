import React, { Component } from 'react';
import logo from './logo.svg';
import Dev from './components/dev.js';
import DataHome from './components/data-components/datahome';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import './css/mobile.css';


class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}  onUpdate={() => window.scrollTo(0, 0)}>
      <ScrollToTop>
      <div>
        <Route path="/" exact component={Dev} />
        <Route path="/data" component={DataHome} />
      </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
