import React from 'react';
import { Rows } from './Rows/Rows';
import { HeaderTable } from './HeaderTable/HeaderTable';
import style from './Table.module.css'
import Pagination from './Pagination/Pagination';
/* 
    функция-компонент, СТРОКИ 
    Принимает:
    dataTable - данные о таблице
    namesСolumns - массив со значениями для шапки таблицы
    countPage - количество страниц 
    setActivePage - функция для изменения активной страницы
    Возврщает: строки таблицы (jsx)
*/
export function Table (props) {
  const {
    dataTable,
    namesСolumns,
    countPage,
    setActivePage,
  } = props;

  return (
    <div className={style.container}>
      {dataTable ? 
        <React.Fragment>
          <table border="1" className={style.table}>
            <HeaderTable 
              namesСolumns={namesСolumns}
            />
            <Rows
              dataTable={dataTable}
            />
          </table>
          <Pagination 
            countPage={countPage}
            setActivePage={setActivePage}
          />
        </React.Fragment>
      : <div>Loading...</div>}
    </div> 
  )
}