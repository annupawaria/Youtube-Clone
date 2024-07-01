import React from 'react'
import {Typography,Card,CardContent,CardMedia} from "@mui/material"
import {CheckCircle} from "@mui/icons-material"
import { demoChannelTitle,demoThumbnailUrl,demoChannelUrl,demoProfilePicture,demoVideoTitle, demoVideoUrl } from '../utils/constants'
import { Link } from 'react-router-dom'

function VideoCard({video:{id:{videoId},snippet}}) {
  
  return (
    <Card>
      <Link to={videoId ? `/video/${videoId}`:demoVideoUrl} >
    <CardMedia image={snippet?.thumbnails?.high?.url}
    alt={snippet?.title}
    sx={{width:358,height:180}}
    
    />
    
    </Link>
    </Card>
  )
}

export default VideoCard