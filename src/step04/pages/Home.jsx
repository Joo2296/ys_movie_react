import { useState,useEffect } from "react"
import axios from "axios"
import Movie from "../components/Movie"
import "./Home.css"

function Home() {
  const [ isLoading,setIsLoading ] = useState(true);
  const [ loadCount,setLoadCount ] = useState(0);
  const [ movies,setMovies ] = useState(null);

  const fetchMovies = async () => {
    console.log("fetchMovies 호출")
    const response = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    console.log(response.data.data.movies);
    setMovies(response.data.data.movies);
    setIsLoading(false);
  }

  useEffect(() => {
    console.log('useEffect발생')
    fetchMovies();
    },[]);

    function displadyMovies () {
      return (
        <>
          <h1>Movie List</h1>
          <ul className="movies">
            {
              movies.map(item => {
                return (
                  <Movie
                    key = {item.id}
                    id = {item.id}
                    title = {item.title}
                    year = {item.year}
                    summary = {item.summary}
                    poster = {item.medium_cover_image}
                    genres = {item.genres}
                  />
                );
              })
            }
          </ul>
        </>
      );
    }
  return (
    <div>
      {isLoading ? `loading...${loadCount}` : displadyMovies() }
    </div>
  );
}

export default Home;