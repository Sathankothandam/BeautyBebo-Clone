import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    Box,
    Text,
    IconButton,
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Account = () => {
  return (
    <div>
  <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    variant='outline'
  ><i class="fa-solid fa-user" style={{color:'#dd0285'}}></i></MenuButton>
  <MenuList>
  <Link to='/login'>
    <Box cursor='pointer' w='100%' borderBottom='1px' borderColor='#dd0285'>
        <Text fontSize='2xl'>Login</Text>
    </Box>
    </Link>
    <Box cursor='pointer' >
        <Text fontSize='2xl'>Register</Text>
    </Box>
  </MenuList>
</Menu>
    </div>
  )
}

export default Account