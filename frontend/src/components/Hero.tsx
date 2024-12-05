import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Map } from "lucide-react";
import { fadeInUp, staggerContainer } from "./animations";

interface HeroProps {
  onTicketClick: () => void
}

export function Hero({ onTicketClick }: HeroProps) {

  return (

    <>
      <div className="flex justify-center  min-h-screen ">

        <div className="flex flex-row justify-center  w-full">

          <div className="flex flex-col  items-center">
            <p className="text-7xl font flex  ">Bake Expo 2025</p>

            <p className="text-5xl font-extralight mt-4 text-center"> Where Innovation Meets Tradition: Explore Trends,
              <br />
              Connect with Experts, and Unlock New Opportunities <br />at Bake Expo!</p>

            <p className="mt-8 text-2xl font-extralight">
              Organized By
            </p>

            <img src="../assets/Expo/bakeLogo.png" alt="" className="w-32 mt-6" />






            <div className="container flex justify-between">

              <div className="sm:text-5xl flex gap-4 h-16 w-24  ">

                <div className="flex-col">

                  <div className="flex gap-2">

                    <span className="bg-gray-700 text-white rounded p-2 flex items-center " >10</span>
                    <span className="bg-gray-700 text-white rounded px-5 flex items-center"  >11</span>
                    <span className="bg-gray-700 text-white rounded px-4 flex items-center">12</span>

                  </div>

                  <span className="whitespace-nowrap flex mt-2">
                    October 2025
                  </span>



                </div>



              </div>







              <div >



               <div className="flex justify-between">
                <MapPin className="ms-6 mt-1" size={40}/>
               <span className="   font-normal  text-5xl">
                  Adlux
                  <br />



                </span>
               </div>
              

                <span className="flex justify-end p">
                  International Convention 


                </span>
                <span className="flex justify-end">
                & Exhibition Center
                </span>
                <span className="flex justify-end font-semibold ">
                 Kochi, Kerala
                </span>

              </div>


            </div>

          </div>


        </div>


      </div>


    </>
    //     <div className="relative min-h-screen overflow-hidden bg-transparent flex justify-center items-center max-w-[96rem] mx-auto ">
    //       <div className="flex flex-row justify-between items-center w-full">



    //         <motion.div
    //           variants={staggerContainer}
    //           initial="initial"
    //           animate="animate"
    //           className=" lg:w-1/2  mx-auto px-4 sm:px-6 lg:px-8  pt-40 sm:pt-20  pb-10 text-center"
    //         >
    //           <motion.h1
    //             variants={fadeInUp}
    //             className="text-center sm:text-left text-4xl  sm:text-8xl font-bold text-violet-500 mb-8 whitespace-nowrap "
    //           >

    // Global Wealth 


    //           </motion.h1>

    //           <motion.p
    //             variants={fadeInUp}
    //             className="max-w-2xl text-justify mx-auto -ml-0 text-xl text-gray-600 mb-10"
    //           >
    //             Join us for an extraordinary culinary experience where passion meets
    //             expertise. Book your slot now for exclusive masterclasses and
    //             workshops.
    //           </motion.p>



    //           <div className="flex  flex-col justify-start my-2 ">
    //             <div className="sm:text-5xl flex gap-4 h-16 w-24  ">
    //               <span className="bg-violet-500 text-white rounded p-3 flex items-center" >10</span>
    //               <span className="bg-violet-500 text-white rounded p-3 flex items-center"  >11</span>
    //               <span className="bg-violet-500 text-white rounded p-3 flex items-center">12</span>
    //             </div>

    //             <div className="flex justify-start">

    //             <span className="text-5xl mt-2 font-semibold">October 2025</span>


    //             </div>


    //        <div className="flex justify-start mt-2 mb-2">
    //        <motion.div
    //             variants={fadeInUp}
    //             className="flex flex-col sm:flex-row items-center gap-8 text-lg text-gray-600"
    //           >

    //             <div className="flex items-center gap-2">
    //               <MapPin className="text-primary-600" />
    //               <span className="text-3xl text-bg-violet-500">Adlux Convention Center, Angamaly</span>
    //             </div>
    //           </motion.div>
    //        </div>


    //           </div>


    //           <motion.div
    //             variants={fadeInUp}
    //             className="flex flex-col sm:flex-row gap-4  mb-12"
    //           >


    //             <button className="flex items-center justify-center gap-2 bg-violet-500 text-white px-8 py-4 rounded-lg hover:bg-primary-700 text-lg group" onClick={onTicketClick}>

    //               Book Your Slot
    //               <ArrowRight className="group-hover:translate-x-1 transition-transform" />
    //             </button>
    //             <button className="flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg border-2 border-primary-200 hover:border-primary-300 text-lg">
    //               Explore Schedule
    //             </button>
    //           </motion.div>


    //         </motion.div>
    //         <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="w-1/2 lg:block hidden">
    //           {/* <video className="w-full object-contain" loop autoPlay muted poster="../assets/video/AssemblyLinePosterpreview.png">
    //         <source src="../assets/video/assembly-line.webm" type="video/webm" />
    //         </video> */}
    //  <div className=" overflow-hidden relative ms-6 mt-14">
    //  <img
    //         src="../assets/Expo/ICON.png"
    //         alt="Zoomed Image"
    //         className="transition-transform duration-500 transform  object-cover w-full h-full"
    //       />
    //     </div>

    //         </motion.div>
    //       </div>
    //     </div>
  );
}
