import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "lib/context/ThemeContext";
import { NavigationProvider } from "lib/context/NavigationContext";
import Container from "components/layout/Container";
import navigation from "lib/navigation";

const App = props => (
  <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? "/settings" : "/"}>
    <ThemeProvider>
      <NavigationProvider navigation={navigation}>
        <Container {...props} />
      </NavigationProvider>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
