import { useState,useEffect } from "react"
import axios from "axios"

function Home() {
  const [ isLoading,setIsLoading ] = useState(true);
  const [ loadCount,setLoadCount ] = useState(0);
  const [ movies,setMovies ] = useState(null);

  const fetchMovies = async () => {
    console.log("fetchMovies 호출")
    const response = await axios.get("https://yts-proxy.now.sh/list_movies.json")
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
          <ul>
            {
              movies.map(item => {
                return <li key={item.id}>{item.title}</li>
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