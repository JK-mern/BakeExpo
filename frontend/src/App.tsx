import { useState } from "react"
import { About } from "./components/About"
import Gallery from "./components/Gallery"
import { Hero } from "./components/Hero"
import Navbar from "./components/Navbar"
import { Representatives } from "./components/Representative"
import { BookingForm } from "./components/BookForm"


function App() {

  const [isBookingFormOpen, setIsBookingFormOpen] = useState (false)

  const handleopenBookingForm = ()=>{
    setIsBookingFormOpen(true)
  }
  return (
    <div className="">
      <Navbar  onTicketClick = {handleopenBookingForm}/>
      <Hero  onTicketClick = {handleopenBookingForm}/>
      <About />
      <Representatives />
      <BookingForm isOpen = {isBookingFormOpen} onClose={ ()=> setIsBookingFormOpen(false) } />
      <Gallery />
    </div>
  )
}

export default App
