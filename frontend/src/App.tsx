import { useState } from "react"
import { About } from "./components/About"
import Gallery from "./components/Gallery"
import { Hero } from "./components/Hero"
import Navbar from "./components/Navbar"
import { Representatives } from "./components/Representative"
import { BookingForm } from "./components/BookForm"
import WhyExhibit from "./components/WhyBakeExpo"
import { MyBentoGrid } from "./components/MyBentoGrid"


function App() {

  const [isBookingFormOpen, setIsBookingFormOpen] = useState (false)

  const handleopenBookingForm = ()=>{
    setIsBookingFormOpen(true)
  }
  return (
    <div
    className=" h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <Navbar  onTicketClick = {handleopenBookingForm}/>
      <Hero  onTicketClick = {handleopenBookingForm}/>
      <About />
      <Representatives />
      <WhyExhibit onTicketClick = {handleopenBookingForm}/>
      <BookingForm isOpen = {isBookingFormOpen} onClose={ ()=> setIsBookingFormOpen(false) } />
      <Gallery />
      <MyBentoGrid/> 
    </div>
  )
}

export default App
