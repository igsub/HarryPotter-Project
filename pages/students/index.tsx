'use client'

import CharactersCardView from "../../components/Characters/CharactersCardView"
import { useStudents } from "../api/client/characters/charactersAPI"

const Students = (props: any) => {
  const { data, isLoading } = useStudents()
  return <CharactersCardView data={data || []} isLoading={isLoading} />
}

export default Students