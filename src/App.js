import React from 'react'
import ReactDOM from 'react-dom'
import { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import * as constants from './components/ConstFile.js'
import locations from './data/locations.json'
import MyMap from './components/MyMap.js'

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component {
    
  render() {
    return (
        
        <div className="app">
            <div className="title"> Libraries Near Me </div>
                   
            <MyMap />
    
        </div>
        
             
    )
  }
}

export default App;
