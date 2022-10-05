/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    let map = new Map;
    for(let i=0; i< fields.length; i++){
        
        for(let [key,val] of Object.entries(obj) ){
            
            if(key == fields[i])
                
                map.set(key,val );
        }
    }

    let newObj = Object.fromEntries(map.entries());
    return newObj;
};
 