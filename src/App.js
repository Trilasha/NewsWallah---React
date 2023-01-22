
import './App.css';

//rcc then press Enter 
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  pageSize=9;
  // apiKey="9aa5a08ec20e443399559114f4881a62" --> working 
  apiKey = process.env.REACT_APP_NEWS_API

  //state is an object 
  state = {
    progress: 0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }


  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        {/* <News setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="technology"/> */}
        {/* path="/" means to go to the home page */}


        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
        />


        <Routes>
        <Route exact path="/"   element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/>}></Route>
        <Route exact path="/business"   element={ <News setProgress={this.setProgress}  apiKey={this.apiKey}key="business" pageSize={this.pageSize} country="in" category="business"/>}></Route>
        <Route exact path="/entertainment"   element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}></Route>
        <Route exact path="/health"   element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health"/>}></Route>
        <Route exact path="/science" element={ <News setProgress={this.setProgress} apiKey={this.apiKey}  key="science"  pageSize={this.pageSize} country="in" category="science"/>}></Route>
        <Route exact path="/sports"  element={ <News setProgress={this.setProgress}  apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports"/>}></Route>
        <Route exact path="/technology"   element={ <News setProgress={this.setProgress}  apiKey={this.apiKey}key="technology" pageSize={this.pageSize} country="in" category="technology"/>}></Route>

        </Routes>

        </Router>
      </div>
    )
  }
}
