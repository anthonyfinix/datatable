const getRows = (fields,data)=>{
    let rows = []
    for(let i = 0; i < data.length; i++){
        let row = {};
        fields.forEach(field=>{
            if(data[i][field]){
                row[field] = data[i][field]
            }else{
                row[field] = '-'
            }
        })
        rows.push(row);
    }
    return rows;
}

export default getRows;