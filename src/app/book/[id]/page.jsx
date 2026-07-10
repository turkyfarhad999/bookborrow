
import React from 'react';
import books from'@/Data/book.json'
import Image from 'next/image';
import { toast } from 'react-toastify';
import Buttonbook from '@/Component/solobutton/Buttonbook';
// {
//     "id": 1,
//     "title": "The Alchemist",
//     "author": "Paulo Coelho",
//     "description": "A philosophical novel about a shepherd named Santiago who dreams of discovering his personal legend.",
//     "category": "Story",
//     "available_quantity": 15,
//     "image_url": "https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg"
//   },
const page = async({params}) => {
 
    const param= await params
    
    const book=books.find(bk=>bk.id===Number(param.id))
    console.log(book)
    return (
        <div className='bg-white '>
       <div className="hero bg-base-300 text-black min-h-screen/2 container mx-auto my-24 py-10 rounded-3xl">
  <div className="flex flex-col lg:flex-row justify-between items-center gap-8  mx-auto px-4 py-10 ">
    <Image
      src={book.image_url}
      width={350}
      height={400}
      alt='turky'
      className="max-w-sm rounded-3xl shadow-2xl border "
    />
    <div>
      <h1 className="text-5xl font-bold">{book.title}</h1>
      <h1 className="text-2xl font-semibold">{book.author}</h1>
      <h1 className="text-gray-700 ">Available : {book.available_quantity}</h1>
      <p className="py-6">
       {book.description}.
      </p>
      <Buttonbook></Buttonbook>
    </div>
  </div>
</div>
</div>
    );
};

export default page;