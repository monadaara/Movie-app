import React, { useEffect, useState } from "react";
import { Container, Card } from "../styled/upcoming.styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const apiKey = "3c6a437304f29ea1b70cd1c62cc6ec91";
function TvToprated(props) {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    getRated();
  }, []);
  const getRated = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`
    );
    const { results } = await api.json();
    setTopRated(results);
  };

  return (
    <Container>
      <h3 className="h3title">Top rated tv shows</h3>
      <Splide
        options={{
          perPage: 3,
          gap: "1rem",
          arrows: false,
          pagination: false,
          drag: "free",
        }}
      >
        {topRated.map((series) => {
          return (
            <SplideSlide key={series.id}>
              <Card>
                <Link to={`/tv/${series.id}`}>
                  <img
                    src={
                      "https://image.tmdb.org/t/p/w500/" + series.backdrop_path
                    }
                    alt=""
                  />
                </Link>
                <p>{series.name}</p>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Container>
  );
}

export default TvToprated;
