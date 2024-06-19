import React from 'react'
import { useState,useEffect } from 'react'
import {Stack,Box,Typography} from "@mui/material"
import Sidebar from './Sidebar'
import Videos from  './Videos'

const Feed = () => {
  return (
    <Stack sx={{flexDirection:{sx:"coloum",md:"row"}}}
    >
      <Box sx={{height:{sx:'auto',md:"92vh"},borderRight:"1px solid grey", px:{sx:0,md:2}}}>
        <Sidebar/>
        <Typography className="copyright" variant="body2" sx={{mt:1.5,color:"white"}}>
          Copyright 2022 JSM Media
        </Typography>
</Box>
<Box p={2} sx={{overflow:'auto',height:'90vh',flex:2}}>
  <Typography variant="h4"fontWeight="bold" color="white" mb={2} >
   New <span style={{color:"red"}}> Videos</span> 
  </Typography>
  <Videos videos={[]}/>

</Box>


    </Stack>
  )
}

export default Feed