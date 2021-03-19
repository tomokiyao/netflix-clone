import React, { useEffect, useState } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import { API_KEY, baseUrl } from '../request';
import './Row.scss';

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
};

type Options = {
  height: string;
  width: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
};

const base_url = 'https://image.tmdb.org/t/p/original';

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string | null>('');

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts: Options = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = async (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    }
    let res = await axios.get(
      `${baseUrl}/movie/${movie.id}/videos?api_key=${API_KEY}`,
    );
    setTrailerUrl(res.data.results[0]?.key);
  };

  return (
    <div>
      {movies.length && (
        <div className="Row">
          <h2>{title}</h2>
          <div className="Row-posters">
            {movies.map((movie, i) => (
              <img
                key={movie.id}
                className={`Row-poster ${isLargeRow && 'Row-poster-large'}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                onClick={() => handleClick(movie)}
              />
            ))}
          </div>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
      )}
    </div>
  );
};
