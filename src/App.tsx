import "./App.css";
import styled from "styled-components";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Skills } from "./layout/sections/skills/Skills";
import { Experience } from "./layout/sections/experience/Experience";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
