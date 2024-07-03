import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import fetchFromAPI from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  // const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams()
useEffect(()=>{
  fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=>setVideos(data.items))
},[searchTerm])
 

  return (
    <Box p={2} sx={{overflow:"auto",height:"90vh",flex:2}}>
    <Typography sx={{color:'white',fontSize:"33px"}} >
      Search Results for: <span style={{color:'red',fontSize:"33px"}}>{searchTerm}</span> Videos
    </Typography>
   <Videos videos={videos}/>
  </Box>
  );
};

export default SearchFeed;