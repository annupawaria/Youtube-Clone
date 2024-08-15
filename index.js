import React, { useEffect, useState } from 'react'
import { useParams,Link} from "react-router-dom";
import { Box,Typography,Stack } from "@mui/material";
import ReactPlayer from "react-player"

import { Videos} from "./";
import  fetchFromAPI  from "../utils/fetchFromAPI";
import { CheckCircle, CottageSharp, SignalCellularNullOutlined } from '@mui/icons-material';
import { demoChannelTitle } from '../utils/constants';

const VideoDetail = () => {

  const [videos,setVideos]=useState(null)
const[videoDetail,setVideoDetail]=useState(null)
  const{id}=useParams();

  useEffect(()=>{
fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data)=>setVideoDetail(data.items[0]));

fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
.then((data) => setVideos(data.items))
  },[id])
  if (!videoDetail?.snippet) return <div>Loading...</div>;

  const {snippet:{title,channelId,channelTitle},statistics:{viewCount,likeCount}}=videoDetail
  
  return (
    <Box minHeight="95vh">
      <Stack direction={{xs:"column",md:"row"}}>
        <Box flex={1}>
          <Box sx={{width:"100%",position:"sticky",top:"86px"}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
            <Typography color="white" variant='h5'  fontWeight='bold' p={2}>
             {title} 
            </Typography>
            <Stack direction="row " justifyContnet="space-between"  sx={{color:"white"}} px={2} py={1}>
<Link to={`/channel/${channelId}`}>
<Typography variant={{sm:"subtitle1",md:"h6"}} color="gray">{channelTitle}</Typography>
<CheckCircle sx={{ color: "lightgray", fontSize: "18px", ml: 2, mt: 1 }} />
</Link>
<Stack direction="row " gap='20px' alignItems="center" justifyContent='space-between'>
  <Typography variant="body1" sx={{opacity:0.7}}>
{parseInt(viewCount).toLocaleString()}views
  </Typography>
  <Typography  variant="body1" sx={{opacity:0.7}}>
  {parseInt(likeCount).toLocaleString()}likes
  </Typography>
</Stack>

            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md:1,xs:5}} justifyContent="center"alignItem="center">
        <Videos  videos={videos} direction="column"/>

      </Box>
      
      </Stack>
      
    </Box>
  )
}

export default VideoDetail