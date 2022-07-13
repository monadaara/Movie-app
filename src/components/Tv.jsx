import React from "react";
import TvAiringToday from "./tvAiringToday";
import TvPopular from "./TvPopular";
import TvToprated from "./TvToprated";
import TvTags from "./TvTags";

function Tv(props) {
  return (
    <div>
      <TvTags />
      <TvPopular />
      <TvToprated />
      <TvAiringToday />
    </div>
  );
}

export default Tv;
