import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../features/books/booksSlice';

const Books = () => {
  const dispatch = useDispatch();
  const { items: books, status, error, lastFetched } = useSelector((state) => state.books);

  useEffect(() => {
    const cacheTime = 5 * 60 * 1000; 
    const shouldFetch = !lastFetched || (Date.now() - lastFetched > cacheTime);
    
    if (shouldFetch && status === 'idle') {
      dispatch(fetchBooks());
    }
  }, [dispatch, status, lastFetched]);

  const handleRefresh = () => {
    dispatch(fetchBooks());
  };

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className=" rounded-full h-32 w-32 "></div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="text-center py-8">
        <p className="text-red-600 mb-4">Error: {error}</p>
        <button
          onClick={handleRefresh}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-transparent container m-auto min-w-screen px-10 py-8 backdrop-blur-sm bg-opacity-95 rounded-2xl shadow-2xl">
      <div className="flex justify-center mb-8 text-center">
        <h1 className="text-4xl font-bold text-yellow-600 text-center">Books</h1>

      </div>
      
      {lastFetched && (
       <div className='flex flex-row justify-between p-2'>
        <p className="text-gray-200 mb-4">
          Last updated: {new Date(lastFetched).toLocaleTimeString()}
        </p>
        <button
          onClick={handleRefresh}
          className="bg-amber-950 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors"
        >
          Refetch Books
        </button>
       </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
        {books.map((book) => (
          <div key={book.id} className="bg-gray-950 rounded-lg shadow-lg p-6 border-indigo-950">
            <h3 className="text-xl font-semibold text-gray-200 mb-2">{book.title}</h3>
            <div className="space-y-2 text-gray-300">
              <p className="font-medium">{book.title}</p>
              <p className="font-medium">Release Date: {book.releaseDate}</p>
              
            </div>
            {book.description && (
              <p className="mt-4 text-gray-400 text-sm">
                {book.description}
              </p>
            )}
            <p className="font-medium">Pages: {book.pages}</p>
          </div>
        ))}
      </div>

      {books.length === 0 && status === 'succeeded' && (
        <div className="text-center py-8">
          <p className="text-gray-600">No books found.</p>
        </div>
      )}
    </div>
  );
};

export default Books;