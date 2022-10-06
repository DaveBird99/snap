import { Card, useDeck } from "./hooks/useDeck";
import { usePlayer } from "./hooks/usePlayer";

function App() {
  const deck1 = useDeck()
  const deck2 = useDeck(false)
  const player1 = usePlayer('Alice')
  const player2 = usePlayer('Bob')

  const cardDiv = (card: Card | undefined) => {
    if (!card) return <div></div>

    return <div>
        {card.number}, {card.suit}
    </div>
  }

  return (
    <div>
      <h1>Snap</h1>
      <p>{player1.playerName}: {player1.score}</p>
      <p>{player2.playerName}: {player2.score}</p>
      <p>Deck1 top card:{cardDiv(deck1.topCard)}</p>
      <p>Deck2 top card:{cardDiv(deck2.topCard)}</p>
    </div>
  );
}

export default App