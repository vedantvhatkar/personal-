import { motion } from 'framer-motion';
import { RocketLaunch, Code, Cpu, Bug, ArrowSquareOut } from '@phosphor-icons/react';

export default function Projects() {
  const projects = [
    {
      type: { text: "Startup · Live", icon: <RocketLaunch size={14} className="icon-sm" style={{marginRight: 4}}/> },
      name: "Guidonship",
      desc: "A platform connecting retired professionals with students — so experienced mentors can share real-world knowledge and students gain guidance beyond classrooms.",
      link: "https://www.guidonship.com/"
    },
    {
      type: { text: "Project · Python", icon: <Code size={14} className="icon-sm" style={{marginRight: 4}}/> },
      name: "Python-Based Game",
      desc: "A game built from scratch in Python — exploring game loops, state management, and interactive mechanics as part of learning software development fundamentals."
    },
    {
      type: { text: "Project · AI", icon: <Cpu size={14} className="icon-sm" style={{marginRight: 4}}/> },
      name: "AI Agent",
      desc: "Developing an AI agent — experimenting with automation pipelines, decision-making, and tool-use to understand how intelligent systems act autonomously."
    },
    {
      type: { text: "Research · Security", icon: <Bug size={14} className="icon-sm" style={{marginRight: 4}}/> },
      name: "Bug Bounty Research",
      desc: "Active participation in responsible disclosure programs globally. 109 pending validations, 9 Hall of Fames and growing. Specialising in web application vulnerabilities."
    }
  ];

  return (
    <div className="section" id="projects">
      <div className="sec-num">04</div>
      <motion.div 
        className="sec-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects & Startups
      </motion.div>
      <div className="proj-list">
        {projects.map((p, i) => (
          <motion.div 
            className="pcard" 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="pidx">0{i + 1}</div>
            <div>
              <div className="ptype">
                {p.type.icon}{p.type.text}
              </div>
              <div className="pname">{p.name}</div>
              <div className="pdesc">{p.desc}</div>
            </div>
            {p.link && (
              <a href={p.link} target="_blank" rel="noreferrer" className="plink">
                <ArrowSquareOut size={14} className="icon-sm" style={{marginRight: 4}}/>Visit
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
