import { name, containerstyle } from "./getclass";
import { useState, useEffect } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ApiKey, playlist } from "../api/youtube";

const YouTubeAPI = () => {
    const [videoIds, setVideoIds] = useState([]);
    
    let playlistId = playlist;
    let apiKey = ApiKey;
  
    useEffect(() => {
      const fetchVideos = async () => {
        try {  
          const response = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=10&key=${apiKey}`
          );
  
          const data = await response.json();
  
          const videoIds = data.items.map((item) => item.snippet.resourceId.videoId);
  
          setVideoIds(videoIds);
        } catch (error) {
          console.error('Error fetching YouTube videos:', error);
        }
      };
  
      fetchVideos();
    }, []);

    useEffect(() => {
        const carousel = document.querySelector('.carousel');
        const scrollStep = 200;
    
        const scrollLeft = () => {
          carousel.scrollBy({
            left: -scrollStep,
            behavior: 'smooth',
          });
        };
    
        const scrollRight = () => {
          carousel.scrollBy({
            left: scrollStep,
            behavior: 'smooth',
          });
        };
    
        const leftArrow = document.querySelector('.arrow-icon.left');
        const rightArrow = document.querySelector('.arrow-icon.right');
    
        leftArrow.addEventListener('click', scrollLeft);
        rightArrow.addEventListener('click', scrollRight);
    
        return () => {
          leftArrow.removeEventListener('click', scrollLeft);
          rightArrow.removeEventListener('click', scrollRight);
        };
      }, []);
    
    
    return (
        <div className={name} style={containerstyle}>  
            Videos        
            <div className="carousel">
                {videoIds.map((videoId) => (
                    <div key={videoId} className="carousel-item">
                        <iframe
                            title="YouTube Video"
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>
             <div className="carousel-controls">
                <div className="arrow-icon left">
                    <ArrowBackIcon />
                </div>
                <div className="arrow-icon right">
                    <ArrowForwardIcon />
                </div>
            </div>   
        </div>
    )
}
export default YouTubeAPI;