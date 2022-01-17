import { Player } from "components/music-payer";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Wellcome } from "./modules/wellcome";
import { Battle } from "./modules/battle";
import { Info } from "./modules/info";

import { ScreenLoader } from "components/screen-loader";
import { AppContainer } from "styles";

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Wellcome />} />
        <Route path="/battle" element={<Battle />} />
        <Route path="/info/:heroId" element={<Info />} />
      </Routes>
      <Player />
      <ScreenLoader />
    </AppContainer>
  );
}

export default App;
