import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuthContextProvider from './AuthContextProvider'
import Deep from './Deep'
import Display from './Display'
import SignInButton from './SignInButton'

function App() {
  return (
    <AuthContextProvider>
      <h1>React Context</h1>
      <SignInButton />
      <Display />
      <Deep />
    </AuthContextProvider>
  )
}

export default App
