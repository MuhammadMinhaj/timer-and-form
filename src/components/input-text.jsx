import React from 'react'

const InputText = props => {
    return (
        <div className="form-wrapper">
            <label htmlFor={props.name}>{props.label}</label>
            <input type="text" className="fields" value={props.value} name={props.name} id={props.name} onChange={props.changeHandler}/>
            {props.error?<div className="invalid-text">{props.error}</div>:''}
        </div>

    )
}

export default InputText