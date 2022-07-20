import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    Box,
    Text,
    IconButton,
  } from '@chakra-ui/react'
const Account = () => {
  return (
    <div>
  <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    variant='outline'
  ><i class="fa-solid fa-user"></i></MenuButton>
  <MenuList>
    <Box cursor='pointer' w='100%' borderBottom='1px' borderColor='#dd0285'>
        <Text fontSize='2xl'>Login</Text>
    </Box>
    <Box cursor='pointer' >
        <Text fontSize='2xl'>Register</Text>
    </Box>
  </MenuList>
</Menu>
    </div>
  )
}

export default Account