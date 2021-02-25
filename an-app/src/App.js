import logo from './logo.svg';
import './App.css';
import Form from './Form';
import axios from 'axios';
import { useEffect, useState } from 'react';

const initialValues = {
  name: '',
  email: '',
  password: '',
  termsofservice: false,
}
const initialErrors = {
  name: '',
  email: '',
  password: '',
}

const initialUsers = []
const initialDisabled = true



function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  
  const changeInput = (name, value) => {
    setFormValues({
      ...formValues, [name]: value
    })
  }
  const submitForm = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),

    }
  }

  const getUsers = () => {
    axios.post(`https://reqres.in/api/users`)
      .then(res => {
       setUsers([...users, res.data])
       setFormValues(initialValues)
       setFormErrors(initialErrors)
       setDisabled(initialDisabled)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getUsers()
  }, [])



  return (
    <div className="App">
      <Form 
        values={formValues}
        submit={submitForm}
        change={changeInput}
        disabled={disabled}
        errors={formErrors}
      />

    </div>
  );
}

export default App;
