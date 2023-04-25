import React, { useId } from 'react';
const InputAndLabel = (props) => {
    const id = useId();
    let inputElement;

    if(props.error === true) {
        inputElement = <>
            <input type={props.type} id={id} onChange={props.changeValue} value={props.value} placeholder={props.placeholderValue} className="inputComponent errorLine"/>
            <div className="errorText"> {props.errorText}</div>
        </>
    } else {
        inputElement = <input type={props.type} id={id} onChange={props.changeValue} value={props.value} placeholder={props.placeholderValue} className="inputComponent"/>
    }
    return <>
        <div className="inputBox">
            <label htmlFor={id} className="labelComponent">{props.labelValue}</label><br></br>
            {inputElement}
        </div>
    </>
};
export default InputAndLabel