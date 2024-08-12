
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useInView } from 'react-intersection-observer';

interface Section {
  name: string;
  image: string;
  description: string;
}

const sections: Section[] = [
  {
    name: 'Apparel',
    image: 'https://plus.unsplash.com/premium_photo-1700056212664-a2998bf82d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwYXJlbHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Discover our exquisite apparel collection, crafted to perfection, blending style with comfort. Elevate your wardrobe with our latest trends and timeless pieces.',
  },
  {
    name: 'Automotive',
    image: 'https://images.unsplash.com/photo-1676288176869-b2e1c6bea1a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXV0b21vdGl2ZXxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Drive innovation with our cutting-edge automotive solutions, engineered for performance and reliability. Experience the future of mobility today.',
  },
  {
    name: 'Filtration',
    image: 'https://images.unsplash.com/photo-1581812258139-4dd268b93be6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlsdHJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Purify your world with our advanced filtration systems, designed to deliver clean and safe environments. Breathe easy with our trusted solutions.',
  },
  {
    name: 'Customized Solutions',
    image: 'https://plus.unsplash.com/premium_photo-1682123852417-6c6ae9001056?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3VzdG9taXplZHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Tailored to your needs, our customized solutions offer unparalleled flexibility and innovation. Partner with us to create something truly unique.',
  },
];

const HeroSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(sections[0]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const handleSectionChange = (section: Section) => {
    setActiveSection(section);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <CSSTransition
        in={inView}
        timeout={1000}
        classNames="fade"
        key={activeSection.name}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${activeSection.image})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 h-full flex flex-col justify-center items-start p-6 lg:p-12">
            <div className="w-full max-w-[33%] lg:max-w-[25%] text-white">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                Elevate Experiences <span className="text-blue-300">[{activeSection.name}]</span>
              </h1>
              <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                {activeSection.description}
              </p>
            </div>
          </div>
        </div>
      </CSSTransition>

      <div
        ref={ref}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 p-4 flex flex-col space-y-4"
      >
        {sections.map((section) => (
          <div
            key={section.name}
            className={`cursor-pointer py-2 px-4 transition duration-300 ease-in-out rounded-lg ${
              activeSection.name === section.name
                ? 'bg-blue-500 text-white font-semibold shadow-md'
                : 'text-white hover:bg-blue-500 hover:text-white'
            }`}
            onClick={() => handleSectionChange(section)}
          >
            {section.name}
            {activeSection.name === section.name && (
              <span className="text-blue-300 text-lg ml-2">●</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;

  