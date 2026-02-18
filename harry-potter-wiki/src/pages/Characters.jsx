import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchCharacters } from '../../../../e-com/src/features/products/characters/characterApi'

const Characters = () => {
    const {data : characters, isLoading, error} = useQuery({
        queryKey : ["characters"],
        queryFn : fetchCharacters,
        staleTime: 5 * 60 * 5,
    }) 
  return (
    <div className='mx-4 my-4'>
        <h1 className='text-4xl font-bold text-yellow-600 text-center mb-10 py-4'>Characters</h1>
        <div className='character-content mt-4'>
            {isLoading && <p>Loading...</p>}
            {characters && characters.map((item)=>(
                <div className='char-box' key={item.index}>
                    <img src={item.image} alt={item.fullName} />
                    <div className="details">
                        <strong>{item.fullName}</strong>
                        <p>House : {item.hogwartsHouse}</p>
                        <p>Actor : {item.interpretedBy}</p>
                        <p>DOB : {item.birthdate}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Characters