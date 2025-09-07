import React, { useEffect, useState } from 'react'
import img1 from "../../asset/images/c logos/msn.png"
import img2 from "../../asset/images/c logos/yahoo.png"
import img3 from "../../asset/images/c logos/drimble.png"

const RscardData = [
     {
          img:img1,
          heading:[" Visitors" , "authority"],
          visitor:"689.1M",
          AuTotal:94,
     },
     {
          img:img2,
          heading:[" Visitors" , "authority"],
          visitor:"1.43K",
          AuTotal:69,
     },
     {
          img:img3,
          heading:[" Visitors" , "authority"],
          visitor:"2M",
          AuTotal:72,
     }
];
const TotalVisitcard = () => {
     const [data , setData] = useState([]);
     useEffect(() => {
          const cardData = JSON.parse(JSON.stringify(RscardData));
          setData(cardData);
     },[]);
  return (
    <div className='flex items-center justify-between w-[73.75rem] space-x-8 mt-11 mx-auto '>
      {data.map((item, index) => {
          return(
               <div className="flex flex-col gap-8 h-[9.37rem] w-[23.25rem] justify-center bg-white  rounded-2xl p-6" key={index}>
                    <div className="h-6 w-auto">
                         <img src={item.img} alt="image" className='h-full w-auto' />
                    </div>
                    <div className="flex items-center justify-between">
                         <div className="flex gap-16 items-center justify-between ">
                              <div className="flex flex-col">
                                   <h3 className='text-2xl text-blue-900 font-futura font-bold'>{item.visitor}</h3>
                                   <p className='text-sm tracking-wide capitalize text-textB'>{item.heading[0]}</p>
                              </div>
                              <hr className='h-15 w-[1px] bg-[#ccc] border-0 outline-0' />
                              <div className="">
                                   <h3 className='text-2xl text-blue-900 font-futura font-bold'>{item.AuTotal}</h3>
                                   <p className='text-sm tracking-wide capitalize text-textB'>{item.heading[1]}</p>
                              </div>
                         </div>
                    </div>
               </div>
          )
      } )}
    </div>
  )
}

export default TotalVisitcard
