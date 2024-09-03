import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
declare const _default: {
    register(app: any): void;
    bootstrap(app: any): void;
    registerTrads(app: any): Promise<({
        data: {
            [x: string]: string;
        };
        locale: any;
    } | {
        data: {};
        locale: any;
    })[]>;
};
export default _default;
