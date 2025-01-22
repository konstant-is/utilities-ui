// @ts-nocheck
import { isObject } from './isObject.js'

/**
 * Performs a deep merge of two objects.
 * If both properties are objects, they are recursively merged.
 * Primitive values in the source object overwrite those in the target object.
 * @param target - The object to be updated.
 * @param source - The object to merge into the target.
 * @returns The merged object.
 */
export function deepMerge<T, R>(target: T, source: R): T & R {
  const output = { ...target } as T & R // Create a shallow copy of the target
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      const sourceValue = (source as Record<string, unknown>)[key]
      if (isObject(sourceValue)) {
        // If the source value is an object, recursively merge
        if (!(key in target)) {
          Object.assign(output, { [key]: sourceValue }) // Copy source value if not in target
        } else {
          output[key] = deepMerge((target as Record<string, unknown>)[key], sourceValue)
        }
      } else {
        // Overwrite with primitive values from source
        Object.assign(output, { [key]: sourceValue })
      }
    })
  }
  return output
}
