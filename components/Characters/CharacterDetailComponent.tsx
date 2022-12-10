import { Character } from "../../pages/api/client/characters/types"
import { MdArrowBackIosNew } from "react-icons/md"
import { fieldTranslate } from "../../utils/translations";

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
    
    const characterData = parsedData.filter(i => i.value && i.key).map(item => ( 
            <div className="flex sm:w-full lg:w-1/3 flex-row p-4">
                <p className="font-bold text-lg">{item.key}: &nbsp;</p>
                <p className="italic text-lg">{item.value}</p>
            </div>
        ))

    return (<>
    <div className="pb-4 flex w-full justify-between text-white">
        {/* <div className="flex flex-row align-center flex-wrap"> */}
            <h1 className="flex self-center text-2xl pl-2">{data.name}</h1>
            <button onClick={onBack} className="flex align-center rounded cursor-pointer px-4 py-2 text-white bg-background-dark hover:bg-background-light">
                <div className="flex self-center mr-2">
                    <MdArrowBackIosNew className="flex"/>
                </div>  
                <span className="flex text-lg">Back</span>
            </button>
        {/* </div> */}
    </div>
    <div className="flex sm:flex-col lg:flex-row bg-background-dark shadow-lg shadow-background-light rounded-lg text-white">
        <div className="sm:object-contain lg:contents">
            <img src={data.image || '/harry-potter-200-white.png'} alt="image" className={`flex rounded-l-lg object-contain object-top p-4 ${data.image ? "h-96" : "h-80"}`} />
        </div>
        <div className="flex flex-wrap sm:justify-center lg:justify-start h-1/2">
            {characterData}
        </div>
    </div>
    </>)
}

export default CharacterDetailComponent