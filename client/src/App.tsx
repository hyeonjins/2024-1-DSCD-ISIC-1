// import { useState } from 'react'
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
