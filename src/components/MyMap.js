import React from "react"
import { Component } from "react"
import { compose, withProps } from "recompose"
import locations from "../data/locations.json"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow, Map} from "react-google-maps"
import '../App.css'
import * as constants from './ConstFile.js'
import * as LocationsAPI from '../api/LocationsAPI'

 

class MyMap extends React.Component{
    
    

    
    onInfoWindowClose= (marker) => {
  marker.isOpen=false;
    
    }


       
    
    onMarkerClick= (marker) => {
        
     LocationsAPI.getLoc(marker.pos)
        .then(res=>alert(marker.name +" is "+res.response.venues[0].location.distance+" miles from your location."))
             .catch(function(err){
         
         
            var msg=document.createTextNode("Foursquare API Fetch error \n"+ err);
            var e= document.createElement("p");
            e.append(msg);
            e.className="errMessage";
            document.getElementsByTagName("ul")[0].append(e);
            
        
            })  
         
        marker.isOpen=true;
        
         this.state.markerpos.map(mp=>mp.isOpen=false);
          this.state.markerpos.map(mp=>mp.icon=constants.imgRed);
        this.state.markerpos.filter(mp=>mp===marker).map(mp=>mp.isOpen=true);
          this.state.markerpos.filter(mp=>mp===marker).map(mp=>mp.icon=constants.imgGreen);
         this.setState({markerpos:this.state.markerpos});     
    }
     
    
    filterResults=(evt)=>{
        var temp;
        var ind = document.getElementsByTagName("select")[0].selectedIndex;
        if(ind === 0)
           {
               
               this.setState({markerpos:locations.map(loc=>Object.assign({},loc,{"isOpen":""},{"icon":constants.imgRed}))});
               
           }
        else
            {
             
           temp = this.state.markerpos.splice([ind-1],1);
           this.setState({markerpos:temp});
            }
            
    }
   
  state={
      
         
          markerpos: locations.map(loc=>Object.assign({},loc,{"isOpen":""},{"icon":constants.imgRed}))
         
        }
    
    
        
    render(){
        
     
       var MyMapComponent  =  compose(    
      withProps({}),
      withScriptjs,withGoogleMap)(props =>
                                 <GoogleMap
                                    defaultZoom={constants.zoom}
                                    defaultCenter={{ lat:constants.latitude,lng:constants.longitude}}
                                  
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

   )
   
   
   
      
        return (
        
                <div className="pageContainer">
             
                <div className='leftpane'> 
                
                <ul className="listLocations">
                <select className="selclass"  tabindex='2' onChange={evt=>this.filterResults(evt)}> 

                    <option>All </option>
              {this.state.markerpos.map((mk)=>
    
                <option>{mk.city +  " " +mk.state} </option>
    
    
                    )}
        
                 
                 </select>
            
              
              {this.state.markerpos.map((mk)=>
    
                <li  tabindex='3' onClick={evt=>this.onMarkerClick(mk)}>{mk.city +  " " +mk.state} </li>
    
    
                    )}
        
              </ul>
                 
                  
        
          </div>
   
    <div className="rightpane" aria-label="map" role="application" tabindex='3'>
       
      <MyMapComponent
              isMarkerShown="true"
                 googleMapURL={constants.googleURL}
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