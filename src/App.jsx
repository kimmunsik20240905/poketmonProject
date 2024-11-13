import { useState } from 'react'
import './App.css'
import Router from './shared/Router'
import { PokemonProvider } from './context/PokemonContext'

function App() {
  return (
    <>
      <PokemonProvider>
        <Router />
      </PokemonProvider>
    </>
  )
}

export default App
