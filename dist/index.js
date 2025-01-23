import {
  __commonJS,
  __toESM
} from "./chunk-5WRI5ZAA.js";

// node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js
var require_cjs = __commonJS({
  "node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"(exports, module) {
    "use strict";
    var isMergeableObject = function isMergeableObject2(value) {
      return isNonNullObject(value) && !isSpecial(value);
    };
    function isNonNullObject(value) {
      return !!value && typeof value === "object";
    }
    function isSpecial(value) {
      var stringValue = Object.prototype.toString.call(value);
      return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
    }
    var canUseSymbol = typeof Symbol === "function" && Symbol.for;
    var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
    function isReactElement(value) {
      return value.$$typeof === REACT_ELEMENT_TYPE;
    }
    function emptyTarget(val) {
      return Array.isArray(val) ? [] : {};
    }
    function cloneUnlessOtherwiseSpecified(value, options) {
      return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
    }
    function defaultArrayMerge(target, source, options) {
      return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
      });
    }
    function getMergeFunction(key, options) {
      if (!options.customMerge) {
        return deepmerge;
      }
      var customMerge = options.customMerge(key);
      return typeof customMerge === "function" ? customMerge : deepmerge;
    }
    function getEnumerableOwnPropertySymbols(target) {
      return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return Object.propertyIsEnumerable.call(target, symbol);
      }) : [];
    }
    function getKeys(target) {
      return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
    }
    function propertyIsOnObject(object, property) {
      try {
        return property in object;
      } catch (_) {
        return false;
      }
    }
    function propertyIsUnsafe(target, key) {
      return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
    }
    function mergeObject(target, source, options) {
      var destination = {};
      if (options.isMergeableObject(target)) {
        getKeys(target).forEach(function(key) {
          destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
      }
      getKeys(source).forEach(function(key) {
        if (propertyIsUnsafe(target, key)) {
          return;
        }
        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
          destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        } else {
          destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
        }
      });
      return destination;
    }
    function deepmerge(target, source, options) {
      options = options || {};
      options.arrayMerge = options.arrayMerge || defaultArrayMerge;
      options.isMergeableObject = options.isMergeableObject || isMergeableObject;
      options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
      var sourceIsArray = Array.isArray(source);
      var targetIsArray = Array.isArray(target);
      var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
      if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
      } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
      } else {
        return mergeObject(target, source, options);
      }
    }
    deepmerge.all = function deepmergeAll(array, options) {
      if (!Array.isArray(array)) {
        throw new Error("first argument should be an array");
      }
      return array.reduce(function(prev, next) {
        return deepmerge(prev, next, options);
      }, {});
    };
    var deepmerge_1 = deepmerge;
    module.exports = deepmerge_1;
  }
});

// src/canUseDOM.ts
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);

// src/createObjectKeys.ts
var createObjectKeys = (keys) => {
  return keys.reduce(
    (acc, key) => {
      acc[key] = key;
      return acc;
    },
    {}
  );
};

// src/createQueryString.ts
import * as qs from "qs-esm";
var createQueryString = (query) => {
  return qs.stringify(query, { addQueryPrefix: true });
};

// src/deepMerge.ts
var import_deepmerge = __toESM(require_cjs(), 1);

// src/isReactComponent.ts
var clientRefSymbol = Symbol.for("react.client.reference");
function isReactServerComponentOrFunction(component) {
  if (component === null || component === void 0) {
    return false;
  }
  const hasClientComponentSymbol = component.$$typeof == clientRefSymbol;
  const isFunctionalComponent = typeof component === "function";
  const isAnonymousFunction = typeof component === "function" && component.name === "";
  const isRSC = isFunctionalComponent && !isAnonymousFunction && !hasClientComponentSymbol;
  return isRSC;
}
function isReactClientComponent(component) {
  if (component === null || component === void 0) {
    return false;
  }
  return !isReactServerComponentOrFunction(component) && component.$$typeof == clientRefSymbol;
}
function isReactComponentOrFunction(component) {
  return isReactServerComponentOrFunction(component) || isReactClientComponent(component);
}

// src/isPlainObject.ts
function isPlainObject(o) {
  if (isReactComponentOrFunction(o)) {
    return false;
  }
  return typeof o === "object" && o !== null && !(o instanceof RegExp) && !(o instanceof Date);
}

