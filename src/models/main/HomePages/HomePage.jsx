import React from 'react'
import './homePage.css'
import Header from './Header/Header'
import FirstCard from './FirstCard/FirstCard'
import SecondCard from './SecondCard/SecondCard'
import {cardData,secondData,localData} from '../../../common/data'
import Locality from './Locality/Locality'
import FormSection from './FormSection/FormSection'
import Explore from './Explore/Explore'
import Footer from './Footer/Footer'
const HomePage = () => {
 
  return (
    <>
    <Header />
    <FirstCard cardData={cardData}/>
    <SecondCard secondData={secondData}/>
    <Locality localData={localData}/>
    <FormSection />
    <Explore />
    <Footer />
    </>
  )
}

export default HomePage