import React from 'react'
import styles from './Pagination.module.css'

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