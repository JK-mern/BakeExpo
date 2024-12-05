import { useState } from "react"
import { About } from "./components/About"
import Gallery from "./components/Gallery"
import { Hero } from "./components/Hero"
import Navbar from "./components/Navbar"
import { Representatives } from "./components/Representative"
import { BookingForm } from "./components/BookForm"
import WhyExhibit from "./components/WhyBakeExpo"



function App() {

  const [isBookingFormOpen, setIsBookingFormOpen] = useState (false)

  const handleopenBookingForm = ()=>{
    setIsBookingFormOpen(true)
  }
  return (
    <div
    className="font-sans ">
 
      <Navbar  onTicketClick = {handleopenBookingForm}/>
      <Hero  />
      <About />
      <Representatives />
      <WhyExhibit onTicketClick = {handleopenBookingForm}/>
      <BookingForm isOpen = {isBookingFormOpen} onClose={ ()=> setIsBookingFormOpen(false) } />
      <Gallery />

    </div>
  )
}

export default App
