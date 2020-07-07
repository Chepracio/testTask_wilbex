import React from 'react';
import { Select } from 'antd';
import style from './SelectFilter.module.css'
import { Option } from 'antd/lib/mentions';

export function SelectFilter(props) {
    const {arrForOption, onChange, text, value} = props
    const options = arrForOption.map((value, index) => {if (value.disable) {return} return <Option key={index} value={value.value}>{value.title}</Option>})
    return (
        <div className={style.container}>
            <div>{text}</div>
            <Select 
                value={value}
                style={{ width: "100%" }}
                onChange={onChange}
            >
                {options}
            </Select>
        </div>
    )
}