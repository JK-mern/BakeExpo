import { motion } from "motion/react";

interface NavbarProps {
  onTicketClick: () => void
}
function Navbar({ onTicketClick }: NavbarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className=" bg-white w-full  py-6 px-3  "
    >
      <div className="flex b justify-between items-center container mx-auto">
        <div>
          <h2 className="text-xl sm:text-3xl font-bold">
            <img src="../assets/Expo/header.png" alt="sds" className="w-32" />
          </h2>
        </div>
        <div className="flex gap-10   items-center justify-center ">
          <ul className="text-lg  h-8 items-center justify-center bg-gray-300 rounded-3xl w-20  hidden sm:flex">Home</ul>

          <ul className="text-lg h-8 hover:bg-gray-300 rounded-3xl w-20 items-center justify-center  hidden sm:flex">Gallery</ul>

          <ul className="text-lg h-8 items-center justify-center hover:bg-gray-300 rounded-3xl w-24 text-center hidden sm:flex">About Us</ul>
          <ul className="text-lg whitespace-nowrap justify-center items-center  hover:bg-gray-300 rounded-3xl w-28 text-center hidden sm:flex">Contact Us</ul>
        </div>

        <div>
          <button className="p-4 bg-violet-600 text-white h-10 flex items-center
           rounded-lg cursor-pointer hover:bg-violet-400" onClick={onTicketClick}>
            Book Ticket
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
