import { useNavigate } from "react-router-dom";
import { deletePlayer } from "../api";

export default function PlayerCard({ player }) {
  const navigate = useNavigate();

  async function handleDelete() {
    try {
      const result = await deletePlayer(player.id);
      console.log(JSON.stringify(result));
      navigate("/AllPlayers");
    } catch (error) {
      console.error("Error deleting player:", error);
    }
  }

  return (
    <div className="player-card">
      <h2>{player.name}</h2>
      <p>Breed: {player.breed}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
