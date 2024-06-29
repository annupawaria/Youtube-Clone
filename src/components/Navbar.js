import React from 'react'
import {Stack,Box} from "@mui/material"
import { logo } from '../utils/constants'
import {Link} from "react-router-dom"
import SearchBar from './SearchBar'


const Navbar = () => {
  return (
    <Stack  direction="row" alignItems="center" p={2}   sx={{flexDirection:"row",position:'sticky', top:"0",justifyContent:"space-between"}}>
    <Link to="/">
      <img src={logo} height={43} />
    </Link>
    <SearchBar/>





    </Stack>
  )
}

export default Navbar