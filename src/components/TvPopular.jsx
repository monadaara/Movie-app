import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Card } from "../styled/upcoming.styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const apiKey = "3c6a437304f29ea1b70cd1c62cc6ec91";
function TvPopular(props) {
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`
    );
    const { results } = await api.json();
    setLatest(results);
  };
  return (
    <Container>
      <h3 className="h3title">Popular series</h3>
      <Splide
        options={{
          perPage: 3,
          gap: "1rem",
          arrows: false,
          pagination: false,
          drag: "free",
        }}
      >
        {latest.map((series) => {
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

export default TvPopular;
