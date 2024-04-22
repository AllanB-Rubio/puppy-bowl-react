import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import { NewPlayerForm } from "./components/NewPlayerForm";
import NavBar from "./components/NavBar";
import PlayerCard from "./components/PlayerCard";
import "./App.css";

function App() {
  return (
    <>
      <h1>Puppy Bowl</h1>
      <NavBar />
      <NewPlayerForm />

      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players" element={<AllPlayers />} />
        <Route path="/players/:playerId" element={<SinglePlayer />} />
        <Route path="/new-player" element={<NewPlayerForm />} />
        <Route path="/players/:playerId" element={<PlayerCard />} />
      </Routes>
    </>
  );
}

export default App;
