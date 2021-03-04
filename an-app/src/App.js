import Form from './Form';
import User from './User';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled, {createGlobalStyle, css} from 'styled-components';

const StyledHeader = styled.h1`
 font-size: 1.2em;
 text-decoration: underline;
 display: flex;
 justify-content: center;
 margin: 0 auto;
`



const initialValues = {
  username: '',
  email: '',
  password: '',
  termsofservice: false,
}
const initialErrors = {
  username: '',
  email: '',
  password: '',
}




function App() {
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState(initialErrors)
  
  
  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
       setUsers([res.data])
      })
      .catch(err => {
        console.log(err)
      })
    }

    const postNewUser = newUser => {
      axios.post('https://reqres.in/api/users', newUser)
        .then(res => {
          setUsers([res.data, ...users])
        })
        .catch(err => {
          console.log(err)
        })
        setFormValues(initialValues)
        setUsers([...users, newUser])
    }


  const changeInput = (name, value) => {
    setFormValues({
      ...formValues, [name]: value
    })
  }
  const submitForm = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),

    } 
    
    if (!newUser.username || !newUser.email || !newUser.password) {
      return;
    }
    postNewUser(newUser);
    
  }
  
  useEffect(() => {
    getUsers()
  }, [])

 

  return (
    <div className="App">
      <StyledHeader><h1>An App</h1></StyledHeader>
      
      <Form 
        users={users}
        values={formValues}
        submit={submitForm}
        change={changeInput}
        errors={formErrors}
      />

      {
        users.map(user => {
          return(
            <User key={user.id} user={user} />
          )
        })
      }

    </div>
  );
}

export default App;
