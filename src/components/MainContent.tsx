import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ContentItem {
  image: string;
  title: string;
  description: string;
}

const contentData: ContentItem[] = [
  {
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHx8fHx8fHx8",
    title: "Embracing digital transformation",
    description: "Our pillars of Technology Development, System Integration, and Process Engineering drive innovation, streamline operations, and ensure long-term success in a dynamic market.",
  },
  {
    image: "https://images.unsplash.com/photo-1593349480506-8433634cdcbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5ub3ZhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Innovating for the future",
    description: "Leading the way with cutting-edge solutions that address tomorrow's challenges today.",
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHx8fHx8fHx8",
    title: "Sustainable growth",
    description: "Building a future where sustainability and growth go hand in hand.",
  },
  {
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHx8fHx8fHx8",
    title: "Empowering people",
    description: "Investing in talent and creating opportunities for everyone to thrive.",
  },
  {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHx8fHx8fHx8",
    title: "Future of technology",
    description: "Pioneering advancements that shape the future of technology and society.",
  },
];

const MainContent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
  };

  return (
    <section ref={ref} className="py-16">
      <div className="container mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-8"
        >
          <span className="text-blue-500">Next era</span> of possibilities
        </motion.h2>
        <div className="relative overflow-hidden w-full h-full">
          <motion.div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.6 }}
          >
            {contentData.map((item, index) => (
              <motion.div
                key={index}
                className="min-w-full flex-shrink-0 flex flex-col justify-center items-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto max-h-80 md:max-h-96 object-cover"
                />
                <div className="text-center p-4">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <button
            onClick={handleNextClick}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-200 focus:outline-none"
          >
            Next
          </button>
        </div>
        <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          How do we innovate?
        </button>
      </div>
    </section>
  );
};

export default MainContent;

