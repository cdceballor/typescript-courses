import React, { useState } from 'react'
import { FormState, Sub } from '../interfaces/Interfaces';

const initialState = {
    nick: "",
    subMonths: 0,
    avatar: "",
    description: "",
}

interface FormProps{
    onNewSub: (newSub:Sub) => void;
}
const Form=({onNewSub}:FormProps) =>{

    const [inputValues, setInputValues] = useState<FormState["newSubs"]>(initialState);

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNewSub(inputValues);

    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder="Nick name" />
                <input onChange={handleChange} value={inputValues.subMonths} type="number" name="subMonths" placeholder="Sub months" />
                <input onChange={handleChange} value={inputValues.avatar} type="text" name="avatar" placeholder="Avatar" />
                <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder="description" />
            <button>Save new sub!</button>
            </form>
    </div>
  )
}

export default Form