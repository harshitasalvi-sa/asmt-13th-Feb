import { useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { fetchHousesAPI } from '../features/houses/housesAPI';

const Houses = () => {
  const queryClient = useQueryClient();

    const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["houses"],
    queryFn: fetchHousesAPI,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading Hogwarts Houses...
      </div>
    );

  if (isError)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error: {error.message}
      </div>
    );

  return (
    <div className="min-h-screen  p-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-yellow-600">
        Hogwarts Houses
      </h1>

      {isFetching && (
        <p className="text-center text-sm text-gray-400 mb-4">
          Updating houses...
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-12">
        {data.map((house, index) => (
          <div
  key={index}
  className="bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300"
>
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-2xl font-bold text-yellow-600">
      <span className="text-3xl">{house.emoji}</span> {house.house}
    </h2>
 
  </div>

  <p className="text-gray-300 mb-2">
    <span className="font-semibold text-white">Founder:</span>{" "}
    {house.founder}
  </p>

  <p className="text-gray-300 mb-4">
    <span className="font-semibold text-white">Animal:</span>{" "}
    {house.animal}
  </p>

  <div className="flex gap-2 flex-wrap">
    {house.colors.map((color, i) => (
      <span
        key={i}
        className="px-3 py-1 text-sm rounded-full bg-gray-700 text-white capitalize"
      >
        {color}
      </span>
    ))}
  </div>
</div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() =>
            queryClient.invalidateQueries({ queryKey: ["houses"] })
          }
          className="px-6 py-3 bg-yellow-600 text-black rounded-lg hover:bg-yellow-400 transition"
        >
          Invalidate Query
        </button>
      </div>
    </div>

  )
}

export default Houses