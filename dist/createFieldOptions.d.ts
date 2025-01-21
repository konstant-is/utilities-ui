type ExtractKeys<T> = T extends string ? T : never;
export declare const createFieldOptions: <T extends string>(keys: ExtractKeys<T>[]) => {
    values: Record<ExtractKeys<T>, string>;
    options: {
        label: string;
        value: ExtractKeys<T>;
    }[];
};
export {};
