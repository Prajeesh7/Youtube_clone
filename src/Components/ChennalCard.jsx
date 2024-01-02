import React from 'react'
import { Box, CardMedia, Typography,CardContent } from '@mui/material'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import { demoProfilePicture,demoChannelTitle } from '../Utils/constants'



const ChennalCard = ({ channelDetail }) => {

    return (
        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: { xs: '356px', md: '320px' },
                height: '326px',
                margin: 'auto'
            }}
        >
            <Link to={`/channel/${channelDetail?.id?.channalId}`} >
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center',
                    color: '#FFF '
                }} >
                    <CardMedia 
                    image={ channelDetail?. snippet?. thumbnails?. high?. url || demoProfilePicture }
                    alt= { channelDetail?. snippet?. title}
                    sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
                    />

                    <Typography variant='h6' fontWeight='bold' color='#FFF' >

                    { channelDetail?. snippet?. channelTitle || demoChannelTitle }

                    <CheckCircle sx={{ fontSize: 14, color: 'grey', ml: '5px'}} />

                    </Typography>

                    <Typography>
                        {channelDetail?. statistics?. subscriberCount && (
                            <Typography>
                                { parseInt(channelDetail?. statistics?. subscriberCount).toLocaleString()}
                                Subscribers
                            </Typography>
                        )}
                    </Typography>

                </CardContent>
            </Link>

        </Box>
    )
}

export default ChennalCard
