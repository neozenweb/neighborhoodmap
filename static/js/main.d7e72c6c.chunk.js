(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,t,n){e.exports=n(351)},150:function(e,t,n){},152:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},351:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(34),i=n.n(o),l=(n(150),"http://maps.google.com/mapfiles/ms/icons/green-dot.png"),s="http://maps.google.com/mapfiles/ms/icons/red-dot.png",c=n(56),u=n(57),p=n(60),m=n(58),h=n(61),f=(n(152),n(88),n(59)),d=n(35),g=n(29),b=localStorage.token;b||(b=localStorage.token=Math.random().toString(36).substr(-8));var w="4G34CKFITGK1WSHHMQ52VHR3BQ2M4NCAS4AIHPIAO32DCXUU",k="5AHREEYCO2KAFXFFW0FR5GSA3X0LOEC3E1CPGEGOZAJ2NA0T",y="20181105",E=function(e){return fetch("https://api.foursquare.com/v2/venues/search?ll=".concat(e.lat,",").concat(e.lng,"&client_id=").concat(w,"&client_secret=").concat(k,"&v=").concat(y),{method:"GET"}).then(function(e){return e.json()}).catch(function(e){return e})},v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onInfoWindowClose=function(e){e.isOpen=!1},n.onMarkerClick=function(e){E(e.pos).then(function(t){return alert(e.name+" is "+t.response.venues[0].location.distance+" miles from your location.")}).catch(function(e){var t=document.createTextNode("Foursquare API Fetch error \n"+e),n=document.createElement("p");n.append(t),n.className="errMessage",document.getElementsByTagName("ul")[0].append(n)}),e.isOpen=!0,n.state.markerpos.map(function(e){return e.isOpen=!1}),n.state.markerpos.map(function(e){return e.icon=s}),n.state.markerpos.filter(function(t){return t===e}).map(function(e){return e.isOpen=!0}),n.state.markerpos.filter(function(t){return t===e}).map(function(e){return e.icon=l}),n.setState({markerpos:n.state.markerpos})},n.filterResults=function(e){var t,a=document.getElementsByTagName("select")[0].selectedIndex;0===a?n.setState({markerpos:f.map(function(e){return Object.assign({},e,{isOpen:""},{icon:s})})}):(t=n.state.markerpos.splice([a-1],1),n.setState({markerpos:t}))},n.state={markerpos:f.map(function(e){return Object.assign({},e,{isOpen:""},{icon:s})})},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=Object(d.compose)(Object(d.withProps)({}),g.withScriptjs,g.withGoogleMap)(function(t){return r.a.createElement(g.GoogleMap,{defaultZoom:10,defaultCenter:{lat:34.07816,lng:-84.18276}},e.state.markerpos.map(function(t,n){return r.a.createElement(g.Marker,{key:n,position:t.pos,icon:t.icon,onClick:function(n){return e.onMarkerClick(t)}},t.isOpen&&r.a.createElement(g.InfoWindow,{onCloseClick:function(n){return e.onInfoWindowClose(t)}},r.a.createElement("h4",null,t.street+t.city+t.state+t.zip)))}))});return r.a.createElement("div",{className:"pageContainer"},r.a.createElement("div",{className:"leftpane",role:"navigation","aria-label":"menu"},r.a.createElement("ul",{className:"listLocations",role:"listbox","aria-label":"listlocations"},r.a.createElement("select",{className:"selclass",role:"listbox","aria-label":"selectCity",tabindex:"2",onChange:function(t){return e.filterResults(t)}},r.a.createElement("option",null,"All "),this.state.markerpos.map(function(e){return r.a.createElement("option",null,e.city+" "+e.state," ")})),this.state.markerpos.map(function(t,n){return r.a.createElement("li",{tabindex:2+n,onClick:function(n){return e.onMarkerClick(t)}},t.city+" "+t.state," ")}))),r.a.createElement("div",{className:"rightpane","aria-label":"map",role:"application",tabindex:"3"},r.a.createElement(t,{isMarkerShown:"true",googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyA5mPZJgHzfdneW1DELGFyM7tB2Ofxzqdc",loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"400px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})})))}}]),t}(r.a.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"title",role:"banner","aria-label":"header",tabindex:"1"}," Libraries Near Me "),r.a.createElement(v,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},59:function(e){e.exports=[{name:"Dr Robert E Fulton Regional Library",street:"5090 Abbotts Bridge Rd",city:"Johns Creek",state:"GA",zip:"30005",url:"http://www.afpls.org/ocee-branch6",pos:{lat:34.06311,lng:-84.20962}},{name:"Forsyth County Public Library Sharon Branch",street:"2820 Old Atlanta Rd",city:"Cumming",state:"GA",zip:"30041",url:"http://www.forsythpl.org/",pos:{lat:34.11876,lng:-84.15656}},{name:"Northeast Spruill Oaks Library",street:"9560 Spruill Rd",city:"Johns Creek",state:"GA",zip:"30022",url:"http://www.afpls.org/northeast-spruill-oaks-branch",pos:{lat:34.01416,lng:-84.22483}},{name:"Gwinnett County Public Library-Duluth",street:"3480 Duluth Park Ln NW",city:"Duluth",state:"GA",zip:"30096",url:"http://www.gwinnettpl.org/",pos:{lat:34.00067,lng:-84.1587}},{name:"Gwinnett County Public Library-Suwanee",street:"361 Main St",city:"Suwanee",state:"GA",zip:"30024",url:"http://www.gwinnettpl.org/",pos:{lat:34.05795,lng:-84.06823}}]},88:function(e,t,n){}},[[145,2,1]]]);
//# sourceMappingURL=main.d7e72c6c.chunk.js.map