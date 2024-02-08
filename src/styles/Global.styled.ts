import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin:0;
    padding:0;
    box-sizing:border-box;
}


body {
  margin: 0;
  font-family:'Poppins','Playfair Display', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: brown;
}

a {
  text-decoration:none;
  cursor: pointer;
}

ul {
    list-style:none;
}

button {
  border: none;
 
}
`;
