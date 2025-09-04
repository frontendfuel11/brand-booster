import React from 'react'
import Header from '../components/page component/Header.Jsx'
import HowWorks from '../components/page component/HowWorks'
import Casestudy from '../components/page component/Casestudy'
import PulishPackage from '../components/page component/PulishPackage'
import Pricing from '../components/page component/Pricing'
import MoneyBack from '../components/page component/MoneyBack'
import Question from '../components/page component/Question'
import Subscription from '../components/page component/Subscription'
import Footer from '../components/page component/Footer'
import Whyuse from '../components/page component/Whyuse'
import ResultCard from '../components/common/ResCard'

const HomePage = () => {
  return (
    <div>
      <Header/>
      <HowWorks/>
      <ResultCard/>
      <Casestudy/>
      <PulishPackage/>
      <Pricing/>
      <MoneyBack/>
      <Whyuse/>
      <Question/>
      <Subscription/>
      <Footer/>
    </div>
  )
}

export default HomePage