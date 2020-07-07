import React from 'react'
import style from './HeaderTable.module.css'

export function HeaderTable({namesСolumns}) {
let nameColum = namesСolumns.map((value, index) => {return <th>{value.title}</th>})
  return (
    <tr className={style.header}>
      {nameColum}
    </tr>
  )
}