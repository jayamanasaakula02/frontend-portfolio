import { motion } from 'framer-motion';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import SkillBar from '../../components/SkillBar/SkillBar';
import styles from './Skills.module.css';

const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 }
        }
    };

    const sectionVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const frontendSkills = [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3 / SASS', level: 90 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'React JS', level: 80 },
        { name: 'Bootstrap', level: 85 },
    ];

    const backendSkills = [
        { name: 'Java', level: 70 },
        { name: 'MySQL', level: 75 },
        { name: 'Node.js', level: 60 },
    ];

    const tools = [
        'Git', 'GitHub', 'VS Code', 'Postman', 'Netlify', 'NPM', 'Vite', 'Chrome DevTools', 'Command Line', 'Eclipse'
    ];

    return (
        <section id="skills" className="container">
            <SectionHeading title="My Skills" subtitle="Expertise" />

            <motion.div
                className={styles.skillsContainer}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.div className={styles.skillsSection} variants={sectionVariants}>
                    <h3>Frontend Development</h3>
                    <p>Creating beautiful, responsive, and accessible user interfaces.</p>
                    <div className={styles.skillList}>
                        {frontendSkills.map(skill => (
                            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                        ))}
                    </div>
                </motion.div>

                <motion.div className={styles.skillsSection} variants={sectionVariants}>
                    <h3>Backend & Tools</h3>
                    <p>Building functional systems and using industry-standard tools.</p>
                    <div className={styles.skillList}>
                        {backendSkills.map(skill => (
                            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                        ))}
                    </div>

                    <div className={styles.toolsSection}>
                        <h4>Other Tools & Technologies</h4>
                        <div className={styles.toolsGrid}>
                            {tools.map((tool, idx) => (
                                <motion.div
                                    key={tool}
                                    className={styles.toolTag}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor: 'var(--accent-primary)',
                                        color: 'white',
                                        boxShadow: '0 0 15px var(--accent-primary)'
                                    }}
                                >
                                    {tool}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Skills;
