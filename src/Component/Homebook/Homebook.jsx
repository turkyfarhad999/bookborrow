import bookData from '@/Data/book.json';
import Solobook from './Solobook';
import Link from 'next/link';

const Homebook =() => {
    
    // console.log(bookData)
    return (
        <div className='container mx-auto  py-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 container mx-auto gap-1 items-stretch my-6 '>
           {bookData.slice(0,4).map((book,index)=><Solobook book={book} key={index}></Solobook>)}
          
        </div>
            <Link className='btn bg-black text-white' href={'/books'}>See more ...</Link>
        </div>
    );
};

export default Homebook;