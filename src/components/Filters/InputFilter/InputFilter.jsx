import React from 'react'
import { Input } from 'antd'
import style from './InputFilter.module.css'

/* 
    функция-компонент, инпут 
    Принимает:
    text - текст заглавия
    value - значение инпута
    onChange - выполняющаяся функция при внесение изменений пользователем
    Возвращает (jsx)
*/
export function InputFilter (props) {
    const {
        text,
        value,
        onChange
    } = props;
    return (
        <div className={style.container}>
            <div>{text}</div>
            <Input 
                style={{ width: "100%" }}
                onChange={(e) => onChange(e.target.value)}
                value={value}
            />
        </div>
    )
}