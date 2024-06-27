import React from 'react'
import {Box,Stack,Typoghraphy} from "@mui/material"
import { categories } from '../utils/constants'

const Sidebar = () => {
  return (
    <Stack >
{categories.map((category)=>(
  <button>
<span>{category.name}</span>
<span>{category.icon}</span>
</button>
  
))}


    </Stack>
  )
}

export default Sidebar