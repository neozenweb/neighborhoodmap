import React from "react"
import { Component } from "react"
import { compose, withProps } from "recompose"
import locations from "../data/locations.json"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow, Map} from "react-google-maps"
import '../App.css'


        


class MyMap extends React.Component{
    
    onInfoWindowClose= (marker) => {
  marker.isOpen=false;
    
    }


    
    
    
    onMarkerClick= (marker) => {
         
       
        marker.isOpen=true;
        this.state.markerpos.filter(mp=>mp===marker).map(mp=>mp.isOpen=true);
          this.setState({});     
    }
     
    
    filterResults=(evt)=>{
        var temp;
        var perm;
        var ind = document.getElementsByTagName("select")[0].selectedIndex;
        alert(ind);
       if(ind === 0)
           {
               
               this.setState({markerpos:locations.map(loc=>Object.assign({},loc,{"isOpen":""}))});
               
           }
        else
            {
             perm = this.state.markerpos;
           temp = this.state.markerpos.splice([ind-1],1);
           this.setState({markerpos:temp});
            }
            
    }
   
  state={
      
         
          markerpos: locations.map(loc=>Object.assign({},loc,{"isOpen":""}))
          
              
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
        <select onChange={evt=>this.filterResults(evt)}> 
                   
                    <option>All </option>
              {this.state.markerpos.map((mk)=>
    
                <option>{mk.city +  " " +mk.state} </option>
    
    
                    )}
        
                 
                 </select>
            
              
              {this.state.markerpos.map((mk)=>
    
                <li>{mk.city +  " " +mk.state} </li>
    
    
                    )}
        
              </ul>
                 
                  
        
          </div>
   
    <div className="rightpane">
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