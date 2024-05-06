import { RouterProvider } from "react-router-dom";
import router from "./router";
import GlobalStyle, { Container } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <RouterProvider router={router} />
      </Container>
    </>
  );
}

export default App;
