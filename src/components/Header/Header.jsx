import React from 'react'
import style from './Header.module.css'

export function Header({title}) {
    return <h1 className={style.header}>{title}</h1>
}