import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function TvTags(props) {
  const apiKey = "3c6a437304f29ea1b70cd1c62cc6ec91";
  const [tags, setTags] = useState([]);
  const getTags = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`
    );
    const { genres } = await api.json();
    setTags(genres);
  };

  useEffect(() => {
    getTags();
  }, []);
  return (
    <Grid>
      {tags.map((tag) => {
        return (
          <Tag key={tag.id} to={`/tvs/${tag.id}`}>
            <p>{tag.name}</p>
          </Tag>
        );
      })}
    </Grid>
  );
}

export default TvTags;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  gap: 1rem;
`;
const Tag = styled(NavLink)`
  background-color: #bf0637;
  border-radius: 2rem;
  text-align: center;
  text-decoration: none;
  p {
    color: white;
    font-size: 0.8rem;
  }
  a {
    text-decoration: none;
  }
`;
