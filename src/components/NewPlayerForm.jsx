import { useState } from "react";
import PlayerCard from "./PlayerCard";

const cohortCode = "2401-FTB-MT-WEB-PT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortCode}`;

export function NewPlayerForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState();
  const [players, setPlayers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPlayer = {
      name: name,
      breed: breed,
      status: status,
      imageUrl: imageUrl,
    };

    try {
      const response = await fetch(`${API_URL}/players`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlayer),
      });

      if (response.ok) {
        setName("");
        setBreed("");
        setImageUrl("");
        setStatus("");

        setPlayers([...players, newPlayer]);


      } else {
        console.error(
          "Failed to add player. Server responded with status:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error adding player:", error);
    }
  };

  const handleRemovePlayer = (id) => {
    setPlayers(players.filter((player) => player.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          required
          id="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Breed:</label>
        <input
          type="text"
          required
          id="name"
          name="name"
          placeholder="Breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />

        <label>Status:</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="bench">Bench</option>
          <option value="field">Field</option>
        </select>

        <label>Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <button type="submit">Add Player</button>
      </form>

      <div>
        {players.map((player, index) => (
          <PlayerCard
            key={index}
            player={player}
            removePlayer={handleRemovePlayer}
          />
        ))}
      </div>
    </div>
  );
}
