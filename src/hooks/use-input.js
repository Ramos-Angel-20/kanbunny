import { useState } from 'react';

const useInput = (validationCb) => {

    const [ inputValue, setInputValue ] = useState('');
    const [ wasTouched, setWasTouched ] = useState(false);

    const isValid = validationCb(inputValue);
    const hasError = !isValid && wasTouched;

    const inputChangeHandler = e => {
        setInputValue(e.target.value);
    }

    const inputBlurHandler = () => {
        setWasTouched(true);
    }

    const inputResetHandler = () => {
        setInputValue('');
        setWasTouched(false);
    }

    return {
        inputValue,
        hasError,
        isValid,
        inputChangeHandler,
        inputBlurHandler,
        inputResetHandler
    };
}

export default useInput;