'use client'

import { useState } from "react"
import CharacterCard from "../../components/CharacterCard"
import LoadingCharacterCard from "../../components/LoadingCharacterCard"
import SearchBar from "../../components/SearchBar"
import { useStudents } from "../api/characters/charactersAPI"
import { Character } from "../api/characters/types"

const Students = (props: any) => {
  const characters = useStudents()
  const [searchText, setSearchText] = useState("")

  return (
  <div className="">
    <SearchBar searchText={searchText} setSearchText={setSearchText} />
    <div className="flex flex-row flex-wrap justify-evenly">
      {characters.isLoading ? 
        <LoadingCharacterCard count={6}/>
      : characters.data?.map((character: Character) => <CharacterCard character={character} />)}
    </div>
  </div>)
}

export default Students