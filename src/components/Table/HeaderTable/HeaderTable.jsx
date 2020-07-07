import React from 'react'
import style from './HeaderTable.module.css'

/* 
    функция-компонент, ШАПКА таблицы
    Принимает:
    namesСolumns - массив со значениями для шапки таблицы
    Возвращает - шапку таблицы (jsx)
*/
export function HeaderTable({namesСolumns}) {
let nameColum = namesСolumns.map((value, index) => {return <th>{value.title}</th>})
  return (
    <tr className={style.header}>
      {nameColum}
    </tr>
  )
}