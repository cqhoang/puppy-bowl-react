import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../api";
import CreateNewPlayer from "./CreateNewPlayer";
import PlayerName from "./PlayerName";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    async function getPlayers() {
      try {
        const result = await fetchAllPlayers();
        if (!result.ok) {
          throw new Error("Failed to fetch players");
        } else {
          setPlayers(result.data.players);
        }
      } catch (error) {
        setError(error.message);
      }
    }
    getPlayers();
  }, [error]);

  const displayPlayers = searchParam
    ? players.filter((player) =>
        player.name.toLowerCase().includes(searchParam)
      )
    : players;

  return (
    <div>
      <div>
        <label>
          Player Search:{" "}
          <input
            type="text"
            onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
          />
        </label>
      </div>
      <CreateNewPlayer players={players} setPlayers={setPlayers} />
      {error && <p>{error}</p>}
      {displayPlayers.map((player) => (
        <PlayerName key={player.id} player={player} />
      ))}
    </div>
  );
}
