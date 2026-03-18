import { ShieldCheck, RocketLaunch, Terminal, Medal, MapPin, Trophy, Briefcase } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-decorations">
        <motion.div 
          className="blob blob-1"
          animate={{ x: [0, 50, 0], y: [0, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="blob blob-2"
          animate={{ x: [0, -70, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="hero-bg">
        <motion.div 
          className="hero-bg-txt"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          VV
        </motion.div>
      </div>
      <div className="hero-left">
        <motion.div 
          className="hero-eyebrow"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Mumbai, India · 16 Years Old
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div>Vedant</div>
          <div className="dim">Vhatkar</div>
        </motion.h1>
        <motion.div 
          className="hero-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <strong>Student. Ethical Hacker. Founder.</strong><br/>
          Hunting vulnerabilities, building startups, and pushing the limits of what a 16-year-old can do in tech.
        </motion.div>
        
        <motion.div 
          className="hero-badges"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="hbadge gold"><ShieldCheck size={14} className="icon-sm" style={{marginRight: 4}}/>Ethical Hacker</span>
          <span className="hbadge gold"><RocketLaunch size={14} className="icon-sm" style={{marginRight: 4}}/>Founder @Guidonship</span>
          <span className="hbadge"><Terminal size={14} className="icon-sm" style={{marginRight: 4}}/>VAPT Intern · Cyart</span>
          <span className="hbadge"><Medal size={14} className="icon-sm" style={{marginRight: 4}}/>Brand Ambassador · HackWithIndia</span>
        </motion.div>
        
        <motion.div 
          className="hero-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <div className="hero-meta-item"><MapPin size={14} className="icon-sm" style={{marginRight: 4}}/>Mumbai, India</div>
          <div className="hero-meta-item"><Trophy size={14} className="icon-sm" style={{marginRight: 4}}/>HoF: <span>9 Organisations</span></div>
          <div className="hero-meta-item"><Briefcase size={14} className="icon-sm" style={{marginRight: 4}}/>Intern: <span>Cyart – VAPT</span></div>
        </motion.div>
      </div>
      
      <motion.div 
        className="hero-photo-wrap"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="hero-photo-frame">
          <img src={profileImg} alt="Vedant Vhatkar" />
        </div>
      </motion.div>
      
      <div className="hero-scroll">Scroll</div>
    </section>
  );
}
