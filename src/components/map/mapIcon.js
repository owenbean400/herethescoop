import L from 'leaflet';
import 'react-leaflet';
import { Icon } from 'leaflet/src/layer/marker' ;

import ConeIcon from '../../images/cone_icon.svg';


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("../../images/cone_icon.svg"),
  iconUrl: require("../../images/cone_icon.svg"),
  shadowUrl: require("../../images/cone_icon_shadow.svg"),
  iconAnchor: [47, 100],
  popupAnchor: [0, -102],
  iconSize: [100, 100],
  shadowSize: [68, 95],
  shadowAnchor: [-2, 74]
});


const iconCone = new L.Icon({
  iconRetinaUrl: require("../../images/cone_icon.svg"),
  iconUrl: require("../../images/cone_icon.svg"),
  shadowUrl: require("../../images/cone_icon_shadow.svg"),
  iconAnchor: [47, 100],
  popupAnchor: [0, -102],
  iconSize: [100, 100],
  shadowSize: [68, 95],
  shadowAnchor: [-2, 74]
});

  
export { iconCone };
