import Image from 'next/image';
import React from 'react';

//   {
//     "id": 1,
//     "name": "Ayesha Rahman",
//     "role": "Regular Reader",
//     "quote": "এই বই আমার জীবন বদলে দিয়েছে। The Alchemist পড়ার পর নিজের স্বপ্নগুলোকে নতুন করে চিনতে পেরেছি।",
//     "avatar": "https://randomuser.me/api/portraits/women/44.jpg",
//     "rating": 5
//   },
const Reviewsolo = ({rev}) => {
    // console.log(rev)
    return (
        <div className='flex py-10 px-5 bg-base-200 rounded-3xl'>
          <Image 
          src={rev.avatar} 
          width={100}
          height={15}
          alt={rev.name}
          className='rounded-full max-w-[30%]' />
           <div className="chat-bubble bg-base-200 text-gray-600 py-2 px-5">
                 <p className='font-semibold text-black'>{rev.name}</p>
                {rev.quote}
            </div>
        </div>
    );
};

export default Reviewsolo;