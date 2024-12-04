import { Sparkles, TrendingUp, Users } from 'lucide-react';
import { motion } from "framer-motion";


interface ExibitProps  {
  onTicketClick : () => void
}

const WhyExhibit = ({ onTicketClick }: ExibitProps)=>{
  const benefitItems = [
    {
      icon: Users,
      title: "Connect with Food Innovators",
      description: "Meet passionate chefs, bakery owners, and industry leaders who are shaping the future of food."
    },
    {
      icon: Sparkles,
      title: "Showcase Your Creations",
      description: "Put your latest products, ingredients, and innovations center stage in front of enthusiastic industry professionals."
    },
    {
      icon: TrendingUp,
      title: "Grow Your Business",
      description: "Transform connections into opportunities – discover new partnerships, clients, and market insights."
    }
  ];

  return (
    <section className="bg-transparent py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Join <span className="text-violet-600">Bake Expo 2025</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
            Where culinary passion meets business opportunity. Your recipe for success starts here.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefitItems.map((item, index) => (
            <motion.div 
            key={index} 
            initial={{}} 
            whileHover={{ scale: 1.1 }} 
              className="bg-violet-50 rounded-lg p-16 text-center hover:bg-violet-100 transition-colors duration-300"
            >
              <div className="bg-violet-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <item.icon size={36} className="text-violet-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-lg ">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-violet-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-gray-800 mb-6">
              Your Invitation to Flavor & Success
            </h4>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={onTicketClick} className="bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition-colors">
                Reserve Your Spot
              </button>
              <button className="border border-violet-600 text-violet-600 px-6 py-3 rounded-lg hover:bg-violet-50 transition-colors">
                Event Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyExhibit;