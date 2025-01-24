import * as qs from 'qs-esm';
export const createQueryString = (query)=>{
    return qs.stringify(query, {
        addQueryPrefix: true
    });
};

//# sourceMappingURL=createQueryString.js.map