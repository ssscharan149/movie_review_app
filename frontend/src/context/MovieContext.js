import { useContext,useState,useEffect,createContext } from "react";
import axios from "axios";

const MoviesContext = createContext();

export const MovieProvider = ({children})=>{
  const [topMovies,setTopMovies]  = useState([]);
  const [recentMovies,setRecentMovies]  = useState([]);
  const [topTv,setTopTv]  = useState([]);
  const [recentTv,setRecentTv] = useState([])

  const optionsForRecent = {
    method: 'GET',
    url: 'https://imdb232.p.rapidapi.com/api/title/get-most-popular',
    params: {
    limit: '10',
    topMeterTitlesType: 'MOVIE'
    },
    headers: {
    'x-rapidapi-key': 'eb7df891a2msh76f89f329c102b3p10b501jsne75c0a81dc19',
    'x-rapidapi-host': 'imdb232.p.rapidapi.com'
    }
  };

  const optionsForTop = {
    method: 'GET',
    url: 'https://imdb232.p.rapidapi.com/api/title/get-chart-rankings',
    params: {
      rankingsChartType: 'TOP_250',
      limit: '10'
    },
    headers: {
      'x-rapidapi-key': 'eb7df891a2msh76f89f329c102b3p10b501jsne75c0a81dc19',
      'x-rapidapi-host': 'imdb232.p.rapidapi.com'
    }
  };

  const optionsForTopTv={
    method: 'GET',
    url: 'https://imdb232.p.rapidapi.com/api/title/get-chart-rankings',
    params: {
      rankingsChartType: 'TOP_250_TV',
      limit: '10'
    },
    headers: {
      'x-rapidapi-key': 'eb7df891a2msh76f89f329c102b3p10b501jsne75c0a81dc19',
      'x-rapidapi-host': 'imdb232.p.rapidapi.com'
    }
  }

  const optionsForRecentTv={
    method: 'GET',
    url: 'https://imdb232.p.rapidapi.com/api/title/get-most-popular',
    params: {
      limit: '10',
      topMeterTitlesType: 'TV'
    },
    headers: {
      'x-rapidapi-key': 'eb7df891a2msh76f89f329c102b3p10b501jsne75c0a81dc19',
      'x-rapidapi-host': 'imdb232.p.rapidapi.com'
    }
  }

  const fetchMovies = async ()=>{
    try{
      const [topMoviesRes,recentMoviesRes,topTvRes,recentTvRes] = await Promise.all([axios.request(optionsForTop),axios.request(optionsForRecent),axios.request(optionsForTopTv),axios.request(optionsForRecentTv)])
      
      setTopMovies(topMoviesRes.data.data.titleChartRankings.edges)
      setRecentMovies(recentMoviesRes.data.data.topMeterTitles.edges)
      setTopTv(topTvRes.data.data.titleChartRankings.edges)
      setRecentTv(recentTvRes.data.data.topMeterTitles.edges)


    }
    catch(err){
      console.error("Failed to fetch",err.message)
    }
  }

  useEffect(()=>{
    fetchMovies()
  },[])

  return(
    <MoviesContext.Provider value={{topMovies,recentMovies,topTv,recentTv}}>
      {children}
    </MoviesContext.Provider>
  )
}

export const useMovies=()=>useContext(MoviesContext)
