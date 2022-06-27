import React, { Component } from 'react';
import Header from './components/header';
import About from './components/about';
import Resume from './components/resume';
import Contact from './components/contact';
import Footer from './components/footer';
import Portfolio from './components/portfolio';
import res from './resumeData/resumeData.json';
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      
      resumeData:{
        main: res.main,
        resume: res.resume,
        portfolio: res.portfolio
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} title={this.state.resumeData.main.occupation} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Contact data={this.state.resumeData.main} />
        <Footer />
      </div>
    );
  }
}

export default App;
