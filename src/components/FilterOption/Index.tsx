import React, { ChangeEventHandler } from 'react'
import './filterOption.scss'

type filter = {
    checkbox: boolean;
    onChecked: ChangeEventHandler<HTMLInputElement>;
    name: string;
    child: string;
};

const Index = ({ checkbox, onChecked, name, child }: filter) => {
  return (
    <div>
        <label className='box'>
        <input 
        type ='checkbox' 
        id='toggle'
        checked = {checkbox}
        onChange = {onChecked}
        name={name}
        />
        <span className="check"></span>
        </label>
        <p className='ml-8 text-small'>{child}</p>

    </div>
  )
}

export default Index
