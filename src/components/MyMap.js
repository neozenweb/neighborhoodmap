import React from "react"
import { Component } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow, Map} from "react-google-maps"

const markerpos=[
    {"lat":34.063110,"lng":-84.209620},
    {"lat":34.118760,"lng":-84.156560},
    {"lat":34.014160,"lng":-84.224830},
    {"lat":34.000670,"lng":-84.158700},
    {"lat":34.057950,"lng":-84.068230}
];


var MyMapComponent  =      
      
      withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat:34.078160,
         lng:-84.182760,
         }}
  >
    
    {props.isMarkerShown && <Marker position={{ lat: markerpos[0].lat, lng: markerpos[0].lng }} />}
    {props.isMarkerShown && <Marker position={{ lat: markerpos[1].lat, lng: markerpos[1].lng }} />}
     {props.isMarkerShown && <Marker position={{ lat: markerpos[2].lat, lng: markerpos[2].lng }} />}
    {props.isMarkerShown && <Marker position={{ lat: markerpos[3].lat, lng: markerpos[0].lng }} />}
    {props.isMarkerShown && <Marker position={{ lat: markerpos[4].lat, lng: markerpos[0].lng }} />}
  </GoogleMap>
));
        


class MyMap extends React.Component{

    onInfoWindowClose()
    {
    
    this.close();
    }
    onMarkerClick()
    {
    
     
    }
    
    
    render(){
        
       
            
        
        
    return (
        
      <MyMapComponent
              isMarkerShown="true"
                 googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyA5mPZJgHzfdneW1DELGFyM7tB2Ofxzqdc"
            loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
                          
      />
        )

  
    
  /* return (
  
  <MyMapComponent
    isMarkerShown={this.state.isMarkerShown}
    googleMapURL="https://maps.googleapis.com/maps/api/js?
    key=myKey.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
    lat={lat}
    long={long}
/>
       
          /*    withScriptjs(withGoogleMap((props) =>
          <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat:34.078160,
                 lng:-84.182760,
                 }}
          >
            {props.isMarkerShown && <Marker position={{ lat:34.118760,lng:-84.156560 }} />}
          </GoogleMap>
        ))*/
    
   
 
    
    }
}
export default MyMap