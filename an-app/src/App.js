import './App.css';
import Form from './Form';
import User from './User';
import axios from 'axios';
import { useEffect, useState } from 'react';

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

const initialDisabled = true



function App() {
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  
  
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

    }


  const changeInput = (name, value) => {
    setFormValues({
      ...formValues, [name]: value
    })
  }
  const submitForm = () => {
    const newUser = {
      username: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),

    }
    postNewUser()
  }
  
  useEffect(() => {
    getUsers()
  }, [])



  return (
    <div className="App">
      <h1>An App</h1>
      <Form 
        values={formValues}
        submit={submitForm}
        change={changeInput}
        disabled={disabled}
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
