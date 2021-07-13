import React from "react";

const getFields = (data)=>{
    let fields = [];
    for(let i = 0; i < data.length; i++){
        let keys = Object.keys(data[i]);
        if(!i){
            fields = keys;
            continue
        };
        keys.forEach(key=>{
            if(!(typeof key)=="string"){
                fields.push(key)
            }
            if(React.isValidElement(key)) fields.push(key)
        });
    }
    return fields;
}


export default getFields;