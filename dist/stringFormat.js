import * as s from 'slugify';
/**
 * Truncates a string to the specified length and adds an ellipsis.
 * @param str
 * @param length
 * @returns
 */ export const truncate = (str = '', length = 100)=>{
    if (str.length <= length) return str;
    return str.slice(0, length) + '...';
};
/**
 * Checks if a string contains another string (case-insensitive).
 * @param str
 * @param search
 * @returns
 */ export const contains = (str = '', search)=>{
    return str.toLowerCase().includes(search.toLowerCase());
};
// Fallback for CommonJS or ESM default export
export const slugify = s.default || s;
/**
 * Capitalizes the first letter
 * @param str
 * @returns
 */ export const toCapitalized = (str = '')=>{
    if (!str.length) {
        return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
};
export const toKebabCase = (string)=>string.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();

//# sourceMappingURL=stringFormat.js.map