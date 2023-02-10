import { useReducer } from 'react';

const initialInputState = {
    value: '',
    isTouched: false,
};

const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return { value: action.value, isTouched: state.isTouched };
    }
    if (action.type === 'BLUR') {
        return { value: state.value, isTouched: true };
    }
    if (action.type === 'RESET') {
        return {
            value: '',
            isTouched: false,
        };
    }
    return initialInputState;
};

const useInput = (validationValue) => {
    const [inputState, dispatch] = useReducer(
        inputStateReducer,
        initialInputState
    );

    const valueIsValid = validationValue(inputState.value); // true = valid // "" = false = invalid
    const hasError = !valueIsValid && inputState.isTouched;
    // console.log(`inputState.value ${inputState.value}`); // ""
    // console.log(`valueIsValid ${valueIsValid}`); //if  "" -> false
    // console.log(`!valueIsValid ${!valueIsValid}`); //if  "" -> false
    // console.log(`inputState.isTouched ${inputState.isTouched}`); // false
    // console.log(`hasError ${hasError}`);

    const valueChangeHandler = (e) => {
        dispatch({ type: 'INPUT', value: e.target.value });
    };

    const inputBlurHandler = (e) => {
        dispatch({ type: 'BLUR' });
    };

    const reset = () => {
        dispatch({ type: 'RESET' });
    };

    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    };
};

export default useInput;
