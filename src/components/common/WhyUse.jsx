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
    <div className='mt-11 flex flex-wrap  gap-6 justify-center '>
      {Data.map((item , index) => {
          return <div className='w-[25.67rem] h-auto bg-[#f5f5f5] p-6 rounded-2xl space-y-7.5 ' key={index}>
               <div className=" h-11 w-11">
                    <img src={item.img} alt="" className='h-full w-full'/>
               </div>
               <div className="space-y-3">
                    <h3 className='text-2xl font-futura font-bold uppercase text-blue-900 '>{item.heading}</h3>
                    <p className='text-sm text-textB '>{item.subtext}</p>
               </div>
          </div>
      })}
    </div>
  )
}

export default WhyUseCard
