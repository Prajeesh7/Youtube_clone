import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './Components/Navbar';
import Feed from './Components/Feed';
import VideoDetail from './Components/VideoDetail';
import ChannelDetail from './Components/ChannelDetail'
import SearchFeed from './Components/SearchFeed';
import './App.css';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Box sx={{ backgroundColor: '#000' }}>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Feed />} />
            <Route path='/video/:id' element={<VideoDetail />} />
            <Route path='/channel/:id' element={<ChannelDetail />} />
            <Route path='/search/:searchTerm' element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  )

}

export default App;
