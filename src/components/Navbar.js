import React from 'react'
import {Stack,Box} from "@mui/material"
import { logo } from '../utils/constants'
import {Link} from "react-router-dom"


const Navbar = () => {
  return (
    <Box direction="row" sx={{height:"20vh",display:'flex',flexDirection:"row",justifyItems:"cenetr",alignItems:'center',justifyContent:'space-between',position:"sticky"}}>
<Link to="/">
  <img src={logo} style={{height:"66px",width:"66px"}}/>
</Link>
<Box>
<input type="text" placeholder="serach......" style={{borderRadius:"44px",height:"44px",width:"366px",fontSize:"22px",justifyItems:"cenetr",alignItems:'center',}}/>

</Box>

    </Box>
  )
}

export default Navbar