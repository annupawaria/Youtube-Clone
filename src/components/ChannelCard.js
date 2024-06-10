import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture, demoChannelId } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => {
  console.log('channelDetail:', channelDetail); // Debugging log

  const channelId = channelDetail?.id?.channelId || demoChannelId;
  const thumbnailUrl = channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture;
  const channelTitle = channelDetail?.snippet?.title || 'Demo Channel Title';
  const subscriberCount = channelDetail?.statistics?.subscriberCount;

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
        margin: 'auto',
        marginTop,
      }}
    >
      <Link to={`/channel/${channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
          <CardMedia
            image={thumbnailUrl}
            alt={channelTitle}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
          />
          <Typography variant="h6">
            {channelTitle}{' '}
            <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
          </Typography>
          {subscriberCount && (
            <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
              {parseInt(subscriberCount).toLocaleString('en-US')} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
