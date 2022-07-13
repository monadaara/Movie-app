import styled from "styled-components";

export const Container = styled.div`
  margin: 4rem 0rem;
  .h3title {
    color: #bf0637;
  }
`;

export const Card = styled.div`
  height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  text-align: center;
  img {
    border-radius: 1rem;
    width: 100%;
  }
`;

export const StyledDiv = styled.div`
  margin: 2rem 15rem;
`;
export const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid white;
  outline: none;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  :focus {
    border: 2px solid #bf0637;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 1rem;
  margin-top: 3rem;
`;

export const Header = styled.header`
  width: 100%;
  height: 60vh;
  margin-bottom: 4rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h1 {
    position: absolute;
    top: 50%;
    right: 50%;
    color: #bf0637;
    font-size: 5rem;
    font-weight: 400;
    line-height: 5rem;
    transform: translate(50%, -50%);
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
  img {
    height: 15rem;
  }
  .content {
    flex: 1;
  }
`;
