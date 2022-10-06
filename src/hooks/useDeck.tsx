import { useState } from "react"

const suits = ["heart", "spade", "club", "diamond"]
type Suit = typeof suits[number]

export interface Card {
    number: number,
    suit: Suit
}

const shuffle = (array: Card[]) => {
    let currentIndex = array.length,  randomIndex;
    
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    
    return array;
}

const defaultDeck = (fill:Boolean = true) => {
    if (fill) {
        const cardNumbers = Array.from(Array(13).keys()).map(n => n+1)
        let newDeck: Card[] = []
        cardNumbers.forEach(number => suits.forEach(suit => {
            const newCard: Card = {
                number,
                suit
            }
            newDeck.push(newCard)
        }))
        newDeck = [...newDeck, ...newDeck]
        newDeck = shuffle(newDeck)
        return newDeck
    }
    return []
}

export const useDeck = (fill:Boolean = true) => {
    const [deck, setDeck] = useState<Card[]>(defaultDeck(fill))

    return {deck, setDeck}
}