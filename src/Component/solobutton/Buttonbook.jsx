'use client'

import { useState } from "react";
import { toast } from "react-toastify";

const Buttonbook = () => {
   
    const [borrow,setBorrow]=useState(false)
     const handleClick=()=>{
     setBorrow(true)
      toast('Added to Borrow list')
    }
    return (
        <div>
            {borrow?<button className="btn bg-black text-white">Already Borrowed</button>:<button onClick={handleClick} className="btn bg-black text-white">Borrow Book</button>}
        </div>
    );
};

export default Buttonbook;