import { motion } from "motion/react";

interface NavbarProps {
  onTicketClick : () => void
}
function Navbar({onTicketClick} : NavbarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6,  ease : "easeInOut"}}
      className="absolute w-full z-50 py-6 px-3  border-b border-b-gray-300"
    >
      <div className="flex justify-between  items-center container mx-auto">
        <div>
          <h2 className="text-3xl font-bold">
            Bake <span className="text-violet-600">Expo</span>
          </h2>
        </div>
        <div className="flex gap-6  items-center ">
          <ul className="text-lg">Home</ul>
          <ul className="text-lg">About Us</ul>
          <button className="p-4 bg-violet-600 text-white rounded-lg cursor-pointer hover:bg-violet-400" onClick={onTicketClick}>
            Book Ticket
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
