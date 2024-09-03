/// <reference types="sortablejs" />
import type { FeatureCollection, Feature } from "geojson";
import { ItemInterface, Sortable, Store } from "react-sortablejs";
import { ColorResult, FileType } from "../../../../types";
type MapItemsProps = {
    setList: ((newState: ItemInterface[], sortable: Sortable | null, store: Store) => void) | undefined;
    geojson: FeatureCollection;
    handleWeightChange: (weight: number, feature: Feature) => void;
    handleFeatureRemove: (feature: Feature) => void;
    handleColorChange: (color: ColorResult, feature: Feature) => void;
    onFeaturesUpload: (data: FileType) => void;
};
declare const MapItems: ({ setList, geojson, handleWeightChange, handleFeatureRemove, handleColorChange, onFeaturesUpload, }: MapItemsProps) => import("react/jsx-runtime").JSX.Element;
export default MapItems;
