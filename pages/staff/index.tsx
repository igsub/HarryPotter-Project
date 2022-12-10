'use client'

import CharactersCardView from "../../components/Characters/CharactersCardView"
import { useStaff } from "../api/client/characters/charactersAPI"

const Staff = (props: any) => {
  const { data, isLoading } = useStaff()
  return <CharactersCardView data={data || []} isLoading={isLoading} />
}

export default Staff