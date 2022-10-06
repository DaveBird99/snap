import { useState } from "react"

const suits = ["heart", "spade", "club", "diamond"]
type Suit = typeof suits[number]

export interface Card {
    number: number,
    suit: Suit
}

interface PopType {
    (): Card | undefined
}
interface AddType {
    (card: Card): void
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
        newDeck = shuffle(newDeck)
        return newDeck
    }
    return []
}

export const useDeck = (fill:Boolean = true) => {
    const [deck, setDeck] = useState(defaultDeck(fill))

    const pop: PopType = () => {
        if (!deck || deck.length == 0) return undefined
        const newDeck = [...deck]
        const topCard = newDeck.shift()
        if (newDeck) setDeck(newDeck)
        return topCard
    }

    const add: AddType = (card: Card) => {
        if (!deck) {
            setDeck([card])
            return
        }
        const newDeck = [card, ...deck]
        setDeck(newDeck)
        return newDeck
    }

    return {deck, topCard: deck.length ? deck[0] : undefined, setDeck, pop, add}
}