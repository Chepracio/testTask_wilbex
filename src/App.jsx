import React, { useState, useEffect } from 'react';
import style from './App.module.css';
import 'antd/dist/antd.css';
import { Header } from './components/Header/Header';
import { Filters } from './components/Filters/Filters';
import { getData } from './modules/getData';
import { Table } from './components/Table/Table';

// Массив со значениями для условий фильтрации
const arrСonditions = [
  {title: 'Равно', value: 'equally'}, 
  {title: 'Содержит', value: 'contains'}, 
  {title: 'Больше', value: 'more'}, 
  {title: 'Меньше', value: 'less'},
];

// Массив со значениями для шапки таблицы
const namesСolumns = [
  {title: 'Дата', value: 'date', disable: true}, 
  {title: 'Название', value: 'title'}, 
  {title: 'Количество', value: 'count'}, 
  {title: 'Расстояние', value: 'distance'},
];

function App() {
  // инициализация локального стейта
  const [dataTable, setDataTable] = useState(false); // Данные для таблицы
  const [valueColumn, setValueColum] = useState('title'); // Значение "Колонка фильтрации"
  const [valueСonditions, setValueСonditions] = useState('contains'); // Значение "Условия фильтрации"
  const [filtrationValues, setFiltrationValues] = useState(''); // Значение фильтрации 
  const [countPage, setCounPage] = useState(''); // Количество страниц
  const [activePage, setActivePage] = useState(1) // Активная страница
  useEffect(() => { // при измененеие активной страници делает запрос к БД и полуаем данные следующей страницы
    setDataTable(false);
    getData(setDataTable, setCounPage, activePage, valueColumn, valueСonditions, filtrationValues)
  }, [ activePage ])
  useEffect(() => { // при изменение любых значений фильтров делаем запрос с новыми параметрами
    setDataTable(false); // сбрасываем данные таблици, чтобы отобразить Loading
    setActivePage(1); // устанавливаем активную страницу 1
    getData(setDataTable, setCounPage, activePage, valueColumn, valueСonditions, filtrationValues); // заполс на получение данных таблицы
  }, [ valueColumn, valueСonditions, filtrationValues ])
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
