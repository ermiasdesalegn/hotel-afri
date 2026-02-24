import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PrimePage = () => {
  const words = ["Destination", "Hotels", "Trips"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [checkInDate, setCheckInDate] = useState(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleDateChange = (date) => {
    setCheckInDate(date);
    setIsDatePickerOpen(false);
  };

  return (
    <div>
      <div className='container m-4 mx-5 '>
        <h1 className='text-[30px] font-bold'>Save up to 30% on your first hotel stay</h1>
        <p>We compare hotel prices from 100s of sites</p>
      </div>

      <div className="w-full max-w-[1220px] mx-auto mt-8 p-4">
        <div className="flex items-center justify-between bg-white shadow-lg rounded-lg overflow-hidden">
          <div className='flex flex-col'>
            <div className=" text-sm font-light ml-6 ">
              {words[currentWordIndex]}
            </div>
            <div className="flex items-center border-r border-gray-300 px-4 py-2 max-w-[1220px]  ">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 18a8 8 0 110-16 8 8 0 010 16z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35"></path>
              </svg>
              <input
                type="text"
                placeholder="Where to?"
                className="ml-2 w-full focus:outline-none focus:placeholder:font-normal text-sm text-gray-700 placeholder:font-bold font-bold placeholder:text-black "
              />
            </div>
          </div>

          <button className="flex items-center border-r border-gray-300 px-4 py-2 w-1/4"
            onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8m-6 4h6m-9 4h9"></path>
            </svg>
            <div className="ml-2 text-sm">
              <p className="text-gray-500">Check in</p>
              <p className="text-black font-medium">
                {checkInDate ? checkInDate.toLocaleDateString() : "-- / -- / --"}
              </p>
            </div>
            {isDatePickerOpen && (
              <div className="absolute top-[250px] left-[530px] z-10">
                <DatePicker
                  selected={checkInDate}
                  onChange={handleDateChange}
                  inline
                />
              </div>
            )}
          </button>

          <button className="flex items-center px-4 py-2 w-1/4">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M16 12h.01M12 16h.01"></path>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z"></path>
            </svg>
            <div className="ml-2 text-sm">
              <p className="text-gray-500">Guests and rooms</p>
              <p className="text-black font-medium">2 Guests, 1 Room</p>
            </div>
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 font-medium text-sm rounded-lg hover:bg-blue-700">
            Search
          </button>
        </div>
        <div className='flex mt-6 gap-5'>
          <p className='font-bold text-[#666] text-2xl'>Booking.com</p>
          <p className='font-bold text-[#666] text-2xl'>Hotel-Trivago</p>
          <p className='font-bold text-[#666] text-2xl'>Expedia</p>
          <p className='font-bold text-[#666] text-2xl'>Hotels</p>
          <p className='font-bold text-[#666] text-2xl'>Hotels</p>
          <p className='font-bold text-[#666] text-2xl'>Expedia</p>
          <p className='font-bold text-[#666] text-2xl'>Expedia</p>
          <p className='font-bold text-[#666] text-2xl'>Hotels</p>
        </div>
      </div>
    </div>
  );
};

export default PrimePage;
