import React, { useEffect, useState } from 'react'
import { useParams,Link} from "react-router-dom";
import { Box,Typography,Stack } from "@mui/material";
import ReactPlayer from "react-player"

import { Videos} from "./";
import  fetchFromAPI  from "../utils/fetchFromAPI";
import { CheckCircle, CottageSharp, SignalCellularNullOutlined } from '@mui/icons-material';
import { demoChannelTitle } from '../utils/constants';

const VideoDetail = () => {

 
  
  return (
    <Box minHeight="95vh"> 
    <Stack justifyContent="center" alignItems="center" >
    <Box>
      <Box>

      </Box>

    </Box>
    </Stack>
    </Box>
  )
}

export default VideoDetail