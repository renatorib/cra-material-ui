import React from 'react'
import { Link } from 'react-router-dom'

import TextField from 'material-ui/TextField'
import { Formik } from 'formik'

const initialValues = {
  login: '',
  password: '',
}

const onSubmit = props => (values, { setSubmitting, setFieldError }) => {
  setSubmitting(true)

  if (values.login === 'renato' && values.password === 'ribeiro') {
    localStorage.setItem('user', JSON.stringify({ name: 'Renato Ribeiro' }))
    props.history.push('/')
  } else {
    setFieldError('password', 'Login ou senha inválidos')
  }

  setSubmitting(false)
}

const Login = ({ history }) => (
  <Formik initialValues={initialValues} onSubmit={onSubmit({ history })}>
    {({ values, errors, handleChange, handleBlur, handleSubmit }) => {
      const bind = fieldName => ({
        onChange: handleChange,
        onBlur: handleBlur,
        value: values[fieldName],
        name: fieldName,
      })

      return (
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <pre>{JSON.stringify(values, null, 2)}</pre>
          <div>
            <TextField {...bind('login')} label="Login" />
          </div>
          <div>
            <TextField {...bind('password')} label="Senha" type="password" />
            {errors.password && errors.password}
          </div>
          <button>Entr</button>
        </form>
      )
    }}
  </Formik>
)

export default Login
