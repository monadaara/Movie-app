import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Card } from "../styled/upcoming.styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const apiKey = "3c6a437304f29ea1b70cd1c62cc6ec91";
function Comming(props) {
  const [coming, setComing] = useState([]);

  useEffect(() => {
    getComing();
  }, []);
  const getComing = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
    );
    const { results } = await api.json();
    setComing(results);
  };
  return (
    <Container>
      <h3 className="h3title">Upcoming movies</h3>
      <Splide
        options={{
          perPage: 3,
          gap: "1rem",
          arrows: false,
          pagination: false,
          drag: "free",
        }}
      >
        {coming.map((movie) => {
          return (
            <SplideSlide key={movie.id}>
              <Card>
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={
                      "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path
                    }
                    alt=""
                  />
                </Link>
                <p>{movie.title}</p>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Container>
  );
}

export default Comming;
