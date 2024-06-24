import React, { useState } from 'react'
import {Stack,Box,IconButton} from "@mui/material" 
import {Search} from "@mui/icons-material"
import { Navigate, useNavigate } from 'react-router-dom'



const SearchBar = () => {
const[searchTerm,setSearchTerm]=useState("")
const Navigate=useNavigate();
const handleSubmit=(e)=>{
  e.preventDefault(e);
  if(searchTerm){
    Navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }
}
  return (
    <Stack onSubmit={handleSubmit}>
<input className='search-bar'
placeholder='Search.....'
value={searchTerm} style={{height:'42px',borderRadius:'20px',
  border:'1px solid red'
}
}
onChange={(e)=setSearchTerm(e.target.value)}
/>
<IconButton>
  <Search/>
</IconButton>
 
    </Stack>
  )
}

export default SearchBar