import { useState } from "react";
import { createPlayer } from "../api";

export default function CreateNewPlayer({ players, setPlayers }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await createPlayer(name, breed);
      if (!result.ok) {
        throw new Error(result.statusText);
      } else {
        setPlayers(result.data.players);
        setSuccessMessage("Player created");
        setName("");
        setBreed("");
      }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
      <label>Name: </label>
      <input
        value={name}
        type="text"
        name="name"
        id="name"
        onChange={(e) => setName(e.target.value)}
      />
      <label>Breed: </label>
      <input
        value={breed}
        type="text"
        name="breed"
        id="breed"
        onChange={(e) => setBreed(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
