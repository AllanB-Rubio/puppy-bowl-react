import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import "./App.css";
import { NewPlayerForm } from "./components/NewPlayerForm";
import NavBar from "./components/NavBar";
import PlayerCard from "./components/PlayerCard";


function App() {

  // TODO
  // Add try/catch around functions in useEffect
  // to handle errors
  // HINT: const [hasError, setHasError] = useState(false)
  
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
        <Route path="/players/:playerId" element={<PlayerCard/>} /> 

      </Routes>
    </>
  )
}

export default App;
