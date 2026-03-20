import { motion } from 'framer-motion';
import { ShieldCheck, Trophy, TrendUp } from '@phosphor-icons/react';

export default function Story() {
  return (
    <div className="section" id="story">
      <div className="sec-num">01</div>
      <motion.div 
        className="sec-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        The Founder's Story
      </motion.div>
      <div className="story-grid">
        <motion.div 
          className="story-text"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p>Vedant Vhatkar began his journey in cybersecurity at the age of <strong>16</strong>, driven by curiosity and a desire to understand how systems work and where they fail. Along the way, his work has been acknowledged through <strong>Hall of Fame recognitions</strong> from multiple organizations, recognition from the <strong>Government of India</strong>, participation in one of India's largest live hacking events, and a role as a <strong>Brand Ambassador at HackWithIndia</strong>.</p>
          <p>He is currently working as a <strong>VAPT intern at Cyart</strong>, while also exploring entrepreneurship and building the foundation for a venture focused on improving digital safety — particularly for middle-class families who often lack access to strong security solutions.</p>
          <p>His approach is simple: <strong>knowledge grows when it is shared.</strong> Beyond identifying vulnerabilities, he focuses on building systems, contributing to communities like Guidonship, and continuing to learn — one step at a time.</p>
        </motion.div>
        
        <div className="story-cards">
          {[
            {
              icon: <ShieldCheck size={22} />,
              title: "VAPT Intern @ Cyart",
              desc: "Performing professional vulnerability assessments and penetration testing. Real-world security work at 16."
            },
            {
              icon: <Trophy size={22} />,
              title: "Security Researcher",
              desc: "13 Hall of Fames. Acknowledged by the Government of India and 8 organisations worldwide."
            },
            {
              icon: <TrendUp size={22} />,
              title: "Aspiring Founder",
              desc: "Studying entrepreneurship and preparing to launch a cybersecurity venture for India."
            }
          ].map((card, i) => (
            <motion.div 
              className="scard" 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <div className="scard-icon">{card.icon}</div>
              <div className="scard-title">{card.title}</div>
              <div className="scard-desc">{card.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
