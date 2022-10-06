import { useState } from "react"

export const usePlayer = (name:string) => {
    const [playerName, _] = useState(name)
    const [score, setScore] = useState(0)

    return { playerName, score, setScore }
}