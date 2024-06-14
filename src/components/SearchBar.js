import React from 'react'
import {Stack,Box,IconButton} from "@mui/material" 
import {Search} from "@mui/icons-material"



const SearchBar = () => {
  return (
    <Stack>
<input className='search-bar'
placeholder='search.....'
value="" style={{height:'42px',borderRadius:'20px',
  border:'1px solid red'
}}
/>
<IconButton>
  <Search/>
</IconButton>
 
    </Stack>
  )
}

export default SearchBar