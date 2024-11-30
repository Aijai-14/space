import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import 'react-vertical-timeline-component/style.min.css';

// Hyperspace Background Component
const HyperspaceBackground = () => {
  const starColors = [
    // Hot Blue Stars (O-type)
    "#9BB0FF", // Bright blue
    "#87CEEB", // Sky blue
    "#4682B4", // Steel blue
  
    // Blue-White Stars (B-type)
    "#B2C7FF", // Soft blue-white
    "#A0BFFF", // Pale azure
    "#8CA9FF", // Icy blue
  
    // White Stars (A-type)
    "#F8F7FF", // Brilliant white
    "#E0E5FF", // Slightly bluish white
    "#D8DFFF", // Silvery white
  
    // Yellow-White Stars (F-type)
    "#FFF4E5", // Warm yellow-white
    "#FFEFD9", // Creamy yellow
    "#FFEBCC", // Pale golden yellow
  
    // Yellow Stars (G-type, like the Sun)
    "#FFF1B5", // Sunlit yellow
    "#FFE5A0", // Soft golden yellow
    "#FFDC82", // Radiant yellow
  
    // Orange Stars (K-type)
    "#FFBF70", // Vibrant orange
    "#FFA347", // Deep orange
    "#FF8C00", // Burnt orange
  
    // Red Stars (M-type)
    "#FF6A6A", // Rosy red
    "#FF4500", // Intense red-orange
    "#FF2400"  // Deep red
  ];  
  const stars = Array(200).fill().map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 30,
    speed: Math.random() * 0.5 + 0.1,
    color: starColors[Math.floor(Math.random() * starColors.length)]
  }));

  return (
    <div className="fixed inset-0 overflow-hidden bg-black z-0">
      {stars.map((star, index) => (
        <img 
        key={index}
        src="/sun.png" // Replace this with the actual path to your star PNG
        alt="Star"
        className="absolute opacity-70 animate-hyperspace animate-star"
        style={{
          left: `${star.x}%`, 
          top: `${star.y}%`, 
          width: `${star.size}px`, 
          height: `${star.size}px`,
          animationDuration: `${5 / star.speed}s`,
          filter: `drop-shadow(0 0 5px ${star.color}) hue-rotate(${Math.random() * 360}deg)` // Optional: adds a glow effect matching the color
        }}
      />
      ))}
    </div>
  );
};

