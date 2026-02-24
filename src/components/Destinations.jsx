import React from "react";

const Destinations = () => {
  return (
    <div className="container mx-auto mt-12">
      <h2 className="font-bold text-2xl mb-2">Trending destinations</h2>
      <p>Most popular choices for travelers from anywhere to Africa</p>
      <div className="flex flex-col gap-4 relative mt-3">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative group overflow-hidden rounded-lg">
            <div className="absolute text-white text-xl font-bold m-5 mt-2 z-10">
              <p>Ethiopia</p>
            </div>
            <img
              src="/assets/ethiopia.jpg"
              className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Ethiopia"
            />
          </div>

          <div className="relative group overflow-hidden rounded-lg">
            <div className="absolute text-white text-xl font-bold m-5 mt-2 z-10">
              <p>Egypt</p>
            </div>
            <img
              src="/assets/egypt.jpg"
              className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Egypt"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="relative group overflow-hidden rounded-lg">
            <div className="absolute text-white text-xl font-bold m-5 mt-2 z-10">
              <p>Morocco</p>
            </div>
            <img
              src="/assets/morocco.jpg"
              className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Morocco"
            />
          </div>

          <div className="relative group overflow-hidden rounded-lg">
            <div className="absolute text-white text-xl font-bold m-5 mt-2 z-10">
              <p>Nigeria</p>
            </div>
            <img
              src="/assets/nigeria.jpg"
              className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Nigeria"
            />
          </div>

          <div className="relative group overflow-hidden rounded-lg">
            <div className="absolute text-white text-xl font-bold m-5 mt-2 z-10">
              <p>Algeria</p>
            </div>
            <img
              src="/assets/algeria.jpg"
              className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Algeria"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
