import React from 'react'
import { Typography,Card,CardContent,CardMedia } from '@mui/material'
import { CheckCircle, ImageOutlined } from '@mui/icons-material'

import { demoChannelTitle,demoVideoUrl,demoVideoTitle,demoChannelUrl,demoThumbnailUrl } from '../Utils/constants'



const VideoCard = ( { video:{id: {videoId},snippet } } ) => {
    console.log(videoId,snippet)
  
    return (
    <div>
      VideoCard
    </div>
  )
}

export default VideoCard
