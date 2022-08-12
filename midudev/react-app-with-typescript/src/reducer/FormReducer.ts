import { initialState } from "../consts/conts";
import { FormReducerAction, FormState } from "../interfaces/Interfaces";

const FormReducer = (state: FormState["newSubs"], action: FormReducerAction) => {
    switch (action.type) {
        case "change_value":
            const { inputName, inputValue } = action.payload;
            return {
                ...state,
                [inputName]: inputValue,
            }
        case "clear":
            return initialState;
    }
}

export default FormReducer;