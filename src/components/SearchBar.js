import React from 'react'
import { Box, IconButton } from "@mui/material"
import Search from "@mui/icons-material/Search"

const SearchBar = () => {
  return (
    <form onSubmit={()=>{}}>
      <Box sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          mr:{sm:5}
        }}>
 <input type="Text" placeholder="search......"  style={{height:"33px",width:"300px",borderRadius:"22px",fontWeight:"bold",fontSize:"15px",border:"none"}}  className='search-bar' value="" onChange={()=>{}}/>
 <IconButton type="submit" sx={{p:"10px",color:"red"}}>
  <Search/>
 </IconButton>
 </Box>
    </form>

  )
}

export default SearchBar