'use client'

import CharactersCardView from "../../components/Characters/CharactersCardView"
import { useCharacters } from "../api/client/characters/charactersAPI"

const Characters = (props: any) => {
  const { data, isLoading } = useCharacters()
  return <CharactersCardView data={data || []} isLoading={isLoading}/>
}

export default Characters