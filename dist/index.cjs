"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  canUseDOM: () => canUseDOM,
  capitalize: () => capitalize,
  createFieldOptions: () => createFieldOptions,
  createObjectKeys: () => createObjectKeys,
  createQueryString: () => createQueryString,
  decodeUrl: () => decodeUrl,
  deepMerge: () => deepMerge,
  encodeUrl: () => encodeUrl,
  getClientSideURL: () => getClientSideURL,
  getNestedProperty: () => getNestedProperty,
  getPayloadReference: () => getPayloadReference,
  getServerSideURL: () => getServerSideURL,
  isObject: () => isObject,
  parseSearchParams: () => parseSearchParams,
  slugify: () => slugify
});
module.exports = __toCommonJS(index_exports);

// src/canUseDOM.ts
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);

// src/formatString.ts
var capitalize = (str = "") => {
  if (!str.length) {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// src/createFieldOptions.ts
var createFieldOptions = (keys) => {
  const values = keys.reduce(
    (acc, key) => {
      acc[key] = key;
      return acc;
    },
    {}
  );
  const options = keys.map((key) => ({
    label: capitalize(key),
    value: key
  }));
  return { values, options };
};

// src/createQueryString.ts
var qs = __toESM(require("qs-esm"), 1);
var createQueryString = (query) => {
  return qs.stringify(query, { addQueryPrefix: true });
};

// src/getPayloadReference.ts
function getPayloadReference(ref) {
  if (typeof ref === "string") {
    return null;
  }
  return ref;
}

// src/getUrl.ts
var getServerSideURL = () => {
  let url = process.env.NEXT_PUBLIC_SERVER_URL;
  if (!url && process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (!url) {
    url = "http://localhost:3000";
  }
  return url;
};
var getClientSideURL = () => {
  if (canUseDOM) {
    const protocol = window.location.protocol;
    const domain = window.location.hostname;
    const port = window.location.port;
    return `${protocol}//${domain}${port ? `:${port}` : ""}`;
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return process.env.NEXT_PUBLIC_SERVER_URL || "";
};

// src/object.ts
var getNestedProperty = (obj, path) => {
  return path.split(".").reduce(
    (acc, key) => acc && typeof acc === "object" && key in acc ? acc[key] : void 0,
    obj
  );
};
function isObject(item) {
  return item !== null && typeof item === "object" && !Array.isArray(item);
}
function deepMerge(target, source) {
  const output = { ...target };
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      const sourceValue = source[key];
      if (isObject(sourceValue)) {
        if (!(key in target)) {
          Object.assign(output, { [key]: sourceValue });
        } else {
          output[key] = deepMerge(target[key], sourceValue);
        }
      } else {
        Object.assign(output, { [key]: sourceValue });
      }
    });
  }
  return output;
}
var createObjectKeys = (keys) => {
  return keys.reduce(
    (acc, key) => {
      acc[key] = key;
      return acc;
    },
    {}
  );
};

// src/parseSearchParams.ts
var qs2 = __toESM(require("qs-esm"), 1);
function parseSearchParams(searchParams) {
  const search = searchParams.toString();
  return qs2.parse(search, {
    depth: 10,
    ignoreQueryPrefix: true
  });
}

// src/slugify.ts
var s = __toESM(require("slugify"), 1);
var slugify = s.default || s;

// src/urlEncoding.ts
var decodeUrl = (url) => {
  return url.map((s2) => decodeURIComponent(s2));
};
var encodeUrl = (url) => {
  return encodeURIComponent(url);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  canUseDOM,
  capitalize,
  createFieldOptions,
  createObjectKeys,
  createQueryString,
  decodeUrl,
  deepMerge,
  encodeUrl,
  getClientSideURL,
  getNestedProperty,
  getPayloadReference,
  getServerSideURL,
  isObject,
  parseSearchParams,
  slugify
});
//# sourceMappingURL=index.cjs.map