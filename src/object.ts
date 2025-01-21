// @ts-nocheck

// Utility type to extract keys that are strings from a union type
type ExtractKeys<T> = Extract<T, string>

/**
 * Get a deeply nested property of an object based on a dot-separated path.
 * @param obj - The object to traverse.
 * @param path - Dot-separated string representing the path to the property.
 * @returns The value at the specified path or undefined if the path does not exist.
 */
export const getNestedProperty = (obj: Record<string, unknown>, path: string): any => {
  return path
    .split('.') // Split the path into individual keys
    .reduce(
      (acc, key) => (acc && typeof acc === 'object' && key in acc ? acc[key] : undefined),
      obj,
    ) // Traverse the object based on the keys
}

/**
 * Checks if the given item is a plain object (not an array, null, or primitive).
 * @param item - The item to check.
 * @returns True if the item is an object, otherwise false.
 */
export function isObject(item: unknown): boolean {
  return item !== null && typeof item === 'object' && !Array.isArray(item)
}

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

/**
 * Creates an object where each key maps to its own name as a string.
 * @param keys - Array of keys to create the object from.
 * @returns An object where each key is assigned its own name as the value.
 */
export const createObjectKeys = <T extends string>(keys: ExtractKeys<T>[]): Record<T, string> => {
  return keys.reduce(
    (acc, key) => {
      acc[key] = key // Assign the key to itself as the value
      return acc
    },
    {} as Record<T, string>,
  )
}
