import { prefixPluginTranslations } from "@strapi/helper-plugin";
import { useRef, useEffect } from "react";
import { jsx } from "react/jsx-runtime";
import styled from "styled-components";
import { PinMap } from "@strapi/icons";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const name$1 = "strapi-leaflet-geoman";
const version = "0.1.32";
const description = "Strapi maintaned Custom Fields";
const keywords = [
  "strapi",
  "strapi-plugin",
  "strapi-plugin-leaflet-geoman",
  "leaflet-geoman",
  "strapi-leaflet-geoman",
  "strapi-custom-field",
  "leaflet",
  "geoman",
  "strapi-maps"
];
const repository = {
  type: "git",
  url: "https://github.com/shadjiu/strapi-leaflet-geoman.git"
};
const license = "MIT";
const author = {
  name: "Hadjiu Sorin",
  email: "hadjiu.sorin@gmail.com",
  url: "https://github.com/shadjiu"
};
const maintainers = [
  {
    name: "A Strapi developer"
  }
];
const exports = {
  "./strapi-admin": {
    types: "./dist/admin/index.d.ts",
    source: "./admin/src/index.ts",
    "import": "./dist/admin/index.mjs",
    require: "./dist/admin/index.js",
    "default": "./dist/admin/index.js"
  },
  "./strapi-server": {
    types: "./dist/server/src/index.d.ts",
    source: "./server/src/index.ts",
    "import": "./dist/server/index.mjs",
    require: "./dist/server/index.js",
    "default": "./dist/server/index.js"
  },
  "./package.json": "./package.json"
};
const files = [
  "./dist",
  "strapi-server.js",
  "strapi-admin.js"
];
const scripts = {
  build: "strapi plugin:build --force",
  clean: "run -T rimraf ./dist",
  watch: "strapi plugin:watch"
};
const resolutions = {
  "@types/react": "^17.0.0 || ^18.0.0"
};
const dependencies = {
  "@geoman-io/leaflet-geoman-free": "^2.17.0",
  "@strapi/design-system": "^1.17.0",
  "@strapi/helper-plugin": "^4.23.1",
  "@strapi/icons": "^1.17.0",
  "@uiw/react-color-chrome": "^2.1.1",
  "geojson-validation": "^1.0.2",
  leaflet: "^1.9.4",
  "leaflet-defaulticon-compatibility": "^0.1.2",
  "prop-types": "^15.8.1",
  "rc-slider": "^10.6.1",
  "react-leaflet": "^4.2.1",
  "react-leaflet-geoman-v2": "^1.0.1",
  "react-sortablejs": "^6.1.4",
  sortablejs: "^1.15.2"
};
const devDependencies = {
  "@strapi/strapi": "^4.20.5",
  "@strapi/typescript-utils": "^4.20.5",
  "@types/geojson-validation": "^1.0.3",
  "@types/leaflet": "^1.9.8",
  "@types/react": "^18.2.66",
  "@types/react-dom": "^18.2.22",
  "@types/react-router-dom": "^5.3.3",
  "@types/sortablejs": "^1.15.8",
  "@types/styled-components": "^5.1.34",
  react: "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^5.3.4",
  "styled-components": "^5.3.11",
  typescript: "5.4.2"
};
const peerDependencies = {
  "@strapi/strapi": "^4.0.0",
  react: "^17.0.0 || ^18.0.0",
  "react-dom": "^17.0.0 || ^18.0.0",
  "react-router-dom": "^5.2.0",
  "styled-components": "^5.2.1"
};
const packageManager = "yarn@4.1.1";
const engines = {
  node: ">=18.0.0 <=20.x.x",
  npm: ">=6.0.0"
};
const strapi = {
  name: "strapi-leaflet-geoman",
  displayName: "Strapi Leaflet Geoman",
  description: "The Leaflet GeoJSON Generator plugin seamlessly integrates with Leaflet, allowing users to draw and customize various geometry figures, creating a GeoJSON collection for effortless spatial data representation.",
  kind: "plugin"
};
const pluginPkg = {
  name: name$1,
  version,
  description,
  keywords,
  repository,
  license,
  author,
  maintainers,
  exports,
  files,
  scripts,
  resolutions,
  dependencies,
  devDependencies,
  peerDependencies,
  packageManager,
  engines,
  strapi
};
const pluginId = pluginPkg.strapi.name;
const Initializer = ({ setPlugin }) => {
  const ref = useRef(setPlugin);
  useEffect(() => {
    ref.current(pluginId);
  }, []);
  return null;
};
const StyledPinMap = styled(PinMap)`
  path {
    fill: ${({ theme }) => theme.colors.primary500};
  }
`;
const PluginIcon = () => /* @__PURE__ */ jsx(StyledPinMap, {});
const getTrad = (id) => `${pluginId}.${id}`;
const classNames = `.leaflet-control-container .leaflet-top,
.leaflet-control-container .leaflet-bottom {
  transform: translate3d(0px, 0px, 0px);
}
.leaflet-container {
  height: 100%;
  width: 100%;
  margin: 0 auto;
}

.leaflet-control {
  z-index: 0 !important;
}
.leaflet-pane {
  z-index: 0 !important;
}
.leaflet-top,
.leaflet-bottom {
  z-index: 0 !important;
}`;
const generateStyles = () => {
  const style = document.createElement("style");
  style.textContent = classNames;
  document.head.appendChild(style);
};
const name = pluginPkg.strapi.displayName;
const index = {
  register(app) {
    console.log(app);
    app.createSettingSection(
      {
        id: `${pluginId}-label`,
        intlLabel: {
          id: getTrad("settings.section-label"),
          defaultMessage: name
        }
      },
      // Section to create
      [
        // links
        {
          intlLabel: {
            id: getTrad("settings.link-label"),
            defaultMessage: "Configuration"
          },
          id: `${pluginId}-link-label`,
          to: `/settings/${pluginId}`,
          Component: async () => {
            const component = await import(
              /* webpackChunkName: "settings-page" */
              "./index-Elao-tcI.mjs"
            );
            return component;
          },
          permissions: [
            { action: `plugin::${pluginId}.config`, subject: null }
          ]
        }
      ]
    );
    app.customFields.register({
      name: "geojson",
      pluginId,
      // the custom field is created by plugin
      type: "json",
      // the color will be stored as a json
      intlLabel: {
        id: getTrad("input.label"),
        defaultMessage: name
      },
      intlDescription: {
        id: getTrad("input.description"),
        defaultMessage: "Draw/pick your location"
      },
      icon: PluginIcon,
      // don't forget to create/import your icon component
      // components: {
      //   Input: async () =>
      //     import(
      //       /* webpackChunkName: "input-component" */ "./components/Input"
      //     ),
      // },
      components: {
        Input: async () => import("./index-Bwk3-DTz.mjs")
      },
      options: {
        advanced: [
          {
            name: "optionsLatitude",
            type: "string",
            intlLabel: {
              id: getTrad("attribute.item.defaultLat"),
              defaultMessage: "Default latitude"
            }
          },
          {
            name: "optionsLongitude",
            type: "string",
            intlLabel: {
              id: getTrad("attribute.item.defaultLng"),
              defaultMessage: "Default longitude"
            }
          },
          {
            name: "optionsZoom",
            type: "number",
            intlLabel: {
              id: getTrad("attribute.item.defaultZoom"),
              defaultMessage: "Default Zoom Level"
            }
          },
          {
            name: "optionsTileURL",
            type: "string",
            intlLabel: {
              id: getTrad("attribute.item.defaultTileURL"),
              defaultMessage: "Tile URL"
            }
          },
          {
            name: "optionsTileAttribution",
            type: "string",
            intlLabel: {
              id: getTrad("attribute.item.defaultTileAttribution"),
              defaultMessage: "Tile Attribution"
            }
          },
          {
            name: "optionsTileAccessToken",
            type: "string",
            intlLabel: {
              id: getTrad("attribute.item.defaultTileAccessToken"),
              defaultMessage: "Tile Access Token"
            }
          },
          {
            sectionTitle: {
              id: "global.settings",
              defaultMessage: "Settings"
            },
            items: [
              {
                name: "required",
                type: "checkbox",
                intlLabel: {
                  id: "form.attribute.item.requiredField",
                  defaultMessage: "Required field"
                },
                description: {
                  id: "form.attribute.item.requiredField.description",
                  defaultMessage: "You won't be able to create an entry if this field is empty"
                }
              }
            ]
          }
        ]
      }
    });
    const plugin = {
      id: pluginId,
      initializer: Initializer,
      isReady: true,
      name
    };
    app.registerPlugin(plugin);
  },
  bootstrap(app) {
    generateStyles();
  },
  async registerTrads(app) {
    const { locales } = app;
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./translations/en.json": () => import("./en-Byx4XI2L.mjs"), "./translations/fr.json": () => import("./fr-hkSxFuzl.mjs") }), `./translations/${locale}.json`).then(({ default: data }) => {
          return {
            data: prefixPluginTranslations(data, pluginId),
            locale
          };
        }).catch(() => {
          return {
            data: {},
            locale
          };
        });
      })
    );
    return Promise.resolve(importedTrads);
  }
};
export {
  index as i,
  pluginId as p
};
//# sourceMappingURL=index-CGvp-vx-.mjs.map
