import React, { useReducer } from 'react'
import { initialState } from '../consts/conts';
import { Sub } from '../interfaces/Interfaces';
import FormReducer from '../reducer/FormReducer';
interface FormProps{
    onNewSub: (newSub:Sub) => void;
}
const Form=({onNewSub}:FormProps) =>{

    // const [inputValues, setInputValues] = useState<FormState["newSubs"]>(initialState);
    const [inputValues, dispatch] = useReducer(FormReducer, initialState);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNewSub(inputValues);
        handleClear();
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        dispatch({
            type: "change_value",
            payload: {
                inputName: name,
                inputValue: value
            }
        })
    }

    const handleClear = () => {
        dispatch({ type: "clear" });
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