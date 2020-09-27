import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer, Icon } from 'react-leaflet'
import iconCone from './mapIcon.js';

const State = {
    lat: 44.119362,
    lng: -69.735420,
    zoom: 17,
  }

const MAP_STYLE_ADDON = {
    marginTop: '128px',
    height: '400px',
    top: '-96px',
    width: '80%',
    left: '10%',
};

export default class MyMap extends Component{

    render(){
        const position = [State.lat, State.lng]
        const { options } = this.props

        if (typeof window !== 'undefined') {
          return (
            <Map center={position} zoom={State.zoom} style={MAP_STYLE_ADDON} icon={ iconCone }>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  Here The Scoop <br /> 755 Gardiner Rd, Dresden Me 04342
                </Popup>
              </Marker>
            </Map>
          )
        }
        return null
    }
}