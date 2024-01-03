import React,{ useState,useEffect } from 'react'
import { Box,Typography } from '@mui/material'
import { fetchAPI } from '../Utils/fetchAPI'
import { useParams} from 'react-router-dom'
import  Videos  from './Videos'




const SearchFeed = () => {
 
 const [ videos, setVideos ] = useState([])
 const { searchTerm } = useParams();

 useEffect(() => {
 
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((result)=>{
        setVideos(result.items)
    })

 }, [searchTerm])

    return (
    <Box 
    p={2} 
    sx={{ overflow: 'auto', height: ' 90vh', flex:2 
    }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white'}} >
        Search Results for : {searchTerm} <span style={{ color: '#F31503'}}>
            Videos
        </span>
        </Typography>
        <Videos  videos={videos}/>
    </Box>
  )
}

export default SearchFeed
