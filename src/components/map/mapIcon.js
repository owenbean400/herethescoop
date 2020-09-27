import L from 'leaflet';

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
    iconUrl: require("../../images/cone_icon.svg"),
    iconRetinaUrl: require("../../images/cone_icon.svg"),
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [150, 150],
    shadowUrl: "../../images/cone_icon_shadow.svg",
    shadowSize: [68, 95],
    shadowAnchor: [200, 92]
});

export { iconCone };