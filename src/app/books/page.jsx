'use client';

import { useState, useMemo } from 'react';
import books from '@/Data/book.json';
import BookfromBook from '@/Component/BookBook/BookfromBook';

const Page = () => {
  const [query, setQuery] = useState('');

 
  const filteredBooks = useMemo(() => {
    if (!query.trim()) return books;

    const lowerQuery = query.toLowerCase();

    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(lowerQuery) ||
        book.author.toLowerCase().includes(lowerQuery) ||
        book.category.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="join my-4 border-none">
          <div className='aura aura-dual text-black mx-auto'>
            <label className="input join-item border-none outline outline-base-200 ">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="text"
                placeholder="Enter Name,Writer or category ..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
          </div>
          {query && (
            <button
              className="btn btn-neutral join-item mx-2"
              onClick={() => setQuery('')}
            >
              Clear
            </button>
          )}
        </div>

        <p className="text-sm text-gray-500">
          {filteredBooks.length} books are found
        </p>
      </div>

      <div className="bg-white items-stretch grid grid-cols-1 md:grid-cols-4 container mx-auto gap-1 my-6">
        {filteredBooks.map((book) => (
          <BookfromBook book={book} key={book.id} />
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <p className="text-center text-gray-400 py-12">
          No Books found
        </p>
      )}
    </div>
  );
};

export default Page;