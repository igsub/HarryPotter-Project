import React from 'react'
import { useRouter } from 'next/router'
import { getHouse } from '../../api/client/houses/housesAPI'
import { House } from '../../api/client/houses/types'
import ReactJson from 'react-json-view'


export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "0367baf3-1cb6-4baf-bede-48e17e1cd005" } },
      { params: { id: "805fd37a-65ae-4fe5-b336-d767b8b7c73a" } },
      { params: { id: "85af6295-fd01-4170-a10b-963dd51dce14" } },
      { params: { id: "a9704c47-f92e-40a4-8771-ed1899c9b9c1" } },
    ],
    fallback: true
  }
}

export async function getStaticProps(props: any) {
  const house = await getHouse(props.params.id)
  return { props: { house } }
}

const HouseDetail = (props: { house: House }) => {
  console.log("house", props.house)
  const house = props.house
  return (
    <div className='grid sm:grid-cols-1 sm:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1'>
      {house ? 
        <div className='grid items-center justify-items-center'>
          <img src={`/${house.name}.png`} alt={house.name} className="gird p-4 object-contain lg:w-96 lg:h-96 sm:w-72 sm:h-72"/> 
        </div>
      : null }
      <div className='grid rounded-lg'>
        {/* <div className='p-8'> */}
          <ReactJson src={house} collapsed={2} style={{padding: "2rem", borderRadius: "1rem"}}theme={"twilight"} /> 
        {/* </div> */}
      </div>
    </div>
  )
}

export default HouseDetail