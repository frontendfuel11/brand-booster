import React from 'react'
import boosterimg from "../../asset/icons/flash g.png"

const Subscription = () => {
  return (
    <div className='w-[90%] px-20 py-10 flex justify-between items-center min-h-25 max-h-auto bg-gradient-to-tr from-blue from-15% to-sky mx-auto my-10 rounded-2xl'>
      <div className="flex flex-col space-y-6">
          <h1 className='text-white font-bold font-futura text-5xl uppercase '>Ready to Grow Your Brand?</h1>
          <p className='text-lg text-[#FFFFFFB2] leading-8'>Your brand deserves to be recognized! Start getting real exposure for your brand and  <br/> high-quality buyers for your site.</p>
      </div>
      <button className='text-lg flex items-center justify-center gap-3 bg-white rounded-full px-5 py-3'>
          <img src={boosterimg} alt="" className='h-6 w-6' />
          <span className='text-lg font-semibold text-[#214750] capitalize'>see our packages</span>
      </button>
    </div>
  )
}

export default Subscription
