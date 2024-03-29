import "./App.css";
import styled from "styled-components";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Skills } from "./layout/sections/skills/Skills";
import { Experience } from "./layout/sections/experience/Experience";
import { Reviews } from "./layout/sections/reviews/Reviews";
import { Contacts } from "./layout/sections/contacts/Contacts";
import { Footer } from "./layout/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Skills />
      <Experience />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
