import type { Feature } from "geojson";
import { ColorResult } from "../../../../types";
declare const SortableItem: ({ feature, handleChange, handleRemove, handleWeightChange, }: {
    feature: Feature;
    handleRemove: (feature: Feature) => void;
    handleChange: (color: ColorResult, feature: Feature) => void;
    handleWeightChange: (weight: number, feature: Feature) => void;
}) => import("react/jsx-runtime").JSX.Element;
export default SortableItem;
