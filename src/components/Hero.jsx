import React, { useState } from 'react';
import Destinations from './Destinations';
import HotDeals from './HotDeals';
import TimePrice from './TimePrice';
import PrimePage from './PrimePage';
import Popular from './Popular';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Nav from './Nav';
import About from './About';

const Hero = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className='max-w-[1100px] mx-auto'>
      <Nav />
      <DatePicker />
      <PrimePage />
      <HotDeals />
      <Destinations />
      <TimePrice />
      <Popular />
    </div>
  );
};

export default Hero;
