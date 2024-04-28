import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSinglePlayer } from "../api";

export default function SinglePlayer() {
  const { id } = useParams();

  const [player, setPlayer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getSinglePlayer() {
      try {
        const result = await fetchSinglePlayer(id);
        if (!result.ok) {
          throw new Error(result.statusText);
        } else {
          setPlayer(result.data.player);
        }
      } catch (error) {
        setError(error.message);
      }
    }
    getSinglePlayer();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {player && (
        <div>
          <h2>Player Details</h2>
          <p>Name: {player.name}</p>
          <p>Breed: {player.breed}</p>
        </div>
      )}
    </div>
  );
}
