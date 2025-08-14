import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constant'
import VideoContainerCard from './VideoContainerCard';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(()=>{
    getVideos();
  },[])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);   
    const json = await data.json();
    setVideos(json.items);console.log(json.items);
    
  }
  return (
    <div className='flex flex-wrap'>
      {videos.map((video,index)=>(
        <VideoContainerCard key={index} info={video}/>
      ))}
    </div>
  )
}

export default VideoContainer;
