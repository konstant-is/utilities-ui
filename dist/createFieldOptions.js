import { capitalize } from './formatString.js';
// Create a generic function to create the record and options based on the type
export const createFieldOptions = (keys)=>{
    const values = keys.reduce((acc, key)=>{
        acc[key] = key;
        return acc;
    }, {});
    const options = keys.map((key)=>({
            label: capitalize(key),
            value: key
        }));
    return {
        values,
        options
    };
};

//# sourceMappingURL=createFieldOptions.js.map