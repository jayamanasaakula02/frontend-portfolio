import { Github, Linkedin, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.info}>
                    <h3 className={styles.logo}><span>Manasa</span>.Codes</h3>
                    <p>Building digital experiences with passion and precision.</p>
                </div>

                <div className={styles.links}>
                    <h4>Links</h4>
                    <ul>
                        <li><a href="/#home">Home</a></li>
                        <li><a href="/#about">About</a></li>
                        <li><a href="/#skills">Skills</a></li>
                        <li><a href="/#projects">Projects</a></li>
                        <li><a href="/#experience">Experience</a></li>
                        <li><a href="/#contact">Contact</a></li>
                    </ul>
                </div>

                <div className={styles.socials}>
                    <h4>Connect</h4>
                    <div className={styles.socialIcons}>
                        <a href="https://github.com/jayamanasaakula02" target="_blank" rel="noopener noreferrer"><Github size={20} strokeWidth={1} /></a>
                        <a href="https://www.linkedin.com/in/jaya-manasa-akula-5607b437b/" target="_blank" rel="noopener noreferrer"><Linkedin size={20} strokeWidth={1} /></a>
                        <a href="mailto:jayamanasa.akula02@gmail.com"><Mail size={20} strokeWidth={1} /></a>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} Manasa.Codes Portfolio. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
