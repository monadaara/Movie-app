import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
function NavBar(props) {
  return (
    <Nav>
      <Link to={"/"}>
        <Span>THEMOVIESHOW</Span>
      </Link>
      <Flex>
        <NavLinked to={"/"}>Movies</NavLinked>
        <NavLinked to={"/tv"}>Tv shows</NavLinked>
        <NavLinked to={"/about"}>About us</NavLinked>
      </Flex>
    </Nav>
  );
}

const Nav = styled.nav`
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    color: white;
  }
`;
const Flex = styled.div`
  margin-right: 19.3rem;
  display: flex;
  gap: 4rem;
`;
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

const NavLinked = styled(NavLink)`
  &.active {
    color: #bf0637;
  }
`;
export default NavBar;
