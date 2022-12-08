import { Character } from "../pages/api/characters/types";

interface ICharacterCardProps {
  character: Character
}

const CharacterCard = ({ character }: ICharacterCardProps) => {

  return <div className="flex flex-col m-4 shrink-0 w-48 h-96 rounded-lg overflow-hidden shadow-lg shadow-background-light bg-background-dark">
    <img className={`justify-center w-48 h-56 object-cover ${!character.image && "opacity-50"}`} src={character.image || '/harry-potter-200-white.png'} alt="image"/>
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-white">{character.name}</div>
      <div className="flex justify-start flex-col">  
        <p className="text-white text-sm italic mb-2">{character.house}</p>
        <div className="flex">
          <p className="text-white text-sm font-semibold m-0 p-0">Born:&nbsp;</p>
          <p className="text-white text-sm italic">{character.dateOfBirth || character.yearOfBirth || 'unknown'}</p>
        </div>
        <p>{character.patronus}</p>
          
      </div>
    </div>
  </div>
  
}

export default CharacterCard