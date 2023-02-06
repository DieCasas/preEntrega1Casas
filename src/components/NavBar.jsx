import React from 'react'
import { Flex, Spacer, Button, ButtonGroup, Heading, Box } from '@chakra-ui/react'  
import CartWidget from './CartWidget'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import logo from '../assets/logobur.jpeg'


const NavBar = () => {
  return (  
    <Flex minWidth='max-content' alignItems='center' gap='2' className='navBar' >
      <Box p='2'>     
        <Heading size='md' className='presentacion'>E-Commerce Hambur</Heading>
      </Box>
      <Box p='2'>
        <img src={logo} className='logo' alt="" />
      </Box>
      <Spacer />
      <ButtonGroup gap='2'>
        <Menu>
          <MenuButton colorScheme='brown' as={Button} rightIcon={<ChevronDownIcon />}>
            Tradicionales
          </MenuButton>
          <MenuList>
            <MenuItem >Milangas</MenuItem>
            <MenuItem >Hamburguesas</MenuItem>
          </MenuList>
        </Menu>
          <Button colorScheme='brown'>Veggie</Button>
          
          <Button colorScheme='brown'>Nosotros</Button>
          <CartWidget />
      </ButtonGroup>
  </Flex>
  )
}

export default NavBar