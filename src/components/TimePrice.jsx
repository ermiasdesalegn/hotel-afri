import React, { useState } from "react";

const destinations = [
  { name: "Addis Ababa", prices: [55, 340] },
  { name: "Ankara", prices: [80, 400] },
  { name: "Moqadisho", prices: [65, 350] },
  { name: "Asmera", prices: [70, 380] },
  { name: "Djibouti", prices: [100, 400] },
  { name: "South Africa", prices: [80, 355] },
];

const months = [
  { name: "January", prices: [55, 340] },
  { name: "February", prices: [55, 335] },
  { name: "March", prices: [65, 350] },
  { name: "April", prices: [65, 395] },
  { name: "May", prices: [70, 380] },
  { name: "June", prices: [65, 300] },
  { name: "July", prices: [70, 285] },
  { name: "August", prices: [80, 315] },
  { name: "September", prices: [80, 335] },
  { name: "October", prices: [100, 400] },
  { name: "November", prices: [80, 355] },
  { name: "December", prices: [90, 415] },
];

const TimePrice = () => {
  const [activeTab, setActiveTab] = useState("Las Vegas");
  const [selectedMonth, setSelectedMonth] = useState("July");

  return (
    <div className="min-h-screen">
      <div
        className="bg-cover bg-center relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] rounded-xl"
        style={{
          backgroundImage: `url('/assets/africa8.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>

        <div className="relative z-10 px-6 py-8 md:py-12 lg:py-16">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center">
            Discover the best time to book your next stay
          </h1>

          <div className="bg-white rounded-xl w-full sm:w-[90%] md:w-[800px] mx-auto py-4 mt-6 sm:mt-8 md:mt-12 px-4">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {destinations.map((destination) => (
                <button
                  key={destination.name}
                  onClick={() => setActiveTab(destination.name)}
                  className={`px-3 sm:px-4 py-1 sm:py-2 text-sm md:text-base rounded-full transition-colors ${
                    activeTab === destination.name
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-gray-200"
                  }`}
                >
                  {destination.name}
                </button>
              ))}
            </div>

            <p className="text-center text-gray-400 text-xs sm:text-sm mt-2">
              Prices are based on the average price range for 3-star hotels per night.
            </p>

            <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-4 sm:p-6 max-w-full md:max-w-4xl mx-auto mt-4 sm:mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                {months.map((month) => (
                  <div
                    key={month.name}
                    onClick={() => setSelectedMonth(month.name)}
                    className={`flex justify-between items-center p-2 sm:p-4 rounded-lg cursor-pointer transition-all ${
                      selectedMonth === month.name
                        ? "bg-green-100 border border-green-500"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    <span className="text-sm sm:text-lg font-medium">{month.name}</span>
                    <span className="text-green-600 font-semibold text-xs sm:text-sm md:text-base">
                      ${month.prices[0]} - ${month.prices[1]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimePrice;
