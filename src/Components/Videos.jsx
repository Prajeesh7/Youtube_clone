import React from 'react'
import { Box, Stack } from '@mui/material'
import VideoCard from './VideoCard'
import ChennalCard from './ChennalCard'


const Videos = ({ videos }) => {

console.log( videos );


  return (
    
    <Stack direction='row' flexWrap="wrap" justifyContent='start' gap={2}>

      { videos.map((item, idx) => (

        <Box key={idx} >
          { item.id.videoId && <VideoCard video={item} />}
          
        </Box>

      ))}

    </Stack>
  )
}

export default Videos
