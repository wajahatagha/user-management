import React from "react";
import Routers from "./Route";
import AnimationThemeProvider from "./_helper/AnimationTheme/AnimationThemeProvider";
import CustomizerProvider from "./_helper/Customizer/CustomizerProvider";
import { useParams } from "react-router";

const App = () => (

  <div className="App">
    <CustomizerProvider>
      <AnimationThemeProvider>
        <Routers />
      </AnimationThemeProvider>
    </CustomizerProvider>
  </div>
);

export default App;
