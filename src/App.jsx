import { useState } from "react";
import AppName from "./component/AppName";
import AppInputButton from "./component/AppInputButton";

import "./App.css";

function App() {

  return (
    <>
      <div className="main-container">
        <AppName></AppName>
        <AppInputButton></AppInputButton>
        
      </div>
    </>
  );
}

export default App;
