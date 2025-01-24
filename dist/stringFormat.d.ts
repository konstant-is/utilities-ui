/**
 * Truncates a string to the specified length and adds an ellipsis.
 * @param str
 * @param length
 * @returns
 */
export declare const truncate: (str?: string, length?: number) => string;
/**
 * Checks if a string contains another string (case-insensitive).
 * @param str
 * @param search
 * @returns
 */
export declare const contains: (str: string | undefined, search: string) => boolean;
export declare const slugify: typeof import("slugify");
/**
 * Capitalizes the first letter
 * @param str
 * @returns
 */
export declare const toCapitalized: (str?: string) => string;
export declare const toKebabCase: (string: string) => string;
//# sourceMappingURL=stringFormat.d.ts.map