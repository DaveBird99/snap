import { useEffect, useState } from "react";
import { Card, useDeck } from "./hooks/useDeck";
import { usePlayer } from "./hooks/usePlayer";

function App() {
  const deck1 = useDeck()
  const deck2 = useDeck(false)
  const player1 = usePlayer('Alice')
  const player2 = usePlayer('Bob')

  const [interval, setInterval] = useState(1000)

  // When the card is flipped
  useEffect(() => {
    if (!deck1.topCard || !deck2.topCard) return

    const cardsMatch = (deck1.topCard?.number == deck2.topCard?.number)
    if (!cardsMatch) return

    // Randomly select winner of round
    const x = (Math.floor(Math.random() * 2) == 0)
    if (x) {
        player1.setScore(player1.score+1)
        return 
    }
    player2.setScore(player2.score+1)

  }, [deck1.topCard])

  const moveCard = () => {
    setTimeout(function (){
        const card = deck1.pop()
        if (card) {
            deck2.add(card) 
        }
    }, interval);
  }

  useEffect(() => {
    moveCard()
  }, [])

  useEffect(() => {
    if (!deck2.deck.length) return
    moveCard()
  }, [deck2])

  const cardDiv = (card: Card | undefined) => {
    if (!card) return <div></div>

    return <div>
        {card.number}, {card.suit}
    </div>
  }
  const result = () => {
    if (player1.score > player2.score) return `${player1.playerName} wins`
    if (player1.score < player2.score) return `${player2.playerName} wins`
    return 'Draw'
  }

  return (
    <div>
      <h1>Snap</h1>
      <p>{player1.playerName}: {player1.score}</p>
      <p>{player2.playerName}: {player2.score}</p>
      <p>Deck1 top card:{cardDiv(deck1.topCard)}</p>
      <p>Deck2 top card:{cardDiv(deck2.topCard)}</p>
      <p>{!deck1.deck.length ? `Game Over! ${result()}` : ''}</p>
    </div>
  );
}

export default App