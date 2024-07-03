import React from 'react'
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoChannelTitle, demoThumbnailUrl, demoChannelUrl, demoProfilePicture, demoVideoTitle, demoVideoUrl } from '../utils/constants'
import { Link } from 'react-router-dom'

function VideoCard({ video: { id: { videoId } = {}, snippet } = {} }) {
  return (
    <Card sx={{ width: { md: '320px', xs: "100%" } }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title || demoVideoTitle}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ background: "grey", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" sx={{ color: "lightgray", fontWeight: "bold" }}>
            {snippet?.title?.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" sx={{ color: "lightgray", fontWeight: "bold" }}>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ color: "lightgray", fontSize: "18px", ml: 2, mt: 1 }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard
