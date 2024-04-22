import React from "react";
import { useNavigate } from "react-router-dom";

function PlayerCard({ player, removePlayer }) {
  const navigate = useNavigate();

  const handleRemovePlayer = () => {
    removePlayer(player.id);
  };

  const handleSeeDetails = () => {
    navigate(`/players/${player.id}`);
  };

  return (
    <div className="PlayerCard">
      <div>
        <p>{`Name: ${player.name}`}</p>
        <p>{`ID: ${player.id}`}</p>
        <p>{`Team: ${player.teamId}`}</p>
        <img src={player.imageUrl} alt={`photo of ${player.name} the puppy`} />
      </div>
    
      <button onClick={handleSeeDetails}>See details</button>
      <button onClick={handleRemovePlayer}>Remove from roster</button>
    </div>
  );
}

export default PlayerCard;
