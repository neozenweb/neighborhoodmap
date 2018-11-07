import React from "react"
import { Component } from "react"
import { compose, withProps } from "recompose"
import locations from "../data/locations.json"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow, Map} from "react-google-maps"



        


class MyMap extends React.Component{
    
onInfoWindowClose= (marker) => {
  marker.isOpen=false;
    
    }
    
    
    onMarkerClick= (ind) => {
        
    document.getElementsByTagName('Marker')[ind].isOpen=true;
    }
   
  state={
      
         
          markerpos: locations.map(loc=>Object.assign({},loc,{"isOpen":"false"}))
          
              
    }
    
            
        
    render(){
        
      
       var MyMapComponent  =  compose(    
      withProps({}),
      withScriptjs,withGoogleMap)(props =>
                                 <GoogleMap
                                    defaultZoom={10}
                                    defaultCenter={{ lat:34.078160,lng:-84.182760,}}
                                 >
        {this.state.markerpos.map((marker,ind)=>
           
            <Marker
              key={ind}
              position={marker.pos}
            onClick={this.isOpen=true}          
            >
              {<InfoWindow  onCloseClick={evt=>this.onInfoWindowClose(marker)}><h4>{marker.street+marker.city+marker.state+marker.zip}</h4></InfoWindow>}
            </Marker>
          )}

  
  </GoogleMap>
);
            
       
        
    return (
      
         
      <MyMapComponent
              isMarkerShown="true"
                 googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyA5mPZJgHzfdneW1DELGFyM7tB2Ofxzqdc"
            loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
                          
      />
        
        )

        
    
 
 
    
    }
}
export default MyMap