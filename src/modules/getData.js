import axios from "axios";

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