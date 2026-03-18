import { motion } from 'framer-motion';

export default function Recognition() {
  const stats = [
    { num: 9, label: "Hall of Fame" },
    { num: 3, label: "Swag / Promo" },
    { num: 10, label: "Acknowledged" },
    { num: 40, label: "Informational" },
    { num: 55, label: "Duplicate" },
    { num: 109, label: "Pending" }
  ];

  const cards = [
    {
      tags: [{ text: "Hall of Fame", type: "hof" }, { text: "Swag", type: "swag" }, { text: "Cert", type: "cert" }, { text: "Brand Ambassador", type: "amb" }],
      name: "HackWithIndia",
      year: "2026 — India's Biggest Live Hacking Event",
      num: "01"
    },
    {
      tags: [{ text: "Acknowledged", type: "ack" }],
      name: "Government of India",
      year: "2025 — National Level Recognition",
      num: "02"
    },
    {
      tags: [{ text: "Hall of Fame", type: "hof" }],
      name: "CyWer Learning",
      year: "2025",
      num: "03"
    },
    {
      tags: [{ text: "Hall of Fame", type: "hof" }, { text: "Swag", type: "swag" }],
      name: "PesCheck",
      year: "2025",
      num: "04"
    },
    {
      tags: [{ text: "Hall of Fame", type: "hof" }, { text: "Cert", type: "cert" }],
      name: "WhozIdis",
      year: "2025",
      num: "05"
    },
    {
      tags: [{ text: "Hall of Fame", type: "hof" }],
      name: "Site Connect",
      year: "2026",
      num: "06"
    },
    {
      tags: [{ text: "Hall of Fame", type: "hof" }],
      name: "Informatica",
      year: "2026",
      num: "07"
    },
    {
      tags: [{ text: "Hall of Fame", type: "hof" }],
      name: "UCartz",
      year: "2025",
      num: "08"
    }
  ];

  return (
    <div className="section" id="recognition">
      <div className="sec-num">03</div>
      <motion.div 
        className="sec-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Recognition
      </motion.div>
      
      <motion.div 
        className="bounty-box"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="bounty-top">
          <div className="bounty-heading">Bug Bounty Tracker</div>
          <div className="live-pill"><span className="dot"></span>Active · Ongoing</div>
        </div>
        <div className="b-grid">
          {stats.map((st, i) => (
            <div className="bstat" key={i}>
              <span className="bnum">{st.num}</span>
              <span className="blbl">{st.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="recog-grid">
        {cards.map((c, i) => (
          <motion.div 
            className="rcard" 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="rtags">
              {c.tags.map((tag, j) => (
                <span className={`rtag ${tag.type}`} key={j}>{tag.text}</span>
              ))}
            </div>
            <div className="rname">{c.name}</div>
            <div className="ryear">{c.year}</div>
            <div className="rcard-num">{c.num}</div>
          </motion.div>
        ))}
        
        <motion.div 
          className="rcard pipe"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="live-pill" style={{ marginBottom: "0.9rem" }}>
            <span className="dot"></span>Active · Ongoing
          </div>
          <div className="rname">Pipeline Expanding</div>
          <div className="rdesc">
            109 pending validations across programmes.<br/>
            Recognised across multiple countries.<br/>
            New Hall of Fames incoming.
          </div>
          <div className="rcard-num">→</div>
        </motion.div>
      </div>
    </div>
  );
}
