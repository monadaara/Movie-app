import React from "react";
import TvAiringToday from "./tvAiringToday";
import TvPopular from "./TvPopular";
import TvToprated from "./TvToprated";
import TvTags from "./TvTags";
import Input from "./Input";

function Tv(props) {
  return (
    <div>
      <Input />
      <TvTags />
      <TvPopular />
      <TvToprated />
      <TvAiringToday />
    </div>
  );
}

export default Tv;
