import React from 'react'
import style from './Rows.module.css'
/* 
    функция-компонент, СТРОКИ 
    Принимает:
    dataTable - данные о таблице
    Возврщает: строки таблицы (jsx)
*/
export function Rows ({dataTable}) {
  const row = dataTable.map((value, index) => {
    let date = new Date(Number(value.date_unix)*1000)
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate() 
    return (
      <tr key={index} className={style.row}>
        <th>{`${day}.${month}.${year}`}</th>
        <th>{value.title}</th>
        <th>{value.count}</th>
        <th>{value.distance}</th>
      </tr>
    )})

  return (
      <tbody>{row}</tbody>
  )
}