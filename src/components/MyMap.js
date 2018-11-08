import React from "react"
import { Component } from "react"
import { compose, withProps } from "recompose"
import locations from "../data/locations.json"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow, Map} from "react-google-maps"
import '../App.css'
import * as LocationsAPI from '../api/LocationsAPI'



        


class MyMap extends React.Component{
    
    onInfoWindowClose= (marker) => {
  marker.isOpen=false;
    
    }


    
    
    
    onMarkerClick= (marker) => {
        
     
    LocationsAPI.getLoc(marker.pos)
        .then(res=>alert(marker.name +" is "+res.response.venues[0].location.distance+" miles from your location."))
             .catch(err=>err)  
         
        marker.isOpen=true;
        
        
        this.state.markerpos.filter(mp=>mp===marker).map(mp=>mp.isOpen=true);
          this.state.markerpos.filter(mp=>mp===marker).map(mp=>mp.icon="http://maps.google.com/mapfiles/ms/icons/green-dot.png");
         this.setState({markerpos:this.state.markerpos});     
    }
     
    
    filterResults=(evt)=>{
        var temp;
        var ind = document.getElementsByTagName("select")[0].selectedIndex;
        if(ind === 0)
           {
               
               this.setState({markerpos:locations.map(loc=>Object.assign({},loc,{"isOpen":""},{"icon":"http://maps.google.com/mapfiles/ms/icons/red-dot.png"}))});
               
           }
        else
            {
             
           temp = this.state.markerpos.splice([ind-1],1);
           this.setState({markerpos:temp});
            }
            
    }
   
  state={
      
         
          markerpos: locations.map(loc=>Object.assign({},loc,{"isOpen":""},{"icon":"http://maps.google.com/mapfiles/ms/icons/red-dot.png"}))
          
              
    }
    
            
        
    render(){
        
      
       var MyMapComponent  =  compose(    
      withProps({}),
      withScriptjs,withGoogleMap)(props =>
                                 <GoogleMap
                                    defaultZoom={10}
                                    defaultCenter={{ lat:34.20,lng:-84.14,}}
                                    
                                 >
        {this.state.markerpos.map((marker,ind)=>
           
            <Marker
              key={ind}
              position={marker.pos}
              icon={marker.icon}
               onClick={evt=>this.onMarkerClick(marker)}  
               
            >
            {marker.isOpen&&<InfoWindow onCloseClick={evt=>this.onInfoWindowClose(marker)}><h4>{marker.street+marker.city+marker.state+marker.zip}</h4></InfoWindow>}
            </Marker>
          )}

  
  </GoogleMap>
);
            
       
        
    return (
        
        <div className="pageContainer">
             
              <div className='leftpane'> 
                
                <ul className="listLocations">
                <select className="selclass" onChange={evt=>this.filterResults(evt)}> 

                    <option>All </option>
              {this.state.markerpos.map((mk)=>
    
                <option>{mk.city +  " " +mk.state} </option>
    
    
                    )}
        
                 
                 </select>
            
              
              {this.state.markerpos.map((mk)=>
    
                <li onClick={evt=>this.onMarkerClick(mk)}>{mk.city +  " " +mk.state} </li>
    
    
                    )}
        
              </ul>
                 
                  
        
          </div>
   
    <div className="rightpane" aria-label="map" role="application">
      <MyMapComponent
              isMarkerShown="true"
                 googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyA5mPZJgHzfdneW1DELGFyM7tB2Ofxzqdc"
            loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
                          
      />
                  
       </div>
        
        </div>
        
        )

        
    
 
 
    
    }
}
export default MyMap