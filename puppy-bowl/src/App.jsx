import { Routes, Route } from "react-router-dom";
import "./App.css";

import AllPlayers from "./components/AllPlayers";
import CreateNewPlayer from "./components/CreateNewPlayer";
import Navigation from "./components/Navigation";
import SinglePlayer from "./components/SinglePlayer";

function App() {
  return (
    <div>
      <h1>Puppy Bowl</h1>
      <Navigation />
      <Routes>
        <Route path="/AllPlayers" element={<AllPlayers />} />
        <Route path="/CreateNewPlayer" element={<CreateNewPlayer />} />
        <Route path="/SinglePlayer" element={<SinglePlayer />} />
      </Routes>
    </div>
  );
}

export default App;
