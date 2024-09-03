import * as L from "leaflet";
declare const createCustomIcon: (latlng: L.LatLng, url: string) => L.Marker<any>;
export declare const setMarkerIcon: (url: string) => L.Icon<L.IconOptions>;
export default createCustomIcon;
