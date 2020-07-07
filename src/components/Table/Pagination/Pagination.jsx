import React from 'react'
import styles from './Pagination.module.css'
/* 
    функция-компонент, пагинация 
    Принимает:
    countPage - количество страниц 
    setActivePage - функция для изменения активной страницы
    Возвращает: нумерацию страниц (jsx)
*/
export default function Pagination ({countPage, setActivePage}) {
    const numberesPages = [...Array(countPage)].map((value, index) => {
        return <div id={`page${index}`} onClick={(e) => {setActivePage(e.target.innerHTML);}} className={styles.element} key={index}>{index+1}</div>
      });
    return (
        <div className={styles.container}>
            {numberesPages}
        </div>
    )
}