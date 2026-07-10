import Marquee from "react-fast-marquee";

const dataset=[
  {
    "id": 1,
    "text": "📚 New Arrival: The Silent Forest is now available!"
  },
  {
    "id": 2,
    "text": "🎉 Special Discount: Get 20% off on Premium Membership this week!"
  },
  {
    "id": 3,
    "text": "🔥 Trending: Mastering JavaScript is one of our most borrowed books."
  },
  {
    "id": 4,
    "text": "🚀 Coming Soon: Quantum Frontiers will be available next Monday!"
  },
  {
    "id": 5,
    "text": "⭐ Library Update: Borrow up to 5 books at a time with Premium Membership."
  }
]

const Marku = () => {
    return (
        <div className="flex justify-center items-center container mx-auto bg-gray-100 rounded-3xl my-4 px-3">
            <button className="bg-black text-white btn mx-1 font-semibold"> Offers </button> 
          <Marquee className=" py-4 my-3.5 px-6 text-gray-500  font-semibold">
           
           {dataset.map(i=><span className="mx-2">{i.text}</span>)}
            </Marquee>  
        </div>
    );
};

export default Marku;