import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header, Flex } from "../styled/upcoming.styled";
import YouTube from "react-youtube";

function MovieDetail(props) {
  const [detail, setDetail] = useState({});
  const [video, setVideo] = useState({});
  const apiKey = "3c6a437304f29ea1b70cd1c62cc6ec91";
  const params = useParams();
  const getDetail = async (id) => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=videos`
    );
    const data = await api.json();
    setDetail(data);
    setVideo(data);

    // console.log(data);
  };
  const opts = {
    height: "500px",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      // autoplay: 1,
    },
  };
  const renderVideo = () => {
    const trailer = video.videos
      ? video.videos.results.find(
          (vid) => vid.name === "Official Trailer" || "Trailer"
        )
      : null;
    if (!trailer) return <h1>no video availible</h1>;
    console.log(trailer);
    return <YouTube videoId={trailer.key} opts={opts} />;
  };

  useEffect(() => {
    getDetail(params.id);
  }, [params.id]);
  return (
    <div>
      <Header>
        <img
          src={`https://image.tmdb.org/t/p/w780/${detail.poster_path}`}
          alt=""
        />
      </Header>
      <Flex>
        <img
          src={`https://image.tmdb.org/t/p/w500/${detail.backdrop_path}`}
          alt=""
        />
        <div className="content">
          <h4>Overview</h4>
          <p>{detail.overview}</p>
          <h4>Production companies</h4>
          {detail.production_companies &&
            detail.production_companies.map((pro) => {
              return (
                <ul key={pro.id}>
                  <li>{pro.name}</li>
                </ul>
              );
            })}
        </div>
      </Flex>
      {video.videos ? renderVideo() : null}
    </div>
  );
}

export default MovieDetail;
