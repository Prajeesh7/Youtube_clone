import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Typography, Box, Stack } from '@mui/material'
import ReactPlayer from 'react-player'
import { fetchAPI } from '../Utils/fetchAPI'
import Videos from './Videos'
import { CheckCircle } from '@mui/icons-material'



function VideoDetail() {

  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null)

  useEffect(() => {

    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data)=>{
      setVideoDetail(data.items[0])
    })
  
  }, [id])

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }} >
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px'}} >
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} />
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail