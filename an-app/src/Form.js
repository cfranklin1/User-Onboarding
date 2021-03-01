import React from 'react'

export default function Form(props)   {
    const { values, submit, change, disabled} = props    

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
           <h3>sign in</h3>
            <div className='form-inputs'>
                <label>Name
                    <input name='name' 
                        type='text' 
                        value={values.username} 
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
                        /> 
                </label><br/>
                <label>Terms of Service
                    <input name='termsofservice' 
                        type='checkbox' 
                        checked={values.termsofservice}
                        onChange={onChange} 
                        />
                
                </label><br/>

                <label>
                    <button disabled ={ disabled }>submit</button>
                </label>
            </div>
        </form>
    )

}