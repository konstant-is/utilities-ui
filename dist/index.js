import {
  canUseDOM
} from "./chunk-6VI7CZR4.js";

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
import * as qs from "qs-esm";
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
import * as qs2 from "qs-esm";
function parseSearchParams(searchParams) {
  const search = searchParams.toString();
  return qs2.parse(search, {
    depth: 10,
    ignoreQueryPrefix: true
  });
}

// src/slugify.ts
import * as s from "slugify";
var slugify = s.default || s;

// src/urlEncoding.ts
var decodeUrl = (url) => {
  return url.map((s2) => decodeURIComponent(s2));
};
var encodeUrl = (url) => {
  return encodeURIComponent(url);
};
export {
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
};
//# sourceMappingURL=index.js.map