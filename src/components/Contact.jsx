import { motion } from 'framer-motion';
import { Envelope, LinkedinLogo, CalendarBlank, CaretRight, MapPin, Code } from '@phosphor-icons/react';

export default function Contact() {
  return (
    <>
      <div className="section" id="contact">
        <div className="sec-num">05</div>
        <motion.div 
          className="sec-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.div>
        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="ct-desc">
              Open to connect for <strong>cybersecurity collaboration</strong>, startup discussions, technology projects, or just a good conversation about the future of tech.
            </div>
            <div className="ct-links">
              <a href="mailto:vedantvhatkar5@gmail.com" className="ct-link">
                <span className="ic"><Envelope size={18} /></span>vedantvhatkar5@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/vedant-t-vhatkar-628166357/" target="_blank" rel="noreferrer" className="ct-link">
                <span className="ic"><LinkedinLogo size={18} /></span>linkedin.com/in/vedant-t-vhatkar
              </a>
              <a href="https://calendly.com/vedantvhatkar5" target="_blank" rel="noreferrer" className="ct-link">
                <span className="ic"><CalendarBlank size={18} /></span>Book a Meeting — Calendly
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="open-box">
              <div className="open-lbl">Open to</div>
              <div className="open-list">
                {[
                  "Cybersecurity collaboration",
                  "Startup discussions",
                  "Technology projects",
                  "Mentorship & networking",
                  "Bug bounty team-ups"
                ].map((item, i) => (
                  <div className="open-item" key={i}>
                    <CaretRight size={14} className="icon-sm" style={{marginRight: 4}}/>{item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <footer>
        <div className="f-logo">Vedant Vhatkar</div>
        <div className="f-right" style={{display: 'flex', alignItems: 'center'}}>
          <MapPin size={14} className="icon-sm" style={{marginRight: 4}}/>Mumbai, India <span style={{display: 'inline-block', margin: '0 8px'}}>·</span> <Code size={14} className="icon-sm" style={{marginRight: 4}}/> Crafted with React
        </div>
      </footer>
    </>
  );
}