// Timeline Navigation Component
const TimelineNavigation = ({ onSelect }) => {
  // Time points for events (in billions of years)
  const timelineItems = [
    { label: 'First Stars Emerge', image: '/firststars.jpg', imageCite: 'https://webbtelescope.org/contents/articles/what-were-the-first-stars-like', citation: 'Bromm, V. (2013). Formation of the first stars. Reports on Progress in Physics, 76(11), 112901.',
      link: 'https://iopscience.iop.org/article/10.1088/0034-4885/76/11/112901/meta', article: 'https://arxiv.org/pdf/1305.5178',
      description: 'Bromm, V. (2013) indicates that early stars emerged a couple 100 million years after the Big Bang. The research here shows that this range for early star formation is likely due to large supermassive stars forming early on in giant clouds of gas and ions that have masses of 10^6 solar masses and redshift values of 20 to 30. Most of these stars fragment into binary star systems which could explain star formation of smaller and cooler stars.', timeElapsed: 0.2, icon: '⭐'}, // 200 million years

    { label: 'Cosmic Reionization Era Ends', image: '/cosmic.png', imageCite: 'https://webbtelescope.org/contents/media/images/2020/37/4697-Image',
      
      citation: 'Ahn, K., & Shapiro, P. R. (2021). Cosmic reionization may still have started early and ended late: Confronting early onset with cosmic microwave background anisotropy and 21 cm global signals. The Astrophysical Journal, 914(1), 44.',
      link: 'https://iopscience.iop.org/article/10.3847/1538-4357/abf3bf/meta', article: 'https://iopscience.iop.org/article/10.3847/1538-4357/abf3bf/pdf',  
      description: 'Ahn, K., & Shapiro, P. R. (2021) indicates that cosmic reionization may seem to have started from fainter, more red-shifted light longer back then expected from halos of massive stellar objects. Their experiment uses CMB data and different models for this era of the universe to test possible ionization conditions, and they find higher redshift z values, indicating ionization occurring much further back to at least 1 billion years after the Big Bang.', timeElapsed: 2.5, icon: '☄️' }, // Around 2.5 billion years
    
      { label: 'Quasar Epoch', image: '/quasar.webp', citation: 'Haehnelt, M. G., & Rees, M. J. (1993). The formation of nuclei in newly formed galaxies and the evolution of the quasar population. Monthly Notices of the Royal Astronomical Society, 263(1), 168-178.',
        imageCite: 'https://medium.com/@therandomrealm1/ancient-quasar-discovery-reveals-black-holes-role-in-halting-star-formation-in-early-universe-88e6d459a36b',
        
        
        link: 'https://academic.oup.com/mnras/article/263/1/168/1052331', article: 'https://adsabs.harvard.edu/pdf/1993MNRAS.263..168H',
        description: 'Haehnelt, M. G., & Rees, M. J. (1993) explores the formation of quasars, their luminosity and their evolution which is short lived as compared to the supermassive black holes at their centres. Quasar luminosity is seen to have a peak in formation at average redshift values which means they began formation about 3-5 billion years after the Big Bang. They also predict this could explain the sizes of galaxies formed after this period.', timeElapsed: 5.5, icon: '⚫' }, // Around 5.5 billion years
    
        { label: 'First Spiral Galaxies Emerge', image: '/sprial.webp', citation: 'Martig, M., Bournaud, F., Croton, D. J., Dekel, A., & Teyssier, R. (2012). A diversity of progenitors and histories for isolated spiral galaxies. The Astrophysical Journal, 756(1), 26.', 
          link: 'https://iopscience.iop.org/article/10.1088/0004-637X/756/1/26/meta', article: 'https://iopscience.iop.org/article/10.1088/0004-637X/756/1/26/pdf',
          imageCite: 'https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-51/',
          description: 'Martig, M., Bournaud, F., Croton, D. J., Dekel, A., & Teyssier, R. (2012) lays out that spiral galaxies and complex galaxy shapes share deep correlation with mass distribution and accretion rates. Using the Milky Way as a reference and simulating the environment during the Milky Way’s formation, they find that a low bulge mass ratio and a slow, constant gas accretion rate provide the necessary conditions for spiral arms to stabilize. This analysis was done with conditions of the universe from 6 to 10 billion years after the Big Bang.', timeElapsed: 10, icon: '🌌' }, // 10 billion years
    
    
        { label: 'First Humans on Earth', image: '/human.jpg', citation: 'McDougall, I., Brown, F. H., & Fleagle, J. G. (2005). Stratigraphic placement and age of modern humans from Kibish, Ethiopia. nature, 433(7027), 733-736.', 
          imageCite: 'https://www.history.com/news/humans-evolution-neanderthals-denisovans',
          link: 'https://www.nature.com/articles/nature03258', article: 'https://doc.rero.ch/record/15078/files/PAL_E2238.pdf/',
          description: 'McDougall, I., Brown, F. H., & Fleagle, J. G. (2005) discovered remains/fossils in southern Ethiopia that indicate a precursor to modern day homo sapiens existed earlier than believed. The commonly believed time for human emergence was 104 ± 7 kyr, but with fossils indicate a proposed age of 198 ± 14 kyr. This prediction was made from the Argon-40 and Argon-39 isotope concentrations found in the remains and the effect of the surrounding deposition of rocks and minerals in the region on the decay of Argon isotopes.', timeElapsed: 13.7, icon: '🧠'  }, // 13.2 billion years (very recent)
  ];

  const totalTimelineLength = 13.8; // Total length of time from Big Bang to present (13.8 billion years)

  return (
    <div className="relative z-20 p-4 text-white animate-timeline" style={{ height: '50%', position: 'absolute', top: '0', left: '0', right: '0' }}>
      <div className="absolute top-1/2 w-full h-1 bg-gray-300 transform -translate-y-1/2 mb-10"></div>
      <div className="relative flex items-center w-full h-full mb-10">
        {timelineItems.map((item, index) => {
          const position = Math.round((item.timeElapsed / totalTimelineLength) * 100);
          
          if (index === 4) {
            return (
              <div key={index} className="absolute flex flex-col items-center cursor-pointer hover:text-blue-300 transition-colors" style={{ right: `${100 - position}%`, transform: 'translateX(50%)' }}  onClick={() => onSelect(item)}>
                <div className="mt-3 text-center text-sm mr-24">{item.timeElapsed} Billion Years {item.icon} </div>
                <div className="w-1 h-8 bg-gray-300"></div>
                <div className="mt-3 text-center text-sm mr-24">{item.label}</div>
              </div>
            );
          }
          
          return (
            <div key={index} className="absolute flex flex-col items-center cursor-pointer hover:text-blue-300 transition-colors" style={{ left: `${position}%`, transform: 'translateX(-50%)' }} onClick={() => onSelect(item)}>
              <div className="mt-3 text-center text-sm ml-16">{item.timeElapsed} Billion Years {item.icon} </div>
              <div className="w-1 h-8 bg-gray-300"></div>
              <div className="mt-3 text-center text-sm ml-16">{item.label}</div>
            </div>
          );
        })}
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10 mt-64">
        <h1 className="text-6xl font-bold text-white animate-pulse">Select a Moment in The Universal Timeline to Learn More 🧑‍🚀</h1>
      </div>
    </div>
  );
};


