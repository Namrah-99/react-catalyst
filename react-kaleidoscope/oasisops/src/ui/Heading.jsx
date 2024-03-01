import styled from "styled-components";

// const test = `text-align: center;
// ${10 > 5 && "background-color: yellow"}`;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    `font-size: 3rem;
  font-weight: 600;
 `}
  ${(props) =>
    props.as === "h2" &&
    `font-size: 2rem;
  font-weight: 600;
  `}
  ${(props) =>
    props.as === "h3" &&
    `font-size: 2rem;
  font-weight: 500;
  `}
  ${(props) =>
    props.as === "h4" &&
    `font-size: 3rem;
     font-weight: 600;
  text-align: center;
  `}

  line-height: 1.4
`;

export default Heading;
