/**
 * Hack to make 'slugify' import work with "type": "module".
 */ import * as s from 'slugify';
// Fallback for CommonJS or ESM default export
export const slugify = s.default || s;

//# sourceMappingURL=slugify.js.map