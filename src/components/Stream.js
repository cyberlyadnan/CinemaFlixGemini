import React from 'react';
import { useParams } from 'react-router-dom';

const Stream = () => {
  const { vidId } = useParams(); // Extract vidId from the dynamic URL
    console.log(vidId)
  return (
    <div>
      <iframe 
        src={`https://vidsrc.in/embed/movie?tmdb=${vidId}`} 
        style={{ width: '100%', height: '100%' }} 
        frameBorder="0" 
        referrerPolicy="origin" 
        allowFullScreen>
      </iframe>
    </div>
  );
}

export default Stream;
