import { useQuery } from 'react-query'
import { Character } from './types'

const getCharacters = async () => {
  const response = await fetch('https://hp-api.onrender.com/api/characters')
  return response.json()
}

export const useCharacters = () => {
  return useQuery<Character[], Error>('characters', getCharacters)
}

const getStudents = async () => {
  const response = await fetch('https://hp-api.onrender.com/api/characters/students')
  return response.json()
}

export const useStudents = () => {
  return useQuery<Character[], Error>('students', getStudents)
}

const getStaff = async () => {
  const response = await fetch('https://hp-api.onrender.com/api/characters/staff')
  return response.json()
}

export const useStaff = () => {
  return useQuery<Character[], Error>('staff', getStaff)
}