import React from 'react'
import styled, {createGlobalStyle, css} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;        
        background: linear-gradient(to top, #000, #fff);

    }
    body {
        font-family: monospace;
        height: 100%;
        margin: 0 auto;
        color: #000;
    }
`;

const sharedStyles = css`
    background-color: #eee;
    height: 4em;
    border-radius: .5em;
    border: 1px solid #D64161;
    margin: 1em 0 2em 0;
    padding: 1em;
    box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 ;
`;

const StyledForm = styled.form`
    color: whitesmoke;
    font-size: 1.2em;
    width: 100%;
    max-width: 70em;
    padding: 4em;
    background-color: #000;
    border-radius: 1em;
    box-sizing: border-box;
    box-shadow: 0 0 10em 0 #fff;
    margin: 0; 

    h3{
        display: flex;
        justify-content: center;
    }

`;
const StyledFieldset = styled.fieldset`
    display: flex;
    justify-content: center;
    border: 1px solid #fff;
    border-radius: .5em;
    padding: 1em;
    margin: 2em 0;
    color: #fff;
    :hover, :hover a {
        border: 1px solid #D64161;
        color: #fff;
    }
    label a{
        color: blue;
    }
    
    input {
        
        margin-left: 1em;
    }
`;
const StyledInput = styled.input`
    display: block;
    width: 100%;
    ${sharedStyles}
    :hover {
        border: .2em solid #FF7B25;
    }
`;

const StyledButton = styled.button`
    display: inline-block;
    align-items: center;
    background-color: #fff;
    color: #D64161;
    font-size: 1rem;
    border: 0;
    border-radius: .5em;
    height: 2em;
    padding: 0 2em;
    cursor: pointer;
    box-sizing: border-box;
    
    :hover {
        background-color: #0A1172;
        color: #fff;
        font-weight: bold;
        text-transform: uppercase; 
    }
`;




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
       <>
        <GlobalStyle />
        <StyledFormWrapper>
            <StyledForm onSubmit={onSubmit}>
                <h3>sign in</h3>
            
                <label>Name
                    <StyledInput name='username' 
                        type='text' 
                        value={values.username} 
                        onChange={onChange} 
                        placeholder='your name..' 
                        maxLength='25'
                        />
                </label>
                <label>Email
                    <StyledInput name='email' 
                        type='email' 
                        value={values.email} 
                        onChange={onChange} 
                        placeholder='name@email.com'
                        />
                </label>
                <label>Password
                    <StyledInput name='password' 
                        type='password'
                        value={values.password} 
                        onChange={onChange}
                        placeholder='********'
                        minLength='8' 
                        /> 
                </label>
                <StyledFieldset>
                <label><a href='#'>Terms of Service</a>
                    <input name='termsofservice' 
                        type='checkbox' 
                        checked={values.termsofservice}
                        onChange={onChange} 
                        />
                
                </label>
                </StyledFieldset>

                <label>
                    <StyledButton type='submit'>enter</StyledButton>
                </label>
                
            
            </StyledForm>
            </StyledFormWrapper>
        </>
    )

}