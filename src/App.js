import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './Components/Navbar';
import Feed from './Components/Feed';
import VideoDetail from './Components/VideoDetail';
import ChennalDetail from './Components/ChennalDetail';
import SearchFeed from './Components/SearchFeed';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Box sx={{ backgroundColor: '#000' }}>
        <Navbar/>
        <Routes>
          <Route path='/' exact element = {<Feed/>}/>
          <Route path='/video/:id' element = {<VideoDetail/>}/>
          <Route path='/chennal/:id' element = {<ChennalDetail/>}/>
          <Route path='/search/:searchTerm' element = {<SearchFeed/>}/>
        </Routes>
        </Box>
      </BrowserRouter>
    </div>
  )

}

export default App;
