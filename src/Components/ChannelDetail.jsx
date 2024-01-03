import React,{ useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { videos } from './Videos'
import { fetchAPI } from '../Utils/fetchAPI'
import { Box } from '@mui/material'
import ChannelCard from './ChannelCard'



const ChannelDetail = () => {
  
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  console.log( channelDetail)

  useEffect(() => {

    fetchAPI(`channels?part=snippet&id=${id}`).then((data)=>{
      setChannelDetail(data?. items[0])
    }).catch((err)=>{
      console.log( `API data fetching error ${err}`)
    })

    fetchAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>{
      setVideos(data?. items)
    })
  
  }, [id])
  
  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background:'radial-gradient(circle, rgba(255,92,188,1) 0%, rgba(0,250,201,1) 100%)',
          zIndex: 10,
          height: '300px'
        }}>
        </div>
        <ChannelCard channelDetail={ channelDetail } />
      </Box>

    </Box>
  )
}

export default ChannelDetail
