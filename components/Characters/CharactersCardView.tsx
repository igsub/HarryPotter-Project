'use client'

import { useEffect, useState } from "react";
import { Character } from "../../pages/api/client/characters/types"
import CharacterCard from "./CharacterCard";
import LoadingCharacterCard from "./LoadingCharacterCard";
import SearchBar from "../SearchBar";
import CharacterDetailComponent from "./CharacterDetailComponent";
import { MdArrowBackIosNew } from "react-icons/md"

interface ICharactersCardView {
    data: Character[];
    isLoading: boolean;
}

const CharactersCardView = ({ data, isLoading }: ICharactersCardView) => {
    const [searchText, setSearchText] = useState("")
    const [currentPage, setCurrentPage] = useState(0)
    const [pageSize, setPageSize] = useState(12)
    const [filteredData, setFilteredData] = useState([] as Character[])
    const [pageCount, setPageCount] = useState(0)
    const [currentCharacter, setCurrentCharacter] = useState({} as Character)

    useEffect(() => {
      if (data && !isLoading) {
        setPageCount(Math.ceil(data.length / pageSize))
        setFilteredData(data.slice(currentPage * pageSize, currentPage * pageSize + pageSize))
      }
    }, [data])

    const filterCondition = (c: Character) => {
      return c.name.toLowerCase().includes(searchText.toLowerCase())
    };

    const onSearchTextChange = (value: string) => {
      setSearchText(value)
      const newFilteredData = data.filter(c => filterCondition(c))
      setFilteredData(newFilteredData)
    }

    const onBackPageClick = () => {
      if (currentPage > 0) {
        const newPage = currentPage - 1
        setCurrentPage(newPage)
        setFilteredData(data.slice(newPage * pageSize, newPage * pageSize + pageSize))
      }    
    }

    const onNextPageCLick = () => {
      if (currentPage < pageCount) {
        const newPage = currentPage + 1
        setCurrentPage(newPage)
        setFilteredData(data.slice(newPage * pageSize, newPage * pageSize + pageSize))
      }
    }

    const onCardClick = (character: Character) => {
      setCurrentCharacter(character)
    }

    const onBackArrowClick = () => {
      setCurrentCharacter({} as Character)
    }

    return (
      <div className={`flex flex-col min-h-screen w-full ${currentCharacter.name ? "justify-start" : " justify-center"}`}>
        {currentCharacter && currentCharacter.name ?
          <CharacterDetailComponent data={currentCharacter} onBack={onBackArrowClick}/>
        : <>
          <div className="flex justify-center">
            <SearchBar searchText={searchText} setSearchText={onSearchTextChange} />
          </div> 
          <div className="flex flex-row flex-wrap justify-evenly mb-auto">
            {isLoading && !(filteredData.length > 0) ? 
              <LoadingCharacterCard count={6} /> 
              : filteredData?.map((character: Character) => <CharacterCard character={character} onClick={onCardClick} />)}
          </div>
          <div className="flex justify-center">
              <nav aria-label="Page navigation example">
              <ul className="inline-flex items-center -space-x-px">
                  <li key="previous">
                    <a onClick={() => onBackPageClick()} className="cursor-pointer block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span className="sr-only">Previous</span>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    </a>
                  </li>
                  <li key="page">
                    <a aria-current="page" className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{`${currentPage} / ${pageCount}`}</a>
                  </li>
                  <li key="next">
                    <a onClick={() => onNextPageCLick()} className="cursor-pointer block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span className="sr-only">Next</span>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    </a>
                  </li>
              </ul>
              </nav>

          </div>
        </>}
      </div>
    );
}

export default CharactersCardView