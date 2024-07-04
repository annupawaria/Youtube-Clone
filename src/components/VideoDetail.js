import React, { useEffect, useState } from 'react'
import { useParams,Link} from "react-router-dom";
import { Box,Typography,Stack } from "@mui/material";
import ReactPlayer from "react-player"

import { Videos} from "./";
import  fetchFromAPI  from "../utils/fetchFromAPI";
import { CheckCircle, CottageSharp } from '@mui/icons-material';
import { demoChannelTitle } from '../utils/constants';

const VideoDetail = () => {

  const[videoDetail,setVideoDetail]=useState(null)
  const{id}=useParams();

  useEffect(()=>{
fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data)=>setVideoDetail(data.items[0]));
  },[id])
  if (!videoDetail?.snippet) return <div>Loading...</div>;

  const {snippet:{title,channelId,channelTitle},statictics:{viewCount,likeCount}}=videoDetail
  return (
    <Box minHeight="95vh">
      <Stack direction={{xs:"column",md:"row"}}>
        <Box flex={1}>
          <Box sx={{width:"100%",position:"sticky",top:"86px"}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
            <Typography>
             {title} 
            </Typography>
            <Stack direction="row " justifyContnet="space-between"  sx={{color:"red"}} px={2} py={1}>
<Link to={`/channel/${channelId}`}>
<Typography variant={{sm:"subtitl"}}>{channelTitle}</Typography>
</Link>

            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail