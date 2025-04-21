import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideLeft, SlideRight, SlideUp, ZoomIn } from '../../animations/animation'; // ✅ Vlastní animace

export default function MerchSection() {
  const [activeProduct, setActiveProduct] = useState(0);
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "PRODUKT #1",
      description: "Arma III tričko",
      image: "/merch/shirtarma.png",
      link: "https://store.bistudio.com/products/arma-3-t-shirt"
    },
    {
      id: 2,
      name: "PRODUKT #2",
      description: "Mikina s kapucí Arma III",
      image: "/merch/mikinaarma.png",
      link: "https://www.alza.cz/gaming/bohemia-interactive-arma-3-map-style-hoodie-black?dq=12572412"
    },
    {
      id: 3,
      name: "PRODUKT #3",
      description: "Arma Reforger Hrnek",
      image: "/merch/cuparma.png",
      link: "https://www.alza.cz/gaming/bohemia-interactive-arma-reforger-cup-green-d12522124.htm"
    }
  ];

  const safeActiveProduct = Math.max(0, Math.min(activeProduct, products.length - 1));

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const scrollPosition = scrollRef.current.scrollTop;
      const totalHeight = scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
      if (totalHeight === 0) return;
      const progress = scrollPosition / totalHeight;
      const productIndex = Math.min(
        Math.floor(progress * products.length),
        products.length - 1
      );
      setActiveProduct(productIndex);
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [products.length]);

  const currentProduct = products[safeActiveProduct] || products[0];

  return (
    <div id='merch' ref={containerRef} className="text-white bg-[#6C5940] w-full min-h-[90vh] flex flex-col items-center justify-center p-4 md:p-8">
      {/* 🛍 Nadpis sekce s animací */}
      <motion.h1
        variants={ZoomIn(0.1)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
      >
        MERCH
      </motion.h1>

      {/* 🧩 Rozložení sekce */}
      <div className="flex flex-col md:flex-row md:ml-52 w-full max-w-5xl justify-center  items-start md:items-center gap-12">
        {/* 📜 Levá strana - navigace */}
        <motion.div
          variants={SlideLeft(0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          className="w-full md:w-1/4 relative flex md:block justify-center md:justify-end"
        >
          {/* 🔘 Mobilní tlačítka */}
          <div className="flex flex-col gap-2 md:hidden w-full items-center">
            {products.map((product, index) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(index)}
                className={`w-full max-w-xs py-2 px-4 border-l-4 transition-all duration-300 text-left ${safeActiveProduct === index ? 'border-white text-white' : 'border-gray-700 text-gray-500'}`}
              >
                {product.name}
              </button>
            ))}
          </div>

          {/* 🖱 Desktop scroll indikace */}
          <div className="hidden md:block">
            <div className="absolute top-[-10px] left-[-20px] w-px bg-gray-700 h-80"></div>
            <div
              ref={scrollRef}
              className="h-72 scrollbar-custom overflow-y-auto w-full"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#ffffff #000000'
              }}
            >
              {[...Array(products.length)].map((_, i) => (
                <div key={i} className="h-72">
                  <div className="h-full"></div>
                </div>
              ))}
            </div>
            <div className="absolute top-0 left-0 pointer-events-none w-full">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`py-8 ${index !== 0 ? 'mt-3' : ''} transition-all duration-300 border-l-2 pl-4 ${safeActiveProduct === index ? 'border-white' : 'border-gray-700'}`}
                >
                  <p className={`text-lg font-medium ${safeActiveProduct === index ? 'text-white' : 'text-gray-500'}`}>
                    {product.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ✍️ Střed - popis produktu */}
        <motion.div
          variants={SlideUp(0.3)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          className="w-full md:w-1/4 flex justify-center items-center text-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={safeActiveProduct}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-base md:text-lg"
            >
              {currentProduct.description}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* 🖼 Pravá strana - obrázek a tlačítko */}
        <motion.div
          variants={SlideRight(0.4)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          className="w-full md:w-2/4 flex flex-col items-center justify-center"
        >
          {/* Obrázek produktu */}
          <div className="mb-4 md:mb-6 w-64 h-64 md:w-96 md:h-96 flex justify-center items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={safeActiveProduct}
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 90 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Tlačítko pro zakoupení */}
          <a
            href={currentProduct.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white py-2 px-6 md:px-8 hover:bg-white hover:text-black transition-colors duration-300"
          >
            ZAKOUPIT
          </a>
        </motion.div>
      </div>

      {/* 🔵 Indikátory aktuálního produktu */}
      <div className="mt-12 md:mt-24 flex gap-2 md:gap-3 justify-center">
        {products.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${safeActiveProduct === index ? 'bg-white' : 'bg-black'}`}
          ></div>
        ))}
      </div>

      {/* Styl scrollbaru */}
      <style jsx>{`
        .scrollbar-custom::-webkit-scrollbar {
          width: 4px;
        }

        .scrollbar-custom::-webkit-scrollbar-track {
          background: #000000;
        }

        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: #ffffff;
        }

        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: #aaaaaa;
        }
      `}</style>
    </div>
  );
}
