import React from 'react'
import { Box, IconButton } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

const SearchBar = () => {
  return (
    <Box>  
 <input type="Text" placeholder="search......"  style={{height:"33px",width:"300px",borderRadius:"22px",fontWeight:"bold",fontSize:"15px",border:"none",}}/>
    </Box>

  )
}

export default SearchBar