// src/deepMerge.ts
function deepMergeWithCombinedArrays(obj1, obj2, options = {}) {
  return (0, import_deepmerge.default)(obj1, obj2, {
    arrayMerge: (target, source, options2) => {
      const destination = target.slice();
      source.forEach((item, index) => {
        if (typeof destination[index] === "undefined") {
          destination[index] = options2?.cloneUnlessOtherwiseSpecified(item, options2);
        } else if (options2?.isMergeableObject(item)) {
          destination[index] = (0, import_deepmerge.default)(target[index], item, options2);
        } else if (target.indexOf(item) === -1) {
          destination.push(item);
        }
      });
      return destination;
    },
    ...options
  });
}
function deepMergeWithSourceArrays(obj1, obj2) {
  return (0, import_deepmerge.default)(obj1, obj2, { arrayMerge: (_, source) => source });
}
function deepMergeWithReactComponents(obj1, obj2) {
  return (0, import_deepmerge.default)(obj1, obj2, {
    isMergeableObject: isPlainObject
  });
}

// src/encoding.ts
var decodeUrl = (url) => {
  return url.map((s2) => decodeURIComponent(s2));
};
var encodeUrl = (url) => {
  return encodeURIComponent(url);
};

// src/getNestedProperty.ts
var getNestedProperty = (obj, path) => {
  return path.split(".").reduce(
    (acc, key) => acc && typeof acc === "object" && key in acc ? acc[key] : void 0,
    obj
  );
};

// src/isNumber.ts
function isNumber(value) {
  if (value === null || value === void 0 || typeof value === "string" && value.trim() === "") {
    return false;
  }
  return !Number.isNaN(Number(value));
}

// src/logError.ts
var logError = ({ err, config }) => {
  let level = "error";
  if (err && typeof err === "object" && "name" in err && typeof err.name === "string" && typeof config.loggingLevels[err.name] !== "undefined") {
    level = config.loggingLevels[err.name];
  }
  if (level) {
    const logObject = {};
    if (level === "info") {
      logObject.msg = err && typeof err === "object" && "message" in err ? err.message : "Error";
    } else {
      logObject.err = err ?? "Unknown error";
    }
    config.logger[level](logObject);
  }
};

// src/logger.ts
import { pino } from "pino";
import { build } from "pino-pretty";
var prettyOptions = {
  colorize: true,
  ignore: "pid,hostname",
  translateTime: "SYS:HH:MM:ss"
};
var prettySyncLoggerDestination = build({
  ...prettyOptions,
  destination: 1,
  // stdout
  sync: true
});
var defaultLoggerOptions = build(prettyOptions);
var getLogger = (name = "app", logger) => {
  if (!logger) {
    return pino(defaultLoggerOptions);
  }
  if (logger === "sync") {
    return pino(prettySyncLoggerDestination);
  }
  if ("options" in logger) {
    const { destination, options } = logger;
    if (!options.name) {
      options.name = name;
    }
    if (!options.enabled) {
      options.enabled = process.env.DISABLE_LOGGING !== "true";
    }
    return pino(options, destination);
  } else {
    return logger;
  }
};

// src/mapAsync.ts
async function mapAsync(arr, callbackfn) {
  return Promise.all(arr.map(callbackfn));
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

// src/isObject.ts
function isObject(item) {
  return item !== null && typeof item === "object" && !Array.isArray(item);
}

// src/parseSearchParams.ts
import * as qs2 from "qs-esm";
function parseSearchParams(searchParams) {
  const search = searchParams.toString();
  return qs2.parse(search, {
    depth: 10,
    ignoreQueryPrefix: true
  });
}

// src/removeUndefined.ts
function removeUndefined(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([, value]) => value !== void 0));
}

// src/stringFormat.ts
import * as s from "slugify";
var truncate = (str = "", length = 100) => {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
};
var contains = (str = "", search) => {
  return str.toLowerCase().includes(search.toLowerCase());
};
var slugify = s.default || s;
var toCapitalized = (str = "") => {
  if (!str.length) {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};
var toKebabCase = (string) => string.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, "-").toLowerCase();
var export_deepMerge = import_deepmerge.default;
export {
  canUseDOM,
  contains,
  createObjectKeys,
  createQueryString,
  decodeUrl,
  export_deepMerge as deepMerge,
  deepMergeWithCombinedArrays,
  deepMergeWithReactComponents,
  deepMergeWithSourceArrays,
  defaultLoggerOptions,
  encodeUrl,
  getClientSideURL,
  getLogger,
  getNestedProperty,
  getServerSideURL,
  isNumber,
  isObject,
  isPlainObject,
  isReactClientComponent,
  isReactComponentOrFunction,
  isReactServerComponentOrFunction,
  logError,
  mapAsync,
  parseSearchParams,
  prettySyncLoggerDestination,
  removeUndefined,
  slugify,
  toCapitalized,
  toKebabCase,
  truncate
};
//# sourceMappingURL=index.js.map