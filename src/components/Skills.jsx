import { motion } from 'framer-motion';

export default function Skills() {
  const capabilities = [
    "VAPT", "Pentesting", "Vulnerability Management", 
    "Ethical Hacking", "Python Dev", "Recon", 
    "Web Security", "Bug Bounty", "Startup Building"
  ];
  
  const tools = [
    "Nmap", "Burp Suite", "SQLMap", "Nikto", 
    "OWASP ZAP", "Kali Linux", "Wireshark", 
    "Nessus", "Metasploit"
  ];

  return (
    <div className="section" id="skills">
      <div className="sec-num">02</div>
      <motion.div 
        className="sec-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills & Arsenal
      </motion.div>
      <div className="skills-cols">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <div className="skills-label">Capabilities</div>
          <div className="tag-cloud">
            {capabilities.map((tag, i) => (
              <span className="stag" key={i}>{tag}</span>
            ))}
          </div>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <div className="skills-label">Tools</div>
          <div className="tag-cloud">
            {tools.map((tag, i) => (
              <span className="stag" key={i}>{tag}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