const HyperspaceLanding = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [titleVisible, setTitleVisible] = useState(true);
  const [timelineVisible, setTimelineVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleVisible(false);
      // Adding a slight delay ensures proper animation
      setTimeout(() => setTimelineVisible(true), 100);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);
  

  return (
    <div className="relative h-screen overflow-hidden">
      <HyperspaceBackground />

      {/* Timeline Navigation */}
      {timelineVisible && (
          <TimelineNavigation onSelect={setSelectedItem} />
      )}

      {/* Welcome Title */}
      {titleVisible && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-6xl font-bold text-white animate-pulse">
            Welcome to Outer Space 🚀 Explore!
          </h1>
        </div>
      )}

      {/* Ant Design Modal */}
      {selectedItem && (
        <Modal
        title={selectedItem.timeElapsed + ' Billion Years Since The Big Bang'}
        open={!!selectedItem}
        onCancel={() => setSelectedItem(null)}
        footer={null}
      >
        <div className="text-center">
          {/* Image */}
          <img
            src={selectedItem.image}
            alt={selectedItem.label}
            className="mx-auto mb-4 max-h-64 object-cover"
          />

          {/* Image Citation */}
          <p className="text-sm text-gray-500 italic mb-4">
            Image Source: <a href={selectedItem.imageCite} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{selectedItem.imageCite}</a>
          </p>
      
          {/* Citation Title */}
          <h2 className="text-xl font-bold mb-2">{selectedItem.label}</h2>
      
          {/* Subtitle */}
          <h3 className="text-lg font-semibold italic mb-4">
            APA Citation Below
          </h3>
      
          {/* Citation Details */}
          <p className="text-base text-justify leading-relaxed mb-4">
            {selectedItem.citation} <br />
            <strong>Web-Link:</strong>{' '}
            <a
              href={selectedItem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {selectedItem.link}
            </a> <br />
            <strong>Article-Link:</strong>{' '}
            <a
              href={selectedItem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {selectedItem.article}
            </a>
          </p>
      
          {/* Content Paragraph */}
          <p className="text-base text-justify leading-relaxed mb-4">
            <strong>Citation-Importance:</strong>{' '}
          </p>
          <p className="text-base text-justify leading-relaxed">
            {selectedItem.description}
          </p>
        </div>
      </Modal>      
      )}
    </div>
  );
};


export default HyperspaceLanding;