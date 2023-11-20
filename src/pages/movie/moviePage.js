
import React, {useState, useEffect, useCallback} from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../services/api';
import Header from '../../components/header/header';
import Details from '../../components/details/details';
import Footer from '../../components/footer/footer';

const MoviePage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const img_path = 'https://image.tmdb.org/t/p/w500';

  const findMovieDetails = useCallback(async () => {
    try {
      const details = await getMovieDetails(id);
      setMovieDetails(details);
    } catch (e) {
      console.log('Erro ao carregar página de detalhes do filme: ', e);
    }
  }, [id]);

  useEffect(() => {
    findMovieDetails();
  }, [findMovieDetails]);
    if (!movieDetails) {
    return <div> Loading...</div>;
  }

  return (
    <div>
      <Header />
      <Details  movieDetails={movieDetails} img_path={img_path} ></Details>
      <Footer />
    </div>
  );
};

export default MoviePage;