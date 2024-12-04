import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "./animations";

interface HeroProps {
  onTicketClick : () => void
}

export function Hero({onTicketClick} : HeroProps) {

  return (
    <div className="relative min-h-screen overflow-hidden bg-white flex justify-center items-center max-w-[96rem] mx-auto ">
      <div className="flex flex-row justify-between items-center w-full">

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className=" lg:w-1/2  mx-auto px-4 sm:px-6 lg:px-8  pt-40 sm:pt-20  pb-10 text-center"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-center sm:text-left text-4xl  sm:text-6xl font-bold text-gray-900 mb-8"
        >
          BAKE EXPO
    
          <span className="text-primary-600">{" "}2025</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="max-w-2xl text-justify mx-auto -ml-0 text-xl text-gray-600 mb-10"
        >
          Join us for an extraordinary culinary experience where passion meets
          expertise. Book your slot now for exclusive masterclasses and
          workshops.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4  mb-12"
        >
          <button className="flex items-center justify-center gap-2 bg-violet-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 text-lg group" onClick={onTicketClick}>
            Book Your Slot
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg border-2 border-primary-200 hover:border-primary-300 text-lg">
            Explore Schedule
          </button>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center gap-8 text-lg text-gray-600"
        >
          <div className="flex items-center gap-2">
            <Calendar className="text-primary-600" />
            <span>2025</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-primary-600" />
            <span>Adlux Convention Center, Angamaly</span>
          </div>
        </motion.div>
      </motion.div>
      <motion.div  initial = {{opacity : 0, y:80}} animate = {{opacity:1, y:0}} transition={{duration : 0.9}} className="w-1/2 lg:block hidden">
        <video className="w-full object-contain" loop autoPlay muted poster="../assets/video/AssemblyLinePosterpreview.png">
        <source src="../assets/video/assembly-line.webm" type="video/webm" />
        </video>
      </motion.div>
      </div>
    </div>
  );
}
