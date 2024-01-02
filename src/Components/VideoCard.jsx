import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle, ImageOutlined } from '@mui/icons-material'

import { demoChannelTitle, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoThumbnailUrl } from '../Utils/constants'



const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    console.log(videoId, snippet)

    return (
        <Card>
            <Link to={ videoId ? `/video/${videoId}` : demoVideoUrl }>
                <CardMedia 
                image={ snippet?. thumbnails?. high?. url} 
                sx={{ width: 258, height: 180 }}
                alt={ snippet?.title } 
                />
                <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px'}} />
            </Link>
        </Card>
    )
}

export default VideoCard

// ? -> it means if exist do the task or not 