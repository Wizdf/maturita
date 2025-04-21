import React from 'react';

const ParallaxSection = () => {
  return (
    <section className="w-full bg-fixed bg-center bg-no-repeat bg-cover shadow-lg"
      style={{
        backgroundImage: "url(./parallax.jpg  )",
        height: '32rem' // equivalent to h-128
      }}
    >
      <div className="flex justify-center items-center h-full">
        
      </div>
    </section>
  );
};

export default ParallaxSection;
