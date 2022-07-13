import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Grid } from "../styled/upcoming.styled";
import { Link } from "react-router-dom";

const apiKey = "3c6a437304f29ea1b70cd1c62cc6ec91";
function TvSearch(props) {
  const [searched, setSearched] = useState([]);
  const params = useParams();
  console.log(params);
  const getSearch = async (name) => {
    const api = await fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${name}`
    );
    const { results } = await api.json();

    setSearched(results);
    console.log(results);
  };
  useEffect(() => {
    getSearch(params.search);
  }, [params.search]);
  return (
    <Grid>
      {searched.length ? (
        searched.map((series) => {
          return (
            <Card key={series.id}>
              <Link to={"/tv/" + series.id}>
                <img
                  src={
                    "https://image.tmdb.org/t/p/w500/" + series.backdrop_path
                  }
                  alt=""
                />
              </Link>
              <p>{series.name}</p>
            </Card>
          );
        })
      ) : (
        <h1>sorry, bad search</h1>
      )}
    </Grid>
  );
}

const Card = styled.div`
  text-align: center;
  img {
    width: 100%;
    border-radius: 1rem;
  }
`;

export default TvSearch;
