'use client'

import CharactersCardView from "../../components/CharactersCardView"
import { useStaff } from "../api/characters/charactersAPI"

const Staff = (props: any) => {
  const { data, isLoading } = useStaff()
  return <CharactersCardView data={data || []} isLoading={isLoading} />
}

export default Staff