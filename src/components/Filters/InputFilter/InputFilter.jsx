import React from 'react'
import { Input } from 'antd'
import style from './InputFilter.module.css'

export function InputFilter (props) {
    const {
        text,
        value,
        onChange
    } = props;
    return (
        <div className={style.container}>
            <div>{text}</div>
            <Input 
                style={{ width: "100%" }}
                onChange={(e) => onChange(e.target.value)}
                value={value}
            />
        </div>
    )
}