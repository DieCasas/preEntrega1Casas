import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'

function App() {
  return (
    <ChakraProvider className='.body'>
      <ItemListContainer greeting='Comiditas' />
      <NavBar />
    </ChakraProvider>
  )
}

export default App
