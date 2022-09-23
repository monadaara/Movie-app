import React from "react";
import Comming from "./Comming";
import Popular from "./Popular";
import Toprated from "./Toprated";
import Tags from "./Tags";
import Input from "./Input";
import { Outlet } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <Input />
      <Tags />
      <Popular />
      <Toprated />
      <Comming />
    </div>
  );
}

export default Home;
