import { isDate } from 'date-fns';
/**
 * Checks if a given date is between a start date and an end date (exclusive).
 *
 * @param date - The date to check (can be Date, number, or string).
 * @param start - The start date (can be Date, number, or string).
 * @param end - The end date (can be Date, number, or string).
 * @returns `true` if the date is between the start and end dates, otherwise `false`.
 */
export declare const isBetween: (date: Date | number | string, start: Date | number | string, end: Date | number | string) => boolean;
export { isDate };
//# sourceMappingURL=dateUtils.d.ts.map