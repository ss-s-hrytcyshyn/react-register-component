import React from 'react';

const Input = (props) => {
    return (
        <>
            <input
                id={props.name}
                className="form-input"
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
            />
        </>
    );
}

export default Input;