import React from "react"
import { Component } from "react"
import { compose, withProps } from "recompose"
import locations from "../data/locations.json"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow, Map} from "react-google-maps"
import '../App.css'
import * as constants from './ConstFile.js'
import * as LocationsAPI from '../api/LocationsAPI'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    alert (error, info);
  }

  render() {
     
    if (this.state.hasError) {
      return <h1>Google Map Error !!</h1>;
    }

    return this.props.children; 
  }
}
export default ErrorBoundary