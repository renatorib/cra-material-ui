import React from 'react'

const user = JSON.parse(localStorage.getItem('user'))

const logout = e => {
  e.preventDefault()
  localStorage.removeItem('user')
}

const Home = () => (
  <div>
    <div>
      <div>Bem vindo {user.name}</div>
      <a role="button" onClick={logout}>
        Sair
      </a>
    </div>
  </div>
)

export default Home
