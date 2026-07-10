import review from '@/Data/review.json'
import Reviewsolo from './Reviewsolo';

const Review = () => {
    // console.log(review)
    return (
        <div className='container mx-auto my-10'>
             <h2 className='font-bold text-3xl'>Reviews</h2>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 my-10 px-5'>
           
            {review.map(rev=><Reviewsolo rev={rev} key={rev.id}></Reviewsolo>)}
        </div></div>
    );
};

export default Review;