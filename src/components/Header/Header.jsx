import React from 'react'
import style from './Header.module.css'

/* 
    функция-компонент, ШАПКА 
    Принимает:
    title - текст заглавия
    Возвращает jsx
*/
export function Header({title}) {
    return <h1 className={style.header}>{title}</h1>
}