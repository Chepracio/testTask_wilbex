import React from 'react'
import { SelectFilter } from './SelectFilter/SelectFilter'
import style from './Filters.module.css'
import { InputFilter } from './InputFilter/InputFilter'
/* 
    функция-компонент, Фильтр 
    Принимает:
    filtrationValues, setFiltrationValues, - значение фильтрации + функция для изменнеия
    valueСonditions, setValueСonditions, - значение условий фильрации
    valueColumn, setValueColum, - значение по каким данным фильтровать 
    arrСonditions - массив с условиями
    namesСolumns - массив со значениями для шапки таблицы
    Возвращает компонет фильтрации (jsx)
*/
export function Filters(props) {
    const {
        filtrationValues, setFiltrationValues,
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
                valueChecked={valueColumn}
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