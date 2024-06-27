import React from 'react'
import { Box, IconButton } from "@mui/material"
import {SearchIcon} from "@mui/icons-material/Search"

const SearchBar = () => {
  return (
    <Box>
<input type="text" placeholder="serach......" style={{borderRadius:"44px",height:"44px",width:"366px",fontSize:"22px",justifyItems:"cenetr",alignItems:'center',}}/>
<IconButton>
  <SearchIcon/>
</IconButton>
</Box>

  )
}

export default SearchBar