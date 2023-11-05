import { Container } from "./components/Container";
import "./App.css";

function App() {
  return (
    <Container>
      {function (title) {
        //! Declaración
        return <h1>{title}</h1>;
      }}
    </Container>
  );
}

export default App;
