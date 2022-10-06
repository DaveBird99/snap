import { Card, useDeck } from "./hooks/useDeck";

function App() {
  const deck1 = useDeck()
    const deck2 = useDeck(false)

  const cardDiv = (card: Card | undefined) => {
    if (!card) return <div></div>

    return <div>
        {card.number}, {card.suit}
    </div>
  }

  return (
    <div>
      <h1>Snap</h1>
      <p>Deck1 top card:{cardDiv(deck1.topCard)}</p>
      <p>Deck2 top card:{cardDiv(deck2.topCard)}</p>
    </div>
  );
}

export default App;
