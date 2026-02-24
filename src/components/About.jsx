import { useState } from "react";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const africanCountries = [
  { code: "DZ", name: "Algeria" },
  { code: "AO", name: "Angola" },
  { code: "BJ", name: "Benin" },
  { code: "BW", name: "Botswana" },
  { code: "BF", name: "Burkina Faso" },
  { code: "BI", name: "Burundi" },
  { code: "CM", name: "Cameroon" },
  { code: "CV", name: "Cape Verde" },
  { code: "CF", name: "Central African Republic" },
  { code: "TD", name: "Chad" },
  { code: "KM", name: "Comoros" },
  { code: "CG", name: "Congo (Brazzaville)" },
  { code: "CD", name: "Congo (Kinshasa)" },
  { code: "DJ", name: "Djibouti" },
  { code: "EG", name: "Egypt" },
  { code: "GQ", name: "Equatorial Guinea" },
  { code: "ER", name: "Eritrea" },
  { code: "SZ", name: "Eswatini" },
  { code: "ET", name: "Ethiopia" },
  { code: "GA", name: "Gabon" },
  { code: "GM", name: "Gambia" },
  { code: "GH", name: "Ghana" },
  { code: "GN", name: "Guinea" },
  { code: "GW", name: "Guinea-Bissau" },
  { code: "KE", name: "Kenya" },
  { code: "LS", name: "Lesotho" },
  { code: "LR", name: "Liberia" },
  { code: "LY", name: "Libya" },
  { code: "MG", name: "Madagascar" },
  { code: "MW", name: "Malawi" },
  { code: "ML", name: "Mali" },
  { code: "MR", name: "Mauritania" },
  { code: "MU", name: "Mauritius" },
  { code: "MA", name: "Morocco" },
  { code: "MZ", name: "Mozambique" },
  { code: "NA", name: "Namibia" },
  { code: "NE", name: "Niger" },
  { code: "NG", name: "Nigeria" },
  { code: "RW", name: "Rwanda" },
  { code: "ST", name: "Sao Tome and Principe" },
  { code: "SN", name: "Senegal" },
  { code: "SC", name: "Seychelles" },
  { code: "SL", name: "Sierra Leone" },
  { code: "SO", name: "Somalia" },
  { code: "ZA", name: "South Africa" },
  { code: "SS", name: "South Sudan" },
  { code: "SD", name: "Sudan" },
  { code: "TZ", name: "Tanzania" },
  { code: "TG", name: "Togo" },
  { code: "TN", name: "Tunisia" },
  { code: "UG", name: "Uganda" },
  { code: "ZM", name: "Zambia" },
  { code: "ZW", name: "Zimbabwe" },
];

function About() {
  const [selectedCountry, setSelectedCountry] = useState("ET");

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="bg-[#022] text-white py-10">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold mb-4 md:mb-0">Afrihot</h1>

          <div className="flex space-x-4 flex-wrap justify-center">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition"
                aria-label="Social Media"
              >
                <Icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>

        <div className="w-full max-w-xs mt-6">
          <select
            id="african-countries"
            className="block w-full px-4 py-2 bg-[#022] border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            {africanCountries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold">Company</h2>
            <a href="#" className="hover:text-gray-300 transition">About</a>
            <a href="#" className="hover:text-gray-300 transition">Jobs</a>
            <a href="#" className="hover:text-gray-300 transition">Affiliate</a>
            <a href="#" className="hover:text-gray-300 transition">AfroHot Business Studio</a>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-semibold">Legal</h2>
            <a href="#" className="hover:text-gray-300 transition">Privacy & Cookies</a>
            <a href="#" className="hover:text-gray-300 transition">Terms & Conditions</a>
            <a href="#" className="hover:text-gray-300 transition">Partner Dispute</a>
            <a href="#" className="hover:text-gray-300 transition">Legal Information</a>
          </div>

          <div className="col-span-1 sm:col-span-2">
            <h2 className="text-lg font-semibold mb-2">
              Get exclusive inspiration for your next stay – subscribe to our newsletter.
            </h2>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
