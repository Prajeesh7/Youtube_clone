import React,{ useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { videos } from './Videos'
import { fetchAPI } from '../Utils/fetchAPI'
import { Box } from '@mui/material'



const ChannelDetail = () => {
  
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  //console.log( channelDetail,videos)

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
    <div>
      
    </div>
  )
}

export default ChannelDetail
