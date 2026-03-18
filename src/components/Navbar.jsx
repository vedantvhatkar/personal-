import { useState } from 'react';
import { List, X } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="nav">
        <div className="nav-logo">
          Vedant <span>Vhatkar</span>
        </div>
        <div className="nav-links">
          <a href="#story">Story</a>
          <a href="#skills">Skills</a>
          <a href="#recognition">Recognition</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="nav-cta">Contact</a>
        </div>
        <button className="nav-burger" onClick={toggleMenu} aria-label="Menu" style={{ background: 'transparent', border: 'none', color: 'var(--text)' }}>
          <List size={28} />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'flex' }}
          >
            <button className="mobile-close" onClick={toggleMenu}>
              <X size={32} />
            </button>
            <a href="#story" onClick={toggleMenu}>Story</a>
            <a href="#skills" onClick={toggleMenu}>Skills</a>
            <a href="#recognition" onClick={toggleMenu}>Recognition</a>
            <a href="#projects" onClick={toggleMenu}>Projects</a>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
