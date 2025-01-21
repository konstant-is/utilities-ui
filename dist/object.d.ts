type ExtractKeys<T> = Extract<T, string>;
/**
 * Get a deeply nested property of an object based on a dot-separated path.
 * @param obj - The object to traverse.
 * @param path - Dot-separated string representing the path to the property.
 * @returns The value at the specified path or undefined if the path does not exist.
 */
export declare const getNestedProperty: (obj: Record<string, unknown>, path: string) => any;
/**
 * Checks if the given item is a plain object (not an array, null, or primitive).
 * @param item - The item to check.
 * @returns True if the item is an object, otherwise false.
 */
export declare function isObject(item: unknown): boolean;
/**
 * Performs a deep merge of two objects.
 * If both properties are objects, they are recursively merged.
 * Primitive values in the source object overwrite those in the target object.
 * @param target - The object to be updated.
 * @param source - The object to merge into the target.
 * @returns The merged object.
 */
export declare function deepMerge<T, R>(target: T, source: R): T & R;
/**
 * Creates an object where each key maps to its own name as a string.
 * @param keys - Array of keys to create the object from.
 * @returns An object where each key is assigned its own name as the value.
 */
export declare const createObjectKeys: <T extends string>(keys: ExtractKeys<T>[]) => Record<T, string>;
export {};
