import React, { useEffect, useState } from 'react';
import Youtube from 'react-youtube';
import axios from '../../axios';
import {imageUrl,API_KEY} from '../../constants/constants'
import "./RowPost.css";

function RowPost(props) {

  // movie
  const [movie, setMovie] = useState([]);

  // trailer 
  const [urlId, setUrlId] = useState('')

  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(process.env.API_KEY_SECRET)
      setMovie(response.data.results)

    }).catch(err=>{
      // alert("network error 401")
    })
    
  },);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovieTrailer = (id)=>{
    console.log(process.env.API_KEY_SECRET)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('Trailer not available')
      }
    })

  }
  
  return (
   <div className='row'>
       <h2>{props.title}</h2>
       <div className='posters'>
         {movie.map((obj)=>
           <img onClick={()=>handleMovieTrailer(obj.id)} className={props.isSmall ? 'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
         )}
           
       </div>
       { urlId  && <Youtube videoId={urlId.key} opts={opts}  />}
   </div>
  )
}

export default RowPost;
