'use client'

import CharactersCardView from "../../components/CharactersCardView"
import { useStudents } from "../api/characters/charactersAPI"

const Students = (props: any) => {
  const { data, isLoading } = useStudents()
  return <CharactersCardView data={data || []} isLoading={isLoading} />
}

export default Students