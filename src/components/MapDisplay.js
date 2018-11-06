import React from "react"
import { Component } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import MyMap from './MyMap.js'



class MapDisplay extends React.Component{
    state={
        map:null,
        markers:[],
        markersprops:[],
        markersnow:[],
        markerpropsnow:[],
        showinfowindow:false

    };
render(){
    return (
        
        <div> <MyMap /></div>
    )
    
    }
}
export default MapDisplay