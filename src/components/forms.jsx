import React from 'react'

import InputText from './input-text'

const Forms = ({values,changeHandler,submitHandler,errors}) =>{
    return (
        <form onSubmit={submitHandler}>
            <InputText
                label="Name"
                value={values.name}
                name="name"
                changeHandler={changeHandler}
                error={errors.name}
            />

            <InputText
                label="Email"
                value={values.email}
                name="email"
                changeHandler={changeHandler}
                error={errors.email}
            />

            <InputText
                label="Phone"
                value={values.phone}
                name="phone"
                changeHandler={changeHandler}
                error={errors.phone}

            />

            <InputText 
                label="University"
                value={values.university}
                name="university"
                changeHandler={changeHandler}
                error={errors.university}

            />

            <InputText 
                label="Country"
                value={values.country}
                name="country"
                changeHandler={changeHandler}
                error={errors.country}

            />

            <button type='submit' className="btn">SINGUP</button>
        </form>
    )
} 

export default Forms