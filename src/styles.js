import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    list-style: none;
    text-decoration: none;
    font-size: 18px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  body {
    background-color: #000;
    color: #eee
  }
`;
export default GlobalStyle;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 90%;
    display: block;
  }
`;
