import * as React from "react";
import type { FeatureCollection } from "geojson";
import * as L from "leaflet";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
interface Props {
    geojson: FeatureCollection;
    setGeojson: (geojson: FeatureCollection) => void;
}
export type ForwRefHandle = {
    setStyle: (options: L.PathOptions, index: number) => void;
    removeLayer: (index: number) => void;
    resetLayers: (data: FeatureCollection) => void;
};
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<ForwRefHandle>>;
export default _default;
