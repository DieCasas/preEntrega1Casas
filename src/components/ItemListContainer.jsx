import React from 'react'
import { Heading } from '@chakra-ui/react'

const ItemListContainer = ({ greeting }) => {
  return (
    <div className='titulo'>
      <Heading size='lg' fontSize='50px' color='brown ' className='tituloPresentacion'>
          CASA DE COMIDAS
       </Heading>
      <h1 > {greeting} </h1>
        
    </div>
  )
}

export default ItemListContainer