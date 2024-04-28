import React from "react";
import { useNavigate } from "react-router-dom";

export default function PlayerName({ player }) {
  const navigate = useNavigate();
  return (
    <div>
      <h2>{player.name}</h2>
      <button onClick={() => navigate(`/${player.id}`)}>
        See Player Details
      </button>
    </div>
  );
}
