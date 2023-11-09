import React, { useState } from "react";
import "./App.css";
import Page from "./components/Page";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Page />
    </RecoilRoot>
  );
}

export default App;
