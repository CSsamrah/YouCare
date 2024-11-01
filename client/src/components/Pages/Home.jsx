import React from 'react'
import { Box } from '@mui/material';
import MainVideo from '../home/MainVideo';
import Properties from '../Properties';
import QuizSection from '../home/QuizSection';
import Description from '../Description.js'
import TopPicks from '../TopPicks.js'
import Services from '../Services.js'
import Achievements from '../Achievements.js';
import OurProducts from '../OurProducts.js';
import Footer from '../FooterEnd/FooterEnd.jsx';

const Home = () => {
  return (
    <>
    <MainVideo />
      <Properties />
      <div className="section">
    <QuizSection />
      </div>
      <div className="section">
      <TopPicks />
      </div>
   
    <div className="section">
      <Services />
    </div>
    <div className="section">
      <OurProducts />
    </div>
    <div className="section">
      <Description />
    </div>
    <div className="section">
      <Achievements />
    </div>
  
    <Box>
      <Footer />
    </Box>
    </>
    
  )
}

export default Home