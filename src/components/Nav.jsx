import { FaHeart, FaGlobe, FaUser, FaBars } from "react-icons/fa";

export default function Nav() {
  return (
    <div className="">
      <div className='border-b-2 border-b-black-5'>
      <div className='container max-w-[1100px] mx-auto '>
        <div className='flex items-center gap-12 text-[15px] justify-between'>
          <div className=''>
          <img
                className="w-[100px] align-middle mx-[10px] my-[10px]"
                src="/assets/logo.png"
                alt="Logo"
                width={50}
                height={50}
              />
            </div>
          <div className='navs'>
            <div className="flex items-center justify-end space-x-6">
              <button className="flex items-center text-gray-700 hover:text-black hover:bg-slate-400 py-4 px-4">
                <FaHeart className="w-5 h-5" />
                <span className="ml-2 text-sm">Favorites</span>
              </button>

              <button className="flex items-center text-gray-700 hover:text-black hover:bg-slate-400 py-4 px-4">
                <FaGlobe className="w-5 h-5" />
                <span className="ml-2 text-sm">EN · $</span>
              </button>

              <button className="flex items-center text-gray-700 hover:text-black hover:bg-slate-400 py-4 px-4">
                <FaUser className="w-5 h-5" />
                <span className="ml-2 text-sm">Log in</span>
              </button>

              <button className="flex items-center text-gray-700 hover:text-black hover:bg-slate-400 py-4 px-4">
                <FaBars className="w-5 h-5" />
                <span className="ml-2 text-sm">Menu</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
