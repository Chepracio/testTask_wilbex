import React, { useState, useEffect } from 'react';
import style from './App.module.css';
import 'antd/dist/antd.css';
import { Header } from './components/Header/Header';
import { Filters } from './components/Filters/Filters';
import { getData } from './modules/getData';
import { Table } from './components/Table/Table';

const arrСonditions = [
  {title: 'Равно', value: 'equally'}, 
  {title: 'Содержит', value: 'contains'}, 
  {title: 'Больше', value: 'more'}, 
  {title: 'Меньше', value: 'less'},
];

const namesСolumns = [
  {title: 'Дата', value: 'date', disable: true}, 
  {title: 'Название', value: 'title'}, 
  {title: 'Количество', value: 'count'}, 
  {title: 'Расстояние', value: 'distance'},
];

function App() {
  // инициализация локального стейта для бд
  const [dataTable, setDataTable] = useState(false); // Данные для таблицы
  const [valueColumn, setValueColum] = useState('title'); // Значение "Колонка фильтрации"
  const [valueСonditions, setValueСonditions] = useState('contains'); // Значение "Условия фильтрации"
  const [filtrationValues, setFiltrationValues] = useState('');
  const [countPage, setCounPage] = useState('');
  const [activePage, setActivePage] = useState(1)
  useEffect(() => { 
    setDataTable(false);
      getData(setDataTable, setCounPage, activePage, valueColumn, valueСonditions, filtrationValues)
  }, [ activePage ])
  useEffect(() => { 
    setDataTable(false);
    setActivePage(1);
    getData(setDataTable, setCounPage, activePage, valueColumn, valueСonditions, filtrationValues)
  }, [ filtrationValues ])
  return (
    <div className={style.container}>
      <Header 
        title='Single Page Application'
      />
      <Filters 
        namesСolumns={namesСolumns}
        arrСonditions={arrСonditions}
        valueСonditions={valueСonditions}
        setValueСonditions={setValueСonditions}
        valueColumn={valueColumn}
        setValueColum={setValueColum}
        filtrationValues={filtrationValues}
        setFiltrationValues={setFiltrationValues}
      />

      <Table 
        dataTable={dataTable}
        namesСolumns={namesСolumns}
        countPage={countPage}
        setActivePage={setActivePage}
      />

    </div>
  );
}

export default App;
