import React from "react";
import Comming from "./Comming";
import Popular from "./Popular";
import Toprated from "./Toprated";
import Tags from "./Tags";
import { Outlet } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <Tags />
      <Popular />
      <Toprated />
      <Comming />
    </div>
  );
}

export default Home;
