import React from 'react'
import { Link } from "react-router-dom"
import { Typography, CardContent, Card, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoChannelTitle, demoThumbnailUrl, demoVideoTitle, demoChannelUrl, demoVideoUrl } from '../utils/constants'


const VideoCard = ({video:{id:{videoId},snippet}}) => {
  return (
    <Card sx={{width:{md:'320px',xs:"100%"},borderRadius:0}}>
          <Link to={videoId ?`/video/${videoId}`:demoVideoUrl}>
          <CardMedia image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{width:358,height:180}}
          />
          </Link>
          <CardContent sx={{backgroundColor:'grey',height:'106px'}}>
            <Link to={videoId ?`/video/${videoId}`:demoVideoUrl}>
            <Typography variant='subtitle1' fontWeight="bold"color="lightgrey">
              {snippet?.title.slice(0,60)|| demoVideoTitle.slice(0,60)}
            </Typography>
            </Link>
            <Link to={snippet ?.channelId?`/channel/${snippet?.channelId}`:demoChannelUrl}>
            <Typography variant='subtitle2' fontWeight="bold"color="lightgrey">
              {snippet?.channelTitle ||  demoChannelTitle}
              <CheckCircle sx={{fontSize:12, color:"lightgrey",ml:2}}/>
            </Typography>
            </Link>





          </CardContent>

          
    </Card>
  )
}

export default VideoCard