import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import SideBar from './SideBar'
import Videos from './Videos'
import { fetchAPI } from '../Utils/fetchAPI'



const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  console.log(selectedCategory);

  useEffect(() => {

    fetchAPI(`search?part=snippet&q=${selectedCategory}`).then((res) => {
      setVideos(res.items)
    })

  }, [selectedCategory])

  return (
    <Stack
      sx={{ flexDirection: { sx: 'column', md: 'row' } }}
    >
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRadius: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }} >

        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className='copyright'
          variant='body2'
          sx={{ mt: 1.5, color: ' #fff' }} >
          Copyright 2023 reserved
        </Typography>

      </Box>


      <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }} >

        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2} sx={{
            color: 'white'
          }}
        >
          {selectedCategory} <span style={{ color: '#F31503' }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed