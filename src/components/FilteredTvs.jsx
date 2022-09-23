import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "../styled/upcoming.styled";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Input from "./Input";
import TvTags from "./TvTags";

function FilteredTvs(props) {
  const apiKey = "3c6a437304f29ea1b70cd1c62cc6ec91";
  const [filtered, setFiltered] = useState([]);
  const params = useParams();
  console.log(params);
  const getFiltred = async (genre) => {
    const api = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=${genre}`
    );

    const { results } = await api.json();
    setFiltered(results);
  };

  useEffect(() => {
    getFiltred(params.type);
  }, [params.type]);
  return (
    <>
      <Input />
      <TvTags />
      <Grid>
        {filtered.map((series) => {
          return (
            <Card key={series.id}>
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
          );
        })}
      </Grid>
    </>
  );
}

const Card = styled.div`
  text-align: center;
  img {
    width: 100%;
    border-radius: 1rem;
  }
`;
export default FilteredTvs;
