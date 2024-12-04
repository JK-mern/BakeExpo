import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

export function About() {
  return (
    <div className="bg-gray-50 py-24">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About BakeExpo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BakeExpo is the premier gathering of baking professionals,
            enthusiasts, and innovators. Our mission is to inspire, educate, and
            connect the global baking community.
          </p>
        </motion.div>
        <div className="flex justify-center ">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/V6fiezN9TkM?si=3N6xL5YPEeOjZW6L"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true} 
            
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}
