import style from './style.module.css';
import handleData from './handleData'
const dataTable =  ({data,options})=>{
    let {fields,rows} = handleData(data);
    const getTableHeading = (field,key)=>{
        return(
            <th key={key} className={`${style.th} ${style.cell}`}>{field}</th>
        )
    }
    const getTableRow = (row,key)=>{
        return(
            <tr key={key} className={`${style.tr}`} >
                {Object.values(row).map((td,i)=>getTableData(td,i))}
            </tr>
        )
    }

    const getTableData = (value,key)=>{
        return(
            <td key={key} className={`${style.td} ${style.cell}`}>{value}</td>
        )
    }
    
    return(
        <table className={`${style.table}`}>
            <thead className={`${style.thead}`} >
                {fields.map((field,i)=>getTableHeading(field,i))}
            </thead>
            <tbody  className={`${style.tbody}`} >
                {rows.map((row,i)=>getTableRow(row,i))}
            </tbody>
        </table>

    )
}

export default dataTable;