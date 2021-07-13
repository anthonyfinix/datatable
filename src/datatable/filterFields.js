const filterFields = (fields,include,exclude)=>{
    const checkInclude = (field)=>{
        if(!include || !Array.isArray(include)) return true;
        return include.includes(field);
    }
    const checkExclude = (field)=>{
        if(!exclude || !Array.isArray(exclude)) return true;
        return !exclude.includes(field);
    }

    return fields.filter(field=>{
        if(checkInclude(field) && checkExclude(field)){
            return true;
        }
        return false
    })


}

export default filterFields;