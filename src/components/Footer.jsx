import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer(props) {
  return (
    <Grid>
      <div>
        <h2>Company</h2>
        <Span>THEMOVIESHOW</Span>
        <p>
          {" "}
          <strong>THEMOVIESHOW</strong> is a movies website that offers
          different and excited movie, tv shows, videos{" "}
        </p>
      </div>
      <div>
        <h2>Links</h2>
        <Links to={"/"}>Movies</Links>
        <Links to={"/tv"}>Tv shows</Links>
        <Links to={"/about"}>About</Links>
      </div>
    </Grid>
  );
}

const Span = styled.span`
  @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
  font-family: "Permanent Marker", cursive;
  background-color: white;
  background-image: linear-gradient(350deg, #bf0637, white);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  font-size: 1.5rem;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 5rem;
  margin-top: 3rem;
  background-color: #0e1126;
  padding: 3rem 15%;
`;
const Links = styled(Link)`
  color: #bf0637;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  padding-left: 1rem;

  &:hover {
    transform: scale(1.1);
  }
`;
export default Footer;
