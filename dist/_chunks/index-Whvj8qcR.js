"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const index = require("./index-BNcyXd3u.js");
const helperPlugin = require("@strapi/helper-plugin");
const React = require("react");
const designSystem = require("@strapi/design-system");
const icons = require("@strapi/icons");
const useConfig = require("./useConfig-aZbH7UYl.js");
require("styled-components");
require("@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css");
require("leaflet/dist/leaflet.css");
require("leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css");
require("leaflet-defaulticon-compatibility");
function Settings() {
  const [saveConfig, setSaveConfig] = React.useState();
  const [inputFields, setInputFields] = React.useState();
  const [unsavedChanges, setUnsavedChanges] = React.useState(false);
  const config = useConfig.useConfig(saveConfig);
  React.useEffect(() => {
    if (!!config) {
      setInputFields(config);
    }
  }, [config]);
  React.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { background: "neutral100", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Layout, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { "aria-busy": config === void 0, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.HeaderLayout,
      {
        primaryAction: /* @__PURE__ */ jsxRuntime.jsx(
          designSystem.Button,
          {
            startIcon: /* @__PURE__ */ jsxRuntime.jsx(icons.Check, {}),
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
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.ContentLayout, { children: config === null ? /* @__PURE__ */ jsxRuntime.jsx(
      helperPlugin.AnErrorOccurred,
      {
        content: {
          id: `${index.pluginId}.error`,
          defaultMessage: "An error occurred"
        }
      }
    ) : config === void 0 || !inputFields ? /* @__PURE__ */ jsxRuntime.jsx("div", { style: { display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Loader, {}) }) : /* @__PURE__ */ jsxRuntime.jsxs(
      designSystem.Box,
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
          /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.TextInput,
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
          /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.TextInput,
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
          /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.TextInput,
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
          /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.TextInput,
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
          /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.TextInput,
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
          /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.TextInput,
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
const permissions = [{ action: `plugin::${index.pluginId}.config`, subject: null }];
const SettingsPage = () => {
  return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.CheckPagePermissions, { permissions, children: /* @__PURE__ */ jsxRuntime.jsx(Settings, {}) });
};
exports.default = SettingsPage;
//# sourceMappingURL=index-Whvj8qcR.js.map
