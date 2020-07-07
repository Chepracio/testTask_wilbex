import React from 'react'
import { SelectFilter } from './SelectFilter/SelectFilter'
import style from './Filters.module.css'
import { InputFilter } from './InputFilter/InputFilter'

export function Filters(props) {
    const {
        filtrationValues,
        setFiltrationValues,
        valueСonditions, setValueСonditions,
        valueColumn, setValueColum,
        arrСonditions,
        namesСolumns,
        
    } = props;
    return (
        <div className={style.container}>
            <SelectFilter 
                text='Колонка фильтрации'
                value={valueColumn}
                arrForOption={namesСolumns}
                onChange={setValueColum}
            />
            <SelectFilter 
                text='Условия фильтрации'
                value={valueСonditions}
                arrForOption={arrСonditions}
                onChange={setValueСonditions}
            />
            <InputFilter 
                text='Значения для фильтрации'
                value={filtrationValues}
                onChange={setFiltrationValues}
            />
        </div>
    )
}