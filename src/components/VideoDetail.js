import React from 'react'
import { useState,useEffect } from 'react'
import{Link,useParams} from 'react-router-dom'
import {Typography,Box,Stack} from '@mui/material';
import {CheckCircle} from "@mui/material"
import {Video} from './'
import{fetchFromAPI} from '../utils/fetchFromAPI'
import ReactPlayer from 'react-player';

const VideoDetail = () => {
  const[VideoDetail,setVideoDetail]=useState(null)
  const{id} =useParams();
  useEffect(()=>{
    fetchFromAPI(`video?part=snippet,statistics&id=${id}`).then((data)=>setVideoDetail(data.items[0]));
  },[id])
  return (
    <Box minHeight="95vh">
<Stack direction={{xs:'column',md:"row"}}>
  <Box flex={1}>
    <Box sx={{width:'100%',position:'sticky'}}>
    <ReactPlayer url={`https://www.youtube.com/wach?v=${id}`}/>
    </Box>
  </Box>




</Stack>



    </Box>
  )
}

export default VideoDetail