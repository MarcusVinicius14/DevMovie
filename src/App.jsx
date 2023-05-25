import { useState, useEffect } from "react";

import { Video } from "./components/Video";
import { BackGround } from "./components/background";
import { DescriptionMovie } from "./components/description-movie";
import { Header } from "./components/header";
import { Movies } from "./components/movies";

import { apiData } from "./api/data";
import axios from "axios";

const DEFAULT_MOVIE = {
  title: "A Mulher Rei",
  description:
    "Em 1800, o general Nanisca treina um grupo de mulheres guerreiras para proteger o reino africano de Dahomey de um inimigo estrangeiro.",
  imageSmall:
    "https://vertentesdocinema.com/wp-content/uploads/2022/09/amr-cartazteaser-online-1400x2100px-data.jpg",
  imageBanner: "https://images8.alphacoders.com/125/1253813.jpg",
  linkVideo: "u1HTd_VVICQ",
  category: "movies",
};

function App() {
  const [video, setVideo] = useState(DEFAULT_MOVIE);
  const [playVideo, SetPlayVideo] = useState(false);
  const [moviesData, setMoviesData] = useState([]);
  const baseUrl = "http://localhost:3003"

  const { title, description, linkVideo, imageBanner } = video;

  const apiDataMovies = moviesData?.movies?.length > 0 ? moviesData : apiData;

  useEffect(() => {
    const getMoviesAndCategories = async () => {
      const { data } = await axios.get(`${baseUrl}/movies-categories`);
      setMoviesData(data);
    };
    getMoviesAndCategories();
  }, []);

  const handleOpenPlayVideo = () => {
    SetPlayVideo(true);
  };
  const handleClosePlayVideo = () => {
    SetPlayVideo(false);
  };

  const handleVideo = (data) => {
    setVideo(data);
    window.scrollTo({ top: 0 });
  };


  return (
    <BackGround imageBanner={imageBanner}>
      <Header />
      <DescriptionMovie
        title={title}
        description={description}
        handleOpenPlayVideo={handleOpenPlayVideo}
      />
      <Movies data={apiDataMovies} handleVideo={(data) => handleVideo(data)} />
      <Video
        linkVideo={linkVideo}
        playVideo={playVideo}
        handleClosePlayVideo={handleClosePlayVideo}
      />
    </BackGround>
  );
}

export default App;
