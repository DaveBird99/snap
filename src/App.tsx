import { useDeck } from "./hooks/useDeck";

function App() {
  const {deck, setDeck} = useDeck()
  return (
    <div>
      <h1>Snap</h1>
    </div>
  );
}

export default App;
