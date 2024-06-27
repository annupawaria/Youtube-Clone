import React from 'react'
import {Box,Stack,Typography} from "@mui/material"
import Sidebar from './Sidebar'

const Feed = () => {
  return (
    <Stack sx={{flexDirection:{sx:"column",md:"row"}}} >
      <Box sx={{height:{sx:"auto",md:"92vh"},ml:"40px",border:"2px solid white",px:{sx:0,md:2}}}><Sidebar/>
<Typography sx={{color:"white",fontWeight:"bold"}}>

</Typography>
</Box>Copyright 2022 JSM Media



    </Stack>
  )
}

export default Feed