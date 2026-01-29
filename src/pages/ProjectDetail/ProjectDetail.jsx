import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle, Globe } from 'lucide-react';
import styles from './ProjectDetail.module.css';

// Import project images for consistency
import gmaHero from '../../assets/gma-hero.png';
import swaraaleeHero from '../../assets/swaraalee-hero.png';
import edumetricxHero from '../../assets/edumetricx-hero.png';

// Full project details mapping
const projectDetails = {
    'gma-clinics': {
        title: 'GMA Clinics',
        overview: 'GMA Clinics (Generations Medical Aesthetics) is a premium healthcare platform dedicated to aesthetic medicine. The website serves as a digital gateway for patients to explore advanced treatments like laser hair removal, anti-aging solutions, and hair restoration. It features a sophisticated UI that mirrors the luxury experience provided at the clinics.',
        features: [
            'Interactive Service Portfolio with detailed treatment information',
            'Cross-device responsive design for seamless mobile browsing',
            'Integrated WhatsApp API for instant patient consultations',
            'SEO optimized structure for high search engine visibility',
            'Fast-loading gallery and treatment preview sections'
        ],
        technologies: ['React JS', 'CSS Modules', 'Framer Motion', 'Lucide Icons', 'Vite'],
        color: '#0ea5e9',
        image: gmaHero,
        liveUrl: 'https://gmaclinics.com/',
        githubUrl: '#'
    },
    'swaraalee-music': {
        title: 'Swaraalee Music Academy',
        overview: 'Swaraalee Music Academy is a premier institution in Hyderabad dedicated to various forms of music education. The platform provides a comprehensive overview of their vocal and instrumental courses, allowing aspiring musicians to explore curriculum details, faculty expertise, and student achievements.',
        features: [
            'Dynamic Course Catalog for Vocal and Instrumental classes',
            'Mobile-optimized user interface for students on the go',
            'Seamless Lead Capture and Contact forms',
            'Brochure download and curriculum inquiry system',
            'Integrated high-performance animations for a premium artistic feel'
        ],
        technologies: ['React JS', 'Context API', 'Framer Motion', 'WhatsApp Integration', 'Responsive Design', 'Vite'],
        color: '#8b5cf6',
        image: swaraaleeHero,
        liveUrl: 'https://swaraaleemusic.com/',
        githubUrl: '#'
    },
    'edumetricx-software': {
        title: 'Edumetricx Software',
        overview: 'Edumetricx is a specialized automation software designed for Educational Institutions. It streamlines complex administrative tasks such as enquiry management, payment tracking, and automated reminders, allowing institutions to focus more on education and less on paperwork.',
        features: [
            'Automated Enquiry Follow-up system to increase admissions',
            'Smart Payment Reminders and fee management modules',
            'Real-time Data Visualization and administrative dashboards',
            'Institution-wide Automation for various administrative roles',
            'Highly responsive web and mobile-friendly application'
        ],
        technologies: ['React JS', 'Chart.js', 'MySQL', 'Node.js', 'REST APIs', 'Custom CSS'],
        color: '#2dd4bf',
        image: edumetricxHero,
        liveUrl: 'https://www.edumetricx.com/',
        githubUrl: '#'
    }
};

const ProjectDetail = () => {
    const { id } = useParams();
    // Normalize ID to handle potential casing or space issues if any
    const normalizedId = id ? id.trim().toLowerCase().replace(/\s+/g, '-') : '';
    const project = projectDetails[normalizedId];

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className={styles.notFound}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="container"
                >
                    <h2>Project Not Found</h2>
                    <p>We couldn't find the project you're looking for.</p>
                    <Link to="/" className={styles.backHomeBtn}>Back to Home</Link>
                </motion.div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.pageWrapper}
        >
            <div className={`container ${styles.detailContainer}`}>
                <Link to="/" className={styles.backBtn}>
                    <ArrowLeft size={18} /> Back to Home
                </Link>

                <div className={styles.grid}>
                    <div className={styles.visualSection}>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className={styles.imageWrapper}
                        >
                            {project.image ? (
                                <img src={project.image} alt={project.title} className={styles.mainImage} />
                            ) : (
                                <div className={styles.placeholder} style={{ background: project.color }}>
                                    {project.title}
                                </div>
                            )}
                        </motion.div>
                    </div>

                    <div className={styles.contentSection}>
                        <motion.div
                            initial={{ x: 30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className={styles.cateogry}>Automation & Software</span>
                            <h1 className={styles.title}>{project.title}</h1>

                            <div className={styles.overview}>
                                <h3>Overview</h3>
                                <p>{project.overview}</p>
                            </div>

                            <div className={styles.features}>
                                <h3>Key Features</h3>
                                {project.features.map((feature, index) => (
                                    <div key={index} className={styles.featureItem}>
                                        <CheckCircle size={16} className={styles.icon} />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.techSection}>
                                <h3>Technologies</h3>
                                <div className={styles.techGrid}>
                                    {project.technologies.map(tech => (
                                        <span key={tech} className={styles.techBadge}>{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.actions}>
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.liveBtn}>
                                    <Globe size={18} /> Visit Website
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetail;
