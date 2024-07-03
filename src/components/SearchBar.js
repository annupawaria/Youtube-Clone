import React, { useState } from 'react'
import { Box, IconButton } from "@mui/material"
import Search from "@mui/icons-material/Search"

const SearchBar = () => {
  const[searchTerm,setSearchTerm]=useState("")

const handleSubmit(()=>{
e.preventDefault()
})

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          mr:{sm:5}
        }}>
 <input type="Text" placeholder="search......"  style={{height:"33px",width:"300px",borderRadius:"22px",fontWeight:"bold",fontSize:"15px",border:"none"}}  className='search-bar' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
 <IconButton type="submit" sx={{p:"10px",color:"red"}}>
  <Search/>
 </IconButton>
 </Box>
    </form>

  )
}

export default SearchBar