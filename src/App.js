import React from 'react'
import ReactDOM from 'react-dom'
import { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import locations from './data/locations.json'
import MyMap from './components/MyMap.js'
import MapDisplay from './components/MapDisplay.js'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component {
     state={
         
         lat:34.078160,
         lng:-84.182760,
         zoom:13,
         all:locations,
         filtered:null,
         open:false
     }
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
