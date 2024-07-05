import React, { useEffect, useState } from 'react'
import { useParams,Link} from "react-router-dom";
import { Box,Typography,Stack } from "@mui/material";
import ReactPlayer from "react-player"

import { Videos} from "./";
import  fetchFromAPI  from "../utils/fetchFromAPI";
import { CheckCircle, CottageSharp, SignalCellularNullOutlined } from '@mui/icons-material';
import { demoChannelTitle } from '../utils/constants';

const VideoDetail = () => {
  const[videoDetail,setVideoDetail]=useState(null);
  const[videos,setVideos]=useState(null)
  const {id}=useParams();

useEffect(()=>{
  fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data)=>setVideoDetail(data.items[0]));

  fetchFromAPI(`serach?part=snippet&relatedToVideo&id=${id}&  type=video`).then((data)=>setVideos(data.item));

},[id])
if (!videoDetail) return null;

 const{snippet:{title,channelId,channelTitle},statistics:{likeCount,viewCount}}=videoDetail;
  
  return (
    <Box minHeight="95vh"> 
    <Stack direction={{sx:'column',md:'row'}} >
    <Box flex={1}>
      <Box sx={{width:"100%",position:"sticky",top:"85px"}}>
<ReactPlayer  url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
<Typography color="white" variant="h5">
  {title}
</Typography>
<Stack>
  <Link to={`/channel/${channelId}`}>
  <Typography variant={{sm:"subtitle1",md:"h6"}} color="gray">
{channelTitle}
    
  </Typography>
  <CheckCircle sx={{ color: "lightgray", fontSize: "18px", ml: 2, mt: 1 }} />
  </Link>
  <Stack sx={{justifyContent:"space-between",direction:"row", gap:"20px",alignItems:"center"}}>
  <Typography variant={{sm:"subtitle1",md:"h6"}} color="gray">
  {parseInt(viewCount).toLocaleString()}views
</Typography>
<Typography variant={{sm:"subtitle1",md:"h6"}} color="gray"> {parseInt(likeCount).toLocaleString()}likes</Typography>

  </Stack>
</Stack>


      </Box>

    </Box>
<Box sx={{justifyContent:'center',alignItems:'center'}} px={2} py={{md:1,sx:5}}>
  <Videos videos={videos} direction="column"/>
</Box>
    </Stack>
    </Box>
  )
}

export default VideoDetail