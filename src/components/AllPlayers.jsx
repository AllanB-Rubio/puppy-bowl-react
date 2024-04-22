import { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";
import { fetchAllPlayers } from "../API";

const cohortCode = "2401-FTB-MT-WEB-PT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortCode}`;

function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const playersData = await fetchAllPlayers();
        setPlayers(playersData);
        setFilteredPlayers(playersData);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };
    fetchPlayers();
  }, []);

  const removePlayer = async (idToRemove) => {
    const updatedPlayers = players.filter((player) => player.id !== idToRemove);
    setPlayers(updatedPlayers);
    setFilteredPlayers(updatedPlayers);

    try {
      await fetch(`${API_URL}/players/${idToRemove}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error removing player:", error);
    }
  };

  const handleInputChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredPlayers = players.filter((player) =>
      player.name.toLowerCase().includes(searchTerm)
    );
    setFilteredPlayers(filteredPlayers);
  };

  return (
    <>
      <form>
        <input onChange={handleInputChange} placeholder="Search by name" />
      </form>
      {filteredPlayers.map((player) => (
        <PlayerCard
          key={player.id}
          player={player}
          removePlayer={removePlayer}
          className="PlayerCard"
        />
      ))}
    </>
  );
}

export default AllPlayers;
