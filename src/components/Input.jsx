import React, { useState, useEffect } from "react";
import { StyledDiv, StyledInput } from "./../styled/upcoming.styled";
import { useNavigate, useLocation } from "react-router-dom";
function Input(props) {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.pathname === "/tv") navigate("/tv-search/" + input);
    else {
      navigate("/search/" + input);
    }
    setInput("");
  };
  return (
    <StyledDiv>
      <form onSubmit={handleSubmit} action="">
        <StyledInput
          type="text"
          placeholder="search a movie or tv shows"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </StyledDiv>
  );
}

export default Input;
