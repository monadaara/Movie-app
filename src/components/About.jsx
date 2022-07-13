import React from "react";
import styled from "styled-components";
import img from "../styled/about-us.jpg";
function About(props) {
  return (
    <StyledAbout>
      <img src={img} alt="" />
      <p>
        Streamit is a unique movie website template made for online streaming.
        The dark theme and image-rich layout deliver an immersive experience to
        the audience. Users can quickly see lots of movie suggestions on the
        homepage and start watching the movies without searching for each and
        every movie.
      </p>
      <Form action="">
        <h2>Send us message</h2>
        <textarea
          placeholder="message"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <input type="email" placeholder="email" />
        <button type="submit">Submit</button>
      </Form>
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  width: 100%;
  img {
    width: 100%;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }
`;
const Form = styled.form`
  width: 100%;
  margin: 2rem 0;
  h2 {
    color: #bf0637;
  }
  textarea {
    width: 100%;
    box-sizing: border-box;
    font-size: 1.2rem;
    height: 15rem;
    outline: none;
    border-radius: 0.8rem;
    resize: none;
    padding: 0.4rem;
    word-wrap: break-word;
    font-family: "Poppins", sans-serif;
  }
  input {
    box-sizing: border-box;
    margin: 1rem 0;
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    outline: none;
    font-size: 1.3rem;
  }
  button {
    background-color: #bf0637;
    color: white;
    display: flex;
    justify-content: center;
    padding: 1rem;
    width: 10rem;
    border-radius: 0.5rem;
    align-items: center;
    text-align: center;
  }
`;

export default About;
