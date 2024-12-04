import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from './animations';

const representatives = [
  {
    name: "Biju",
    role: "Vice President",
    image: "/assets/People/biju.JPG",
    description: "Award-winning pastry chef specializing in French patisserie"
  },
  {
    name: "Kiran",
    role: "President",
    image: "/assets/People/kiran.JPG",
    description: "Expert in artisanal bread and traditional baking techniques"
  },
  {
    name: "Kiran",
    role: "President",
    image: "/assets/People/kiran.JPG",
    description: "Expert in artisanal bread and traditional baking techniques"
  },
  {
    name: "Kiran",
    role: "President",
    image: "/assets/People/kiran.JPG",
    description: "Expert in artisanal bread and traditional baking techniques"
  },

];

export function Representatives() {
  return (
    <div className="bg-white py-24">
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Representatives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from industry leaders who are shaping the future of baking
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {representatives.map((rep, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-shadow"
            >
              <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                <img 
                  src={rep.image} 
                  alt={rep.name}
                  loading= 'lazy'
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{rep.name}</h3>
                <p className="text-primary-600 mb-2">{rep.role}</p>
                <p className="text-gray-600">{rep.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}