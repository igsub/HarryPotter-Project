'use client'

import { Character } from "../../pages/api/client/characters/types";

interface ICharacterCardProps {
  character: Character;
  onClick: (character: Character) => void;
}

const CharacterCard = ({ character, onClick }: ICharacterCardProps) => {

  return <div className="flex flex-col sm:m-0 md:m-8 shrink-0 overflow-hidden w-48 h-96 rounded-lg shadow-lg shadow-background-light bg-background-dark md:transition md:duration-500 md:hover:scale-125">
    <img onClick={() => onClick(character)} className={`justify-center cursor-pointer w-48 h-56 object-cover ${!character.image && "opacity-50"}`} src={character.image || '/harry-potter-200-white.png'} alt="image"/>
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-white">{character.name}</div>
      <div className="flex justify-start flex-col">  
        <p className="text-white text-sm italic mb-2">{character.house}</p>
        <div className="flex">
          <p className="text-white text-sm font-semibold m-0 p-0">Born:&nbsp;</p>
          <p className="text-white text-sm italic">{character.dateOfBirth || character.yearOfBirth || 'unknown'}</p>
        </div>
      </div>
    </div>
  </div>
  
}

export default CharacterCard