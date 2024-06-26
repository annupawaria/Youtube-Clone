import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player';
import fetchFromAPI from '../utils/fetchFromAPI';
import { Videos } from './';
import { CheckCircle } from "@mui/icons-material"
import { Box, Stack,Typography } from "@mui/material"


const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState("")

  const { id } = useParams()

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideoDetail(data.items[0]))
  }, [id]);
  if(!videoDetail?.snippet) return 'loading.......'
  const {snippet:{title,channelId,channelTitle},statistics: { viewCount, likeCount } }=videoDetail;


  return (

    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: "sticky", top: '86px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
            <Typography color="white" variant="h5" fontWeight="bold" p={2}>{title}

            </Typography>
            <Stack  direction="row" justifyContent="space-between" sx={{color:'red'}} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
             <Typography variant={{sm:'subtitle1',md:'h6'}} color="red">
              {channelTitle}
              <CheckCircle sx={{fontSize:"12px",color:'grey' ,ml:'5px'}}/>


             </Typography>
              </Link>
            </Stack>
            <Typography variant='body1' sx={{opacity:"0.9",color:"white"}}>
{viewCount} views
            </Typography> <Typography variant='body1' sx={{opacity:"0.9",color:"white"}}>
{likeCount} likes
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail