import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '#home' },
        { name: 'About', path: '#about' },
        { name: 'Skills', path: '#skills' },
        { name: 'Projects', path: '#projects' },
        { name: 'Experience', path: '#experience' },
        { name: 'Contact', path: '#contact' },
    ];

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>
                <a href="#home" className={styles.logo}>
                    <span>Manasa</span>.Codes
                </a>

                {/* Desktop Nav */}
                <ul className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.path}
                                className={styles.navLink}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <button onClick={toggleTheme} className={styles.themeToggle}>
                        {theme === 'light' ? <Moon size={20} strokeWidth={1} /> : <Sun size={20} strokeWidth={1} />}
                    </button>
                </ul>

                {/* Mobile Nav Toggle */}
                <div className={styles.mobileActions}>
                    <button onClick={toggleTheme} className={styles.mobileThemeToggle}>
                        {theme === 'light' ? <Moon size={20} strokeWidth={1} /> : <Sun size={20} strokeWidth={1} />}
                    </button>
                    <button className={styles.menuToggle} onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isOpen ? styles.menuOpen : ''}`}>
                <ul className={styles.mobileLinks}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.path}
                                className={styles.mobileLink}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
