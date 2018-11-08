import React from "react"
import { Component } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import MyMap from './MyMap.js'
import locations from "../data/locations.json"
import * as LocationsAPI from '../api/LocationsAPI'


class MapDisplay extends React.Component{
    state={
        
        images:[]
        
    }
render(){
    
    return (
       
           <MyMap />
    
    )
    
    }
}
export default MapDisplay