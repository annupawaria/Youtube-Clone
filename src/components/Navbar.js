import React from 'react'
import {Stack,Box} from "@mui/material"
import { logo } from '../utils/constants'
import {Link} from "react-router-dom"
import SearchBar from './SearchFeed1js'


const Navbar = () => {
  return (
    <Box direction="row" sx={{height:"20vh",display:'flex',flexDirection:"row",justifyItems:"cenetr",alignItems:'center',justifyContent:'space-between',position:"sticky"}}>
<Link to="/">
  <img src={logo} style={{height:"66px",width:"66px"}}/>
</Link>
<SearchBar/>
    </Box>
  )
}

export default Navbar