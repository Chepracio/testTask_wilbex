import axios from "axios";
/* 
    Функция делает axios запрос к php 
    method - GET 
    Данные:
    activePage - активная страница
    valueColumn - значение колонки по которой будет происходить фильтрация
    valueСonditions - значение условия фильтрации
    filtrationValues - значиние фильтрации
    count - количество строк на странице

    setValue - устанавливает значение данных для таблици (хук с App.jsx)
    setCount - устанавливает количество страниц (хук с App.jsx)
*/
export function getData (setValue, setCount, activePage, valueColumn, valueСonditions, filtrationValues, count=20) {
    let arr = {
        activePage: activePage,
        valueColumn: valueColumn,
        valueСonditions: valueСonditions,
        filtrationValues: filtrationValues,
        count: count,
    }
    let newArr = Object.keys(arr).map(key => key + '=' + arr[key]).join('&')
    
    axios.get(`https://app7.vk-irs.ru/php/index.php?${newArr}`)
    .then(res => {
        setValue(res.data.data);
        setCount(Math.ceil(res.data.count/count));
    })
}