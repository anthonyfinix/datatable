const handleData = (data)=>{

    if(data.length < 1) return {error:"data empty"};
    const rows = [];
    let fields = [];

    for(let i = 0; i < data.length; i++){
        let keys = Object.keys(data[i]);
        if(!i){
            fields = keys;
            continue
        };
        // check current keys or fields is bigger
        
        keys.map((key)=>{
            if(!fields.includes(key)) fields.push(key)
        });


    }

    for(let i = 0; i < data.length; i++){
        let row = {};
        fields.map(field=>{
            if(data[i][field]){
                row[field] = data[i][field]
            }else{
                row[field] = '-'
            }
        })
        rows.push(row);
    }
    return {
        fields,
        rows,
    }
}

export default handleData;