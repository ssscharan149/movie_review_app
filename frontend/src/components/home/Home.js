
import "./Home.css"
import { Link } from "react-router-dom"
import Search from "../search/Search"
import { useMovies } from "../../context/MovieContext"

function Home() {
  // const { register, handleSubmit, formState: { errors } }=useForm()
  // const [show,setShow]= useState('')

  // const[movies,setMovies]=useState([])

  // const [displayed,setDisplayed] = useState(false);

  //   const options = {
  //     method: 'GET',
  //     url: 'https://imdb232.p.rapidapi.com/api/title/get-most-popular',
  //     params: {
  //     limit: '10',
  //     topMeterTitlesType: 'MOVIE'
  //     },
  //     headers: {
  //     'x-rapidapi-key': 'eb7df891a2msh76f89f329c102b3p10b501jsne75c0a81dc19',
  //     'x-rapidapi-host': 'imdb232.p.rapidapi.com'
  //     }
  //   };

  // const fetchMovies=useCallback(async()=>{
  //   try {
  //     const response = await axios.request(options);
  //     console.log(response);
  //     let movie = response.data.data.topMeterTitles.edges; 
  //     setMovies(movie);
  //     console.log(movie);
  //     setDisplayed(true);
  //     console.log("rendered once");
  //     // console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // })


  // // const handleInputChange=(e)=>{
  // //   setShow(e.target.value)
  // // }

  // useEffect(()=>{
  //   fetchMovies()
  // },[displayed])


  const{topMovies,recentMovies,topTv,recentTv} = useMovies()

  return (
    <div className="">
      <div className="rest">
        <Search/>
        <h1 className="headings">Top 10 Movies</h1>
          <div className="container-fluid">
            <div className="row row-cols-5">
            {topMovies.map((movie,index)=>(  
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg mb-5">
              <Link to={`/movie/${movie.id}`} className="link">
              <div className="card">
              <img src={movie.node.item.primaryImage.url} alt={movie.node.item.titleText.text} className="card-img" />
                <div className="card-body">
                  <h5 className="card-title">{movie.node.item.titleText.text}</h5>
                  <p className="card-date">{movie.node.item.releaseYear.year}</p>
                  <p className="rating">{index+1}</p> {/*use position to fix it around bottom of the image */}
                </div>
              </div>
              </Link>
            </div>  
            ))}
          </div>
          <h1 className="headings mb-5">Recent Hits</h1>
          <div className="row row-cols-5">
            {recentMovies.map((movie,index)=>(  
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg mb-5">
              <Link to={`/movie/${movie.id}`} className="link">
              <div className="card">
              <img src={movie.node.primaryImage.url} alt={movie.node.titleText.text} className="card-img" />
                <div className="card-body">
                  <h5 className="card-title">{movie.node.titleText.text}</h5>
                  <p className="card-date">{movie.node.releaseYear.year}</p>
                  <p className="rating">{index+1}</p> {/*use position to fix it around bottom of the image */}
                </div>
              </div>
              </Link>
            </div>  
            ))}
          </div>
          <h1 className="headings mb-5">Top Series</h1>
          <div className="row row-cols-5">
            {topTv.map((movie,index)=>(  
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg mb-5">
              <Link to={`/movie/${movie.id}`} className="link">
              <div className="card">
              <img src={movie.node.item.primaryImage.url} alt={movie.node.item.titleText.text} className="card-img" />
                <div className="card-body">
                  <h5 className="card-title">{movie.node.item.titleText.text}</h5>
                  <p className="card-date">{movie.node.item.releaseYear.year}</p>
                  <p className="rating">{index+1}</p> {/*use position to fix it around bottom of the image */}
                </div>
              </div>
              </Link>
            </div>  
            ))}
          </div>
          <h1 className="headings mb-5">Recent Series</h1>
          <div className="row row-cols-5">
            {recentTv.map((movie,index)=>(  
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg mb-5">
              <Link to={`/movie/${movie.id}`} className="link">
              <div className="card">
              <img src={movie.node.primaryImage.url} alt={movie.node.titleText.text} className="card-img" />
                <div className="card-body">
                  <h5 className="card-title">{movie.node.titleText.text}</h5>
                  <p className="card-date">{movie.node.releaseYear.year}</p>
                  <p className="rating">{index+1}</p> {/*use position to fix it around bottom of the image */}
                </div>
              </div>
              </Link>
            </div>  
            ))}
          </div>
        </div> 
      </div>
    </div>
  )
}
export default Home