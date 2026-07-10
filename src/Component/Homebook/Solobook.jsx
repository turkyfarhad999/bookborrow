import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// {
//     "id": 1,
//     "title": "The Alchemist",
//     "author": "Paulo Coelho",
//     "description": "A philosophical novel about a shepherd named Santiago who dreams of discovering his personal legend.",
//     "category": "Story",
//     "available_quantity": 15,
//     "image_url": "https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg"
//   },
const Solobook = ({book}) => {
    console.log(book)
    return (
        <div className='mx-auto h-full aura aura-dual'>
           <div className="card bg-base-100 w-90 shadow-sm h-full flex flex flex-col">
  <figure>
    <Image
      src={book.image_url}
      width={150}
      height={200}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {book.title}
      <div className="badge badge-secondary bg-black text-white border-none">{book.category}</div>
    </h2>
    <p className='text-gray-500'>{book.description}</p>
    <div className="card-actions justify-end">
     <Link className='btn bg-black text-white' href={`/book/${book.id}`}>View Details</Link>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Solobook;