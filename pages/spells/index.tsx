import { useSpells } from "../api/client/spells/spellsAPI"


interface ISpellsProps {

}

const Spells = ({}: ISpellsProps) => {
  const { data, isLoading } = useSpells()
  
}

export default Spells