import React from 'react'
import { getHouses } from '../api/client/houses/housesAPI'
import { House } from '../api/client/houses/types'
import { useRouter } from 'next/router'

interface IHousesProps {
  houses: House[]
}

export async function getStaticProps() {
  const houses = await getHouses()
  return { props: { houses } }
}

const Houses = ({ houses }: IHousesProps) => {
  const router = useRouter()
  const mapedImgs = houses.map(house => ({
    ...house,
    img: `/${house.name}.png`
  }))

  const handleImgClick = (id: string) => {
    router.push(`/houses/${id}`)
  }

  return (
  <div className='flex w-full'> 
    <div className='flex w-full justify-center'>
      <div className='grid sm:grid-cols-1 sm:grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 lg:grid-flow-col sm:grid-flow-row lg:self-center lg:w-3/4'>
        {mapedImgs.map((house, idx) => ( 
          <div className={`grid m-4 ${idx % 2 ? "lg:justify-end" : "lg:justify-start"}`}>
            <img onClick={() => handleImgClick(house.id)} src={house.img} alt={house.name} className="flex p-4 object-contain lg:w-96 lg:h-96 sm:w-72 sm:h-72 cursor-pointer transition duration-500 hover:scale-125"/>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Houses