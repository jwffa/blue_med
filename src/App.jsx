import "./index.css"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import { useEffect } from "react"
import ScrollToTop from "./ScrollToTop"

function App({children}) {  // children is a prop, which represents any component placed between footer and header
  
  return (
    <>
      <ScrollToTop/>
      <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="w-full bg-[#f7f9fc] pt-10 mt-6">
          {children}
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App
