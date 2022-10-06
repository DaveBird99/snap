import { useState } from "react"

const suits = ["heart", "spade", "club", "diamond"]
type Suit = typeof suits[number]

export interface Card {
    number: number,
    suit: Suit
}

export const useDeck = () => {
    const [deck, setDeck] = useState<Card[]>()

    return {deck, setDeck}
}