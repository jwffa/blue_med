import React, { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import MenuBar from '../menuOnPhone/MenuBar'
import { Link } from 'react-router-dom'
const doctorsInstance = [
  "გიორგი აბაშიძე",
  "გიორგი ქავთარაძე",
  "ნინო მერაბიშვილი",
  "თამარ კობახიძე",
  "გიორგი გოგოლაძე",
  "ლევან ჯავახიშვილი",
  "ელენე კვარაცხელია"
]

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredResults, setFilteredResults] = useState([])

  // doctors and their data
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredResults([])
      return
    }

    const results = doctorsInstance.filter(name =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setFilteredResults(results)
  }, [searchTerm])

  return (
    <header className='w-full mt-2'>
      <nav className='m-auto max-w-screen-xl pt-4 px-4 flex items-center gap-4 justify-between'>
        <div className='flex items-center'>
          <Link to={'/'}>
            <img className='cursor-pointer w-24 sm:w-28' src="/icons/bluemed.png" alt="bluemed" />
          </Link>

          <div className='relative pl-4 ml-4 sm:pl-8 sm:ml-8 border-l'>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hidden md:block" size={20} />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 md:hidden" size={16} />
              
              <input
                
                type="text"
                placeholder="ექიმი, სპეციალობა"
                className="w-full text-sm sm:text-base pl-10 pr-4 py-1 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#0b2849]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* dropdown results */}
            {filteredResults.length > 0 && (
              <div className="absolute w-full bg-white border border-gray-300 rounded-md shadow-md mt-1 max-h-40 overflow-auto z-50">
                {filteredResults.map((name, index) => (
                  <div 
                    key={index} 
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100 text-sm sm:text-base"
                    onClick={() => setSearchTerm(name)}
                  >
                    {name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className='hidden md:block'>
          <button className="mr-2 inline-flex items-center gap-2 rounded-full bg-[#ffffff] py-1 px-4 text-sm font-semibold text-[#0b2849] border border-[#0b2849] shadow-inner cursor-pointer">რეგისტრაცია</button>
          <button className="inline-flex items-center gap-2 border border-[#0b2849] rounded-full bg-[#0b2849] py-1 px-4 text-sm font-semibold text-white shadow-inner focus:outline-none cursor-pointer">ავტორიზაცია</button>
        </div>

        <MenuBar />
      </nav>
    </header>
  )
}

export default Header
