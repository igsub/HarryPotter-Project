import { useQuery } from "react-query"
import { Spell } from "./types"

const getSpells = async () => {
  const response = await fetch('https://hp-api.onrender.com/api/spells')
  return response.json()
}

export const useSpells = () => {
  return useQuery<Spell[], Error>('characters', getSpells)
}