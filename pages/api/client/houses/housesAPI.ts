import { useQuery } from "react-query"

export const getHouses = async () => {
  const response = await fetch('https://wizard-world-api.herokuapp.com/houses')
  return response.json()
}

export const getHouse = async (id: string) => {
  const response = await fetch(`https://wizard-world-api.herokuapp.com/houses/${id}`)
  return response.json()
}