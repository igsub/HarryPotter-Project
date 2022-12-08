'use client'

import CharactersCardView from "../../components/CharactersCardView"
import { useCharacters } from "../api/characters/charactersAPI"

const Characters = (props: any) => {
  const { data, isLoading } = useCharacters()
  return <CharactersCardView data={data || []} isLoading={isLoading} />
}

export default Characters