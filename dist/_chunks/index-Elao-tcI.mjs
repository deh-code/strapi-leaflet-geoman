import { jsx, jsxs } from "react/jsx-runtime";
import { p as pluginId } from "./index-CGvp-vx-.mjs";
import { AnErrorOccurred, CheckPagePermissions } from "@strapi/helper-plugin";
import { useState, useEffect } from "react";
import { Box, Layout, Main, HeaderLayout, Button, ContentLayout, Loader, TextInput } from "@strapi/design-system";
import { Check } from "@strapi/icons";
import { u as useConfig } from "./useConfig-BKs95qrT.mjs";
import "styled-components";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
function Settings() {
  const [saveConfig, setSaveConfig] = useState();
  const [inputFields, setInputFields] = useState();
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const config = useConfig(saveConfig);
  useEffect(() => {
    if (!!config) {
      setInputFields(config);
    }
  }, [config]);
  useEffect(() => {
    if (!inputFields || !config)
      return;
    const inputFieldChanged = Object.entries(inputFields).some(
      ([key, value]) => value !== config[key]
    );
    setUnsavedChanges(inputFieldChanged);
  }, [inputFields]);
  const onSave = () => {
    setUnsavedChanges(false);
    setSaveConfig(inputFields);
  };
  return /* @__PURE__ */ jsx(Box, { background: "neutral100", children: /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsxs(Main, { "aria-busy": config === void 0, children: [
    /* @__PURE__ */ jsx(
      HeaderLayout,
      {
        primaryAction: /* @__PURE__ */ jsx(
          Button,
          {
            startIcon: /* @__PURE__ */ jsx(Check, {}),
            loading: config === void 0,
            disabled: !unsavedChanges,
            onClick: onSave,
            children: "Save"
          }
        ),
        title: "Strapi Leaflet Geoman Configuration",
        subtitle: "Configure your Strapi Leaflet Geoman settings"
      }
    ),
    /* @__PURE__ */ jsx(ContentLayout, { children: config === null ? /* @__PURE__ */ jsx(
      AnErrorOccurred,
      {
        content: {
          id: `${pluginId}.error`,
          defaultMessage: "An error occurred"
        }
      }
    ) : config === void 0 || !inputFields ? /* @__PURE__ */ jsx("div", { style: { display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ jsx(Loader, {}) }) : /* @__PURE__ */ jsxs(
      Box,
      {
        style: {
          gap: "16px",
          display: "flex",
          flexDirection: "column"
        },
        shadow: "tableShadow",
        background: "neutral0",
        paddingTop: 6,
        paddingLeft: 7,
        paddingRight: 7,
        paddingBottom: 6,
        hasRadius: true,
        children: [
          /* @__PURE__ */ jsx(
            TextInput,
            {
              type: "number",
              id: "latitude",
              name: "latitude",
              placeholder: "Add default map center latitude",
              label: "Default Map Latitude",
              value: inputFields.defaultLatitude,
              onChange: (e) => {
                setInputFields({
                  ...inputFields,
                  defaultLatitude: e.target.value
                });
              }
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              type: "number",
              id: "longitude",
              name: "longitude",
              placeholder: "Add default map center longitude",
              label: "Default Map Longitude",
              value: inputFields.defaultLongitude,
              onChange: (e) => {
                setInputFields({
                  ...inputFields,
                  defaultLongitude: e.target.value
                });
              }
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              type: "number",
              id: "zoom",
              name: "zoom",
              placeholder: "Add default map zoom level",
              label: "Default Map Zoom Level",
              value: inputFields.defaultZoom,
              onChange: (e) => {
                setInputFields({
                  ...inputFields,
                  defaultZoom: e.target.value
                });
              }
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              type: "text",
              id: "tileURL",
              name: "tileURL",
              placeholder: "Add default map tile URL",
              label: "Default Map Tile URL",
              value: inputFields.defaultTileURL,
              onChange: (e) => {
                setInputFields({
                  ...inputFields,
                  defaultTileURL: e.target.value
                });
              }
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              type: "text",
              id: "tileAttribution",
              name: "tileAttribution",
              placeholder: "Add default map tile Attribution",
              label: "Default Map Tile Attribution",
              value: inputFields.defaultTileAttribution,
              onChange: (e) => {
                setInputFields({
                  ...inputFields,
                  defaultTileAttribution: e.target.value
                });
              }
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              type: "text",
              id: "accessToken",
              name: "accessToken",
              placeholder: "Add default map tile Access Token",
              label: "Default Map Tile Access Token",
              value: inputFields.defaultTileAccessToken,
              onChange: (e) => {
                setInputFields({
                  ...inputFields,
                  defaultTileAccessToken: e.target.value
                });
              }
            }
          )
        ]
      }
    ) })
  ] }) }) });
}
const permissions = [{ action: `plugin::${pluginId}.config`, subject: null }];
const SettingsPage = () => {
  return /* @__PURE__ */ jsx(CheckPagePermissions, { permissions, children: /* @__PURE__ */ jsx(Settings, {}) });
};
export {
  SettingsPage as default
};
//# sourceMappingURL=index-Elao-tcI.mjs.map
