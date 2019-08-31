import React, { Component } from 'react';
import Navigation from './components/Navigation'
import Page from './components/Page'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      page: "events"
    }
    this.changePage = this.changePage.bind(this)
  }

  changePage(pageName){
    this.setState({
      page: pageName
    })
  }

  render(){
    return (
      <div className="App">
        <Navigation changePage={this.changePage} />
        <Page page={this.state.page}/>
      </div>
    );  
  }
}

export default App;
