import style from './style.module.css';
import filterFields from './filterFields';
import getFields from './getFields';
import getRows from './getRows';
import OptionButton from './optionButton';
import React from 'react';
const dataTable =  ({data,options,rowOnClick})=>{
    let {fields: optFields,exclude,actions,showOption} = options;
    let fields = getFields(data);
    fields = filterFields(fields,optFields,exclude);
    let rows = getRows(fields,data);
    if(showOption){
        fields.push('');
        rows.map(row=> row.dataTableOption = OptionButton);
    }
    const handleRowClick = (e,row)=>{
        if(rowOnClick) rowOnClick(e,row)
    }
    const getTableHeading = (field,key)=>{
        return(
            <th key={key} className={`${style.th} ${style.cell}`}>{field}</th>
        )
    }
    const getTableRow = (row,key)=>{
        return(
            <tr key={key} className={`${style.tr}`} >
                {Object.entries(row).map(([key,td],i)=> (getTableData(row,key,td,i)))}
            </tr>
        )
    }
    const getTableData = (row,name,Value,key)=>{
        if(name === 'dataTableOption'){
            return (
                <td  onClick={e=>handleRowClick(e,row)} key={key} className={`${style.td} ${style.cell}`}>
                    {actions.map(Component=> <Component/>)}
                    <OptionButton/>
                </td>
            )
        }else{
            return(
                <td key={key} className={`${style.td} ${style.cell}`}>{Value}</td>
            )
        }
    }
    return(
        <div className={style.wrapper}>
        <table className={`${style.table}`}>
            <thead className={`${style.thead}`} >
                <tr className={`${style.tr}`}>
                    {fields.map((field,i)=>getTableHeading(field,i))}
                </tr>
            </thead>
            <tbody  className={`${style.tbody}`} >
                {rows.map((row,i)=>getTableRow(row,i))}
            </tbody>
        </table>
        </div>

    )
}

export default dataTable;