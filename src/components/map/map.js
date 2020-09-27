import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer, Icon } from 'react-leaflet'
import L from 'leaflet';
import 'react-leaflet';

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

if (typeof window !== 'undefined') {
  const mapIcon = MapIcon();
  const iconCone = new L.Icon.extend({
    iconRetinaUrl: require("../../images/cone_icon.svg"),
    iconUrl: require("../../images/cone_icon.svg"),
    shadowUrl: require("../../images/cone_icon_shadow.svg"),
    iconAnchor: [47, 100],
    popupAnchor: [0, -102],
    iconSize: [100, 100],
    shadowSize: [68, 95],
    shadowAnchor: [-2, 74]
  });
}

export default class MyMap extends Component{

    render(){
        const position = [State.lat, State.lng]
        const { options } = this.props

        if (typeof window !== 'undefined') {
          return (
            <Map center={position} zoom={State.zoom} style={MAP_STYLE_ADDON} icon={(!!iconCone) ? iconCone : null}>
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