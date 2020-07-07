import React from 'react';
import { Select } from 'antd';
import style from './SelectFilter.module.css'
import { Option } from 'antd/lib/mentions';
/* 
    функция-компонент, выпадающее "меню" 
    Принимает:
    arrForOption - массив данных для отображения списка
    onChange - выполняющаяся функция при внесение изменений пользователем
    text - текст заглавия
    value - значение (активное значение)
    valueChecked - значение, необходимо для ограничения при формирование выпадающего списка
    Возвращает jsx
*/
export function SelectFilter(props) {
    const {arrForOption, onChange, text, value, valueChecked} = props;
    let options;
    if (valueChecked === 'title') {
        options = <Option value='contains'>Содержит</Option>
    } else {
        options = arrForOption.map((value, index) => { 
            if (value.disable) {return} 
            return <Option key={index} value={value.value}>{value.title}</Option>
        })
    }
    return (
        <div className={style.container}>
            <div>{text}</div>
            <Select 
                value={value}
                style={{ width: "100%" }}
                onChange={onChange}
            >
                <Select.Option>{options}</Select.Option>
            </Select>
        </div>
    )
}