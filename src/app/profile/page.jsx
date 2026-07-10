import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const page = async() => {
    const session = await auth.api.getSession({
            headers: await headers()
        })
        console.log(session)
    return (
        <div className='bg-white'>
            <div className="card w-[100%] bg-base-100 card-md shadow-sm text-black mx-auto my-32 px-32">
  <div className="card-body"><div className='flex flex-col md:flex-row items-center justify-between'>
    <Image
    src={session.user.image}
    width={200}
    height={200}
    alt='image' className='rounded-2xl'/>
    <div>
    <h2 className="card-title">Name:{session.user.name}</h2>
    <p>Email:{session.user.email}</p></div> </div>
    
    <div className="justify-end card-actions">
      <button className="btn bg-black text-white">change information</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default page;