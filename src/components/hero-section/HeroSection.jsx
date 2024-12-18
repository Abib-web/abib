import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { motion, AnimatePresence } from "framer-motion";
import "./HeroSection.css";

const Hero = () => {
  const typedRef = useRef(null);
  const [showAvatar, setShowAvatar] = useState(true);

  useEffect(() => {
    const options = {
      strings: [
        "Finissant en génie électrique, concentration génie informatique 🚀",
        "Développeur Full Stack 💻",
        "Passionné par l'électronique ⚡",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);
    return () => typed.destroy();
  }, []);

  // Change d'image toutes les 6 secondes
  useEffect(() => {
    const interval = setInterval(() => setShowAvatar((prev) => !prev), 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Salut, je suis <span>Oumar</span> 👋</h1>
        <h2><span ref={typedRef}></span></h2>
        <p>
          Je conçois des systèmes embarqués performants et développe des solutions web modernes.
        </p>
        <div className="hero-buttons">
          <button>Voir mes projets</button>
          <button>Écris-moi</button>
        </div>
      </div>

      <div className="hero-visuals">
        <AnimatePresence>
          {showAvatar ? (
            <motion.img
              key="avatar"
              src="./avataaars.png"
              alt="Avatar"
              className="hero-image"
              initial={{ opacity: 0, x: 50 }} // Commence avec un décalage
              animate={{ opacity: 1, x: 0 }} // Revient à sa place
              exit={{ opacity: 0, x: -50 }} // Disparaît en glissant à gauche
              transition={{ duration: 1.5, ease: "easeInOut" }} // Transition plus longue et douce
            />
          ) : (
            <motion.img
              key="pcb"
              src="./vishnu-mohanan-Rp2qgKrTEJQ-unsplash.jpg"
              alt="PCB"
              className="hero-image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
