export { canUseDOM } from './canUseDOM.js';
import { ReadonlyURLSearchParams } from 'next/navigation.js';
import * as qs from 'qs-esm';
import * as _slugify from 'slugify';

type ExtractKeys$1<T> = T extends string ? T : never;
declare const createFieldOptions: <T extends string>(keys: ExtractKeys$1<T>[]) => {
    values: Record<ExtractKeys$1<T>, string>;
    options: {
        label: string;
        value: ExtractKeys$1<T>;
    }[];
};

declare const createQueryString: (query: any) => string;

declare const capitalize: (str?: string) => string;

declare function getPayloadReference<T>(ref: T | string | null | undefined): T | null;

declare const getServerSideURL: () => string;
declare const getClientSideURL: () => string;

type ExtractKeys<T> = Extract<T, string>;
/**
 * Get a deeply nested property of an object based on a dot-separated path.
 * @param obj - The object to traverse.
 * @param path - Dot-separated string representing the path to the property.
 * @returns The value at the specified path or undefined if the path does not exist.
 */
declare const getNestedProperty: (obj: Record<string, unknown>, path: string) => any;
/**
 * Checks if the given item is a plain object (not an array, null, or primitive).
 * @param item - The item to check.
 * @returns True if the item is an object, otherwise false.
 */
declare function isObject(item: unknown): boolean;
/**
 * Performs a deep merge of two objects.
 * If both properties are objects, they are recursively merged.
 * Primitive values in the source object overwrite those in the target object.
 * @param target - The object to be updated.
 * @param source - The object to merge into the target.
 * @returns The merged object.
 */
declare function deepMerge<T, R>(target: T, source: R): T & R;
/**
 * Creates an object where each key maps to its own name as a string.
 * @param keys - Array of keys to create the object from.
 * @returns An object where each key is assigned its own name as the value.
 */
declare const createObjectKeys: <T extends string>(keys: ExtractKeys<T>[]) => Record<T, string>;

/**
 * A utility function to parse URLSearchParams into a ParsedQs object.
 * This function is a wrapper around the `qs` library.
 * In Next.js, the `useSearchParams()` hook from `next/navigation` returns a `URLSearchParams` object.
 * This function can be used to parse that object into a more usable format.
 * @param {ReadonlyURLSearchParams} searchParams - The URLSearchParams object to parse.
 * @returns {qs.ParsedQs} - The parsed query string object.
 */
declare function parseSearchParams(searchParams: ReadonlyURLSearchParams): qs.ParsedQs;

declare const slugify: typeof _slugify;

/**
 * Decodes an array of URL-encoded strings.
 *
 * @param url - An array of URL-encoded strings.
 * @returns An array of decoded strings where each URL-encoded string is transformed into its decoded form.
 *
 * @example
 * // Decoding an array of URL-encoded strings
 * decodeUrl(["Hello%20World", "How%27s%20it%20going"]);
 * // Output: ["Hello World", "How's it going"]
 */
declare const decodeUrl: (url: string[]) => string[];
/**
 * Encodes a single string for use in a URL.
 *
 * @param url - A string to be URL-encoded.
 * @returns A URL-encoded version of the input string.
 *
 * @example
 * // Encoding a string for use in a URL
 * encodeUrl("Hello World");
 * // Output: "Hello%20World"
 */
declare const encodeUrl: (url: string) => string;

export { capitalize, createFieldOptions, createObjectKeys, createQueryString, decodeUrl, deepMerge, encodeUrl, getClientSideURL, getNestedProperty, getPayloadReference, getServerSideURL, isObject, parseSearchParams, slugify };
