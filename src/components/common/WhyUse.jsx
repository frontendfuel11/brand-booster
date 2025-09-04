import React from 'react'
import magnifier from "../../asset/icons/magnifier.png"
import pen from "../../asset/icons/pen.png"
import support from "../../asset/icons/support.png"
import trust from "../../asset/icons/trust.png"
import report from "../../asset/icons/report.png"
import verified from "../../asset/icons/verified.png"




const Data = [
     {
          img:magnifier,
          heading:"seo Experts",
          subtext:"Our stories often outrank your competition."
     },
     {
          img:pen,
          heading:"experienced writers",
          subtext:"We write news stories that drive interest and sales."
     },
     {
          img:support,
          heading:"helpful support",
          subtext:"50+ Support Guides and Live Chat support."
     },
     {
          img:trust,
          heading:"'as seen on ' trust badge",
          subtext:"Build trust and credibility on your website."
     },
     {
          img:verified,
          heading:"verified outlets",
          subtext:"News sites are verified by social media, SEO stats & FCC registration."
     },
     {
          img:report,
          heading:"industry-leading reports",
          subtext:"News sites are verified by social media, SEO stats & FCC registration."
     },
]

const WhyUseCard = () => {
  return (
    <div className='mt-20 flex flex-wrap gap-20 justify-center mx-20'>
      {Data.map((item , index) => {
          return <div className='w-130 h-auto bg-[#f5f5f5] p-7 rounded-2xl space-y-8'>
               <div className=" ">
                    <img src={item.img} alt="" />
               </div>
               <div className="space-y-2">
                    <h3 className='text-3xl font-futura font-bold uppercase text-blue-900 '>{item.heading}</h3>
                    <p className='text-lg text-textB '>{item.subtext}</p>
               </div>
          </div>
      })}
    </div>
  )
}

export default WhyUseCard
