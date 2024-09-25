import Header from './components/Header';
import Banner from './components/Banner';
import MoveList from './components/MoveList';
import { useEffect, useState } from 'react';

function App() {
  const [movie, setMovie] = useState([]);
  const [movieRate, setMovieRate] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const url1 =
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
      const url2 =
        'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1';

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };

      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options)
      ]);
      const data1 = await res1.json();
      const data2 = await res2.json();
      setMovie(data1.results);
      setMovieRate(data2.results);
    };
    fetchMovie();
  }, []);
  return (
    <div className=" bg-black pb-10">
      <Header />
      <Banner />
      <MoveList title="Phim hot" data={movie} />
      <MoveList title="Phim đề cử" data={movieRate} />
    </div>
  );
}

export default App;
