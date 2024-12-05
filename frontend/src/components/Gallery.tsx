import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "./animations";
import "./Gallery.css";

function Gallery() {
  const images = [
    "../assets/Expo/ExpoImage1.JPG",
    "../assets/Expo/ExpoImage2.JPG",
    "../assets/Expo/ExpoImage3.JPG",
    "../assets/Expo/ExpoImage4.JPG",
   
  ];
  return (


    <div className="gallery-wrapper">
        <ul>
          <li>
            <img src="../assets/Expo/ExpoImage1.JPG" alt="tegain" loading="lazy" />
          </li>

          <li>
            <img src="../assets/Expo/ExpoImage2.JPG" alt="Sara on a red bike" loading="lazy" />
          </li>
          <li>
            <img src="../assets/Expo/ExpoImage2.JPG" alt="XOXO venue in between talks" loading="lazy" />
          </li>
          <li>
            <img src="../assets/Expo/ExpoImage2.JPG" alt="Wings 2022" loading="lazy" />
          </li>
          {/* <li>
            <img src={yip} alt="YIP 2023" loading="lazy" />
          </li>
          <li>
            <img src={stype} alt="Stype Program" loading="lazy" />
          </li>
          <li>
            <img src={Summit} alt="IEDC SUMMIT" loading="lazy" />
          </li>
          <li>
            <img src={RWD} alt="Responsive Web Design" loading="lazy" />
          </li>
          <li>
            <img
              src={ribc}
              alt="Rural India Business Conclave"
              loading="lazy"
            />
          </li>
          <li>
            <img src={Beach} alt="Beach Hack" loading="lazy" />
          </li>

          <li>
            <img
              src={FD}
              alt="Frontend Developemt From Freecode Camp"
              loading="lazy"
            />
          </li>
          <li>
            <img src={CDW} alt="CODe Design Week" loading="lazy" />
          </li>

          <li>
            <img src={PSS} alt="PSS" loading="lazy" />
          </li>

          <li>
            <img src={HFT} alt="Hack For Tommorow" loading="lazy" />
          </li>

          <li>
            <img src={TOT} alt="Tek-O-Thon" loading="lazy" />
          </li>
          <li>
            <img src={Define} alt="Define Hackathon" loading="lazy" />
          </li> */}
        </ul>
      </div>
  //   <div className="bg-transparent py-24">
  //   <motion.div
  //     variants={staggerContainer}
  //     initial="initial"
  //     whileInView="animate"
  //     viewport={{ once: true }}
  //     className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  //   >
  //     <motion.div variants={fadeInUp} className="text-center mb-16">
  //       <h2 className="text-4xl font-bold text-gray-900 mb-4">
  //         Previous Year Highlights
  //       </h2>
  //       <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  //         Relive the magical moments from our previous expos through this curated gallery
  //       </p>
  //     </motion.div>

  //     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
  //       {images.map((src, index) => (
  //         <motion.div
  //           key={index}
  //           variants={fadeInUp}
  //           className="overflow-hidden rounded-xl"
  //           whileHover={{ scale: 1.1 }}
  //           transition={{ duration: 0.5 }}
  //         >
  //           <img
  //             src={src}
  //             loading="lazy"
  //             alt={`Expo Image ${index + 1}`}
  //             className="w-full h-auto object-cover"
  //           />
  //         </motion.div>
  //       ))}
  //     </div>
  //   </motion.div>
  // </div>
  );
}
export default Gallery;
