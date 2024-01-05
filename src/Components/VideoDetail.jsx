import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Typography, Box, Stack } from '@mui/material'
import ReactPlayer from 'react-player'
import { fetchAPI } from '../Utils/fetchAPI'
import Videos from './Videos'
import { CheckCircle } from '@mui/icons-material'



function VideoDetail() {

  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {

    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data)=>{
      setVideoDetails(data.items[0])
    })
  
  }, [id])

    console.log(videoDetails)
  
  if ( ! videoDetails ?. snippet ) return 'Loading...';

  const { snippet,statistics } = videoDetails;


  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }} >
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px'}} >
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} 
            className='react-player' controls />
          
          <Typography color='#fff' variant='h5' fontWeight='bold' p={2} >
            { snippet.title }
          </Typography>

          <Stack direction='row' justifyContent='space-between' sx={{
            color: '#fff'}} py={1} px={2} >

            <Link to={`/channel/${statistics?.channelId}`} >

            <Typography color='#FFF' variant={{ sm:'subtitle1', md:'h6' }} >
              { snippet.channelTitle }
            </Typography>
            
            </Link>

          </Stack>

          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail