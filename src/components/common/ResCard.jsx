import React, { useState, useEffect } from "react";
import grow from "../../asset/icons/grow.png";
import medal from "../../asset/icons/medal.png";
import heart from "../../asset/icons/heart.png";
import verified from "../../asset/icons/verified.png";
import rank from "../../asset/icons/rank.png";
import bgimg1 from "../../asset/images/result images/a (1).jpg";
import bgimg2 from "../../asset/images/result images/a (3).png";
import bgimg3 from "../../asset/images/result images/a (1).png";
import bgimg4 from "../../asset/images/result images/a (2).jpg";
import bgimg5 from "../../asset/images/result images/a (2).png";
import resultimg1 from "../../asset/images/result images/b (5).png";
import resultimg2 from "../../asset/images/result images/b (2).png";
import resultimg3 from "../../asset/images/result images/b (4).png";
import resultimg4 from "../../asset/images/result images/b (3).png";
import resultimg5 from "../../asset/images/result images/b (1).png";
import avater1 from "../../asset/images/avater/a (1).jpg";
import avater2 from "../../asset/images/avater/a (1).png";
import avater3 from "../../asset/images/avater/a (2).png";
import avater4 from "../../asset/images/avater/a (3).png";
import avater5 from "../../asset/images/avater/a (4).png";

export const ResultCardData = [
  {
    heading: "get qualified buyer ",
    text: "submit a news today on high-traffic bews sites to drive qualified buyer to your website . each publication act as a landing page to warm buyers to your brands and offer before clicking through to  your website. ",
    miniImg: resultimg1,
    back: bgimg1,
    icon: heart,
    avater: [avater1, avater3, avater4],
  },
  {
    heading: "rank higher on google",
    text: "our news releases often rank on the first page of the google for your keywords , driving more traffic to your site . search engines consider links from these news sites as high authority recommmendations , heping to push your search position higher. ",
    miniImg: resultimg2,
    back: bgimg2,
    icon: rank,
    avater: [avater5, avater2, avater4],
  },
  {
    heading: "feature in AI results ",
    text: "our news articles are optimized to appear in AI-generated resuts like google's AI overviews,chatGPT, perPlexity, AI assistants ofen pull from our trusted news sources to answer quetions, giving your brand more visibility , trust , and traffic . ",
    miniImg: resultimg3,
    back: bgimg3,
    icon: medal,
    avater: [avater2, avater3, avater4],
  },
  {
    heading: "increase sales",
    text: "Generate more sales by installing our customizable 'As Seen On' trust badge on your website. This badge improves conversion rates by up to 48% by building trust and legitimacy with your visitors. ",
    miniImg: resultimg4,
    back: bgimg4,
    icon: grow,
    avater: [avater1, avater3, avater4],
  },
  {
    heading: "get verified ",
    text: "Our press releases prove that you and your brand are public figures of interest that need verification. Many of our clients use our press releases to get verified on Instagram, Facebook, Twitter, and other social media platforms.",
    miniImg: resultimg5,
    back: bgimg5,
    icon: verified,
    avater: [avater5, avater3, avater4],
  },
];

const ResultCard = () => {
  const [resultCard, setResultCard] = useState([]);

  useEffect(() => {
    setResultCard(ResultCardData);
  }, []);

  return (
    <div className="bg-purple-50 py-15 px-30">
      <h1 className="font-futura font-extrabold text-5xl uppercase text-blue-900 text-center mb-10">
        marketing that gets results
      </h1>
      <div className=" space-y-10  flex flex-col items-center">
        {resultCard.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex items-center w-[77.5rem] h-[25.5rem] bg-white shadow-md rounded-2xl overflow-hidden`}
            >
              {isEven ? (
                <>
                  <div className="px-20 py-20 flex-1 order-2 md:order-1">
                    <div className=" space-y-7 mb-3">
                      <img src={item.icon} alt="icon" className="w-auto h-12" />
                      <h3 className="text-5xl font-semibold uppercase font-futura text-blue-900  ">
                        {item.heading}
                      </h3>
                    </div>
                    <p className="text-textB text-lg mb-4 w-[100%]">
                      {item.text}
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-3">
                          {item.avater.map((avt, i) => (
                            <img
                              key={i}
                              src={avt}
                              alt="avatar"
                              className="w-8 h-8 rounded-full border-2 border-white"
                            />
                          ))}
                        </div>
                        <p className="text-lg font-bold  capitalize ">
                          view real stories
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="  order-2 relative">
                    <img
                      src={item.back}
                      alt={item.heading}
                      className="w-[25.5rem] h-[25.5rem]  object-cover"
                    />
                    <img
                        src={item.miniImg}
                        alt="mini"
                        className="absolute top-1/2 mx-auto left-1/2 transform -translate-x-1/2 w-auto h-auto "
                      />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-1/3 order-1 relative">
                  <img
                      src={item.back}
                      alt={item.heading}
                      className="w-[25.5rem] h-[25.5rem]  object-cover"
                    />
                    <img
                        src={item.miniImg}
                        alt="mini"
                        className="absolute top-1/2 mx-auto left-1/2 transform -translate-x-1/2 w-[80%] h-auto "
                      />
                  </div>

                  <div className="px-20 py-20 flex-1 order-2 md:order-1">
                    <div className="space-y-7 mb-3">
                      <img src={item.icon} alt="icon" className="w-auto h-12" />
                      <h3 className="text-5xl font-semibold uppercase font-futura text-blue-900">
                        {item.heading}
                      </h3>
                    </div>
                    <p className="text-textB text-lg mb-4 w-[80%]">
                      {item.text}
                    </p>

                    <div className="flex items-center gap-3">

                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-3">
                          {item.avater.map((avt, i) => (
                            <img
                              key={i}
                              src={avt}
                              alt="avatar"
                              className="w-8 h-8 rounded-full border-2 border-white"
                            />
                          ))}
                        </div>
                        <p className="text-lg font-bold  capitalize ">
                          view real stories
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResultCard;
