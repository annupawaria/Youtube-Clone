import React from 'react'
import {Typographyh,Card,CardContent,Card} from "@mui/material"
import {CheckCircle} from "@mui/icons-material"
import { demoChannelTitle,demoThumbnailUrl,demoVideoTitle,demoChannelUrl,demoVideoUrl } from '../utils/constants'

const VideoCard = ({video:{id:{videoId},snippet}}) => {
  return (
    <Card>
      <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
      <CardMedia image={snippet?.thumbnails?.high?.url}/>
      
      </Link>
    </Card>
  )
}

export default VideoCard