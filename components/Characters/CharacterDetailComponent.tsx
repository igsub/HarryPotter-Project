import { Character } from "../../pages/api/client/characters/types"
import { MdArrowBackIosNew } from "react-icons/md"
import { fieldTranslate } from "../../utils/translations";
import { RxMagicWand } from "react-icons/rx"
import { TiTick } from "react-icons/ti"
import { BsFillEyeFill } from "react-icons/bs"
import { GiWizardFace } from "react-icons/gi"
import { ImCross } from "react-icons/im"

interface ICharacterDetailComponent {
    data: Character;
    onBack: () => void;
}

const CharacterDetailComponent = ({ data, onBack }: ICharacterDetailComponent) => {
    const parsedData = Object.keys(data).map(key => {
        const value = data[key as keyof typeof data]
        return { 
            key: fieldTranslate[key as keyof typeof fieldTranslate], 
            value: typeof value !== "object" ? value : null
        } as { key: string, value: string | number | boolean }
    })
    const fieldRenderer = (label: string, value: any) => (
    <div className="flex p-2">
        <p className="font-semibold text-xl text-secondary-lighter">{label}: &nbsp;</p>
        <p className="italic text-xl">{value}</p>
    </div>)

    const characterData = (
        <div className="flex w-full">     
            <div className="p-2 flex flex-col">
                {fieldRenderer(fieldTranslate["actor"], data.actor)}
                {data.house && fieldRenderer(fieldTranslate["house"], data.house)}
                {(data.dateOfBirth || data.yearOfBirth) && fieldRenderer(fieldTranslate["dateOfBirth"], data.dateOfBirth || data.yearOfBirth)}
                {data.eyeColour && 
                <div className="flex p-2">
                    <BsFillEyeFill className="self-center" />
                    &nbsp;
                    <p className="italic text-xl">{data.eyeColour}</p>
                </div>}
                {data.hairColour && fieldRenderer("Hair Colour", data.hairColour)}
            </div> 
            
            <div className="flex m-4 p-4 justify-around items-center bg-background-light rounded-lg h-48">
                <div className="flex items-center p-4">
                    <GiWizardFace size={70} color="#0f172a"/>
                    {data.wizard ? <TiTick size={35} color="#4ade80"/> : <ImCross size={35} color="#f87171"/> }
                </div>
                {data.wand && (data.wand.core || data.wand.wood || data.wand.length) &&
                <div className="flex items-center p-4">
                    <RxMagicWand size={70} color="#0f172a"/>
                    <ul className="pl-4">
                        <li className="flex">
                            <p className="text-secondary-lighter">Core: </p>&nbsp;
                            {data.wand.core}
                        </li>
                        <li className="flex">
                            <p className="text-secondary-lighter">Wood: </p>&nbsp;
                            {data.wand.wood}
                        </li>
                        <li className="flex">
                            <p className="text-secondary-lighter">Length (inches): </p>&nbsp;
                            {data.wand.length}
                        </li>
                    </ul>
                </div>}
            </div>
        </div>
    )

    return (<>
    <div className="pb-4 flex w-full justify-between text-white">
        <h1 className="flex self-center text-4xl text-secondary-lighter pl-2">{data.name}</h1>
        <button onClick={onBack} className="flex align-center rounded cursor-pointer px-4 py-2 text-white bg-background-dark hover:bg-background-light">
            <div className="flex self-center mr-2">
                <MdArrowBackIosNew className="flex"/>
            </div>  
            <span className="flex text-lg self-center">Back</span>
        </button>
    </div>
    <div className="flex sm:flex-col sm:justify-center md:flex-row md:justify-start bg-background-dark shadow-lg shadow-background-light rounded-lg text-white">
        <div className="flex justify-center items-center align-center sm:object-contain lg:contents">
            <img src={data.image || '/harry-potter-200-white.png'} alt="image" className={`flex rounded-l-lg object-contain object-top p-4 ${data.image ? "h-96" : "h-80"}`} />
        </div>
        {characterData}
    </div>
    </>)
}

export default CharacterDetailComponent