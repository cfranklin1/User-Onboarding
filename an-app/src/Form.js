import React from 'react'

export default function Form(props)   {
    const { values, submit, change} = props    

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }

    const onChange = e => {
        const {name, value} = e.target
        change(name, value)
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-inputs'>
                <label>Name
                    <input name='name' 
                        type='text' 
                        value={values.name} 
                        onChange={onChange} 
                        placeholder='your name..' 
                        maxLength='25'
                        />
                </label><br/>
                <label>Email
                    <input name='email' 
                        type='email' 
                        value={values.email} 
                        onChange={onChange} 
                        placeholder='name@email.com'
                        />
                </label><br/>
                <label>Password
                    <input name='pasword' 
                        type='password' 
                        onChange={onChange}
                        placeholder='********'
                        minLength='8' 
                        requiered /> 
                </label><br/>
                <label>Terms of Service
                    <input name='termsofservice' 
                        type='checkbox' 
                        checked={values.termsofservice}
                        onChange={onChange} 
                        />
                
                </label><br/>

                <label>
                    <input type='submit' 
                        onSubmit={onSubmit} 
                        disabled ={!values.name || !values.email } />
                </label>
            </div>
        </form>
    )

}