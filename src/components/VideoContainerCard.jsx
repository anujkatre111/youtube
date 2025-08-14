import React from 'react'

const VideoContainerCard = ({info}) => {
  return (
    <div className='w-[320px] p-[4px] shadow-lg'>
      <img className="w-full rounded" src={info?.snippet?.thumbnails?.medium?.url} alt='thumbnail'/>
      <h1 className='break-words font-medium'>{info?.snippet?.title}</h1>
      <h1 className='w-full'>{info?.snippet?.channelTitle}</h1>
      <h1>{info?.statistics?.viewCount}</h1>
      <h1>{console.log(info)}</h1>
    </div>
  )
}

export default VideoContainerCard
