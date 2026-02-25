import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { cities, destinations } from "../lib/data";


export default function SearchList() {
  const [activeTab, setActiveTab] = useState("cities");
  const data = activeTab === "cities" ? cities : destinations;
  const scrollRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
const [cityName, setCityName] = useState(null);
const [countryCode, setCountryCode] = useState(null);

  const [apiHotels, setApiHotels] = useState([]);
  const [location, setLocation] = useState({ lat: null, lon: null });
  // useEffect(() => {
  //   if (scrollRef.current) {
  //     const firstCard = scrollRef.current.querySelector("div");
  //     if (firstCard) {
  //       setCardWidth(firstCard.clientWidth + 16);
  //     }
  //   }
  // }, [data]);

  useEffect(() => {
    if (!("geolocation" in navigator)) return;
     
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({ lat: position.coords.latitude, lon: position.coords.longitude });
        // console.log(position.coords.latitude)
      });
     
    err=>{
      console.error("Error getting location:", err);
    }

  }, []);

  useEffect(() => {
    if (!location.lat || !location.lon) return;
    const url = `https://us1.api-bdc.net/data/reverse-geocode-client?latitude=${location.lat}&longitude=${location.lon}`;

    axios
    .get(url)
    .then((res) => {
      const city = res.data.locality || res.data.city || res.data.principalSubdivision || "";
      const code = (res.data.countryCode || "").toUpperCase();
      setCityName(city);
      setCountryCode(code);
      console.log(city, code);
    })
    .catch((err) => console.warn("Nominatim error:", err));
}, [location.lat, location.lon]);


useEffect(() => {
  if (!cityName || !countryCode) return;

  axios
    .get("https://api.liteapi.travel/v3.0/data/hotels", {
      params: { countryCode, cityName, limit: 10 },
      headers: { "X-API-Key": import.meta.env.VITE_LITEAPI_KEY },
    })
    .then((response) => {
      setApiHotels(response.data.data || []);
    })
    .catch((err) => console.warn("LiteAPI error:", err));
}, [cityName, countryCode]);

  const scroll = (direction) => {
    if (scrollRef.current && cardWidth) {
      const { scrollLeft } = scrollRef.current;
      const containerWidth = cardWidth * 3;

      if (direction === "left") {
        scrollRef.current.scrollTo({
          left: scrollLeft - containerWidth,
          behavior: "smooth",
        });
      } else {
        scrollRef.current.scrollTo({
          left: scrollLeft + containerWidth,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8 my-24 ">
      <div className="flex gap-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${activeTab === "cities" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("cities")}
        >
          Cities
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === "destinations" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("destinations")}
        >
          Destinations
        </button>
      </div>

      <div className="relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10"
          onClick={() => scroll("left")}
        >
          ❮
        </button>

        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-hidden snap-x snap-mandatory"
        >
          {apiHotels.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-[80%] md:w-[50%] lg:w-[33.33%] xl:w-[25%] min-w-[300px] border rounded-lg shadow-lg flex-shrink-0 snap-start"
            >
              <img
                src={item.main_photo}
                alt={item.name}
                className="w-full h-40 object-cover rounded-t"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                {/* <p>{item.hotels} Hotels</p> */}
                <p className="text-gray-500">${item.avgPrice} Avg.</p>
                <div className="text-right text-gray-600">
                  <span>{item.rating} ⭐</span>{" "}
                  <span>({item.reviewCount})</span>{" "}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10"
          onClick={() => scroll("right")}
        >
          ❯
        </button>
      </div>
    </div>
  );
}
