import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import styles from './Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://formsubmit.co/ajax/jayamanasa.akula02@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Thank you, ' + formData.name + '! Your message has been sent directly to my email.');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                alert('Oops! Something went wrong. Please try again or email me directly.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please check your connection.');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container"
        >
            <section>
                <SectionHeading title="Contact Me" subtitle="Get In Touch" />

                <div className={styles.contactContainer}>
                    <div className={styles.infoSide}>
                        <h3>Let&apos;s talk about your project</h3>
                        <p>I&apos;m currently available for freelance work or full-time opportunities. If you have a question or just want to say hi, feel free to reach out!</p>

                        <div className={styles.contactMethods}>
                            <div className={styles.method}>
                                <div className={styles.iconBox}><Mail size={24} strokeWidth={1} /></div>
                                <div>
                                    <h4>Email</h4>
                                    <p>jayamanasa.akula02@gmail.com</p>
                                </div>
                            </div>
                            <div className={styles.method}>
                                <div className={styles.iconBox}><MapPin size={24} strokeWidth={1} /></div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Hyderabad, Telangana, India</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.socials}>
                            <h4>Follow Me</h4>
                            <div className={styles.socialIcons}>
                                <a href="https://github.com/jayamanasaakula02" target="_blank" rel="noopener noreferrer"><Github size={24} strokeWidth={1} /></a>
                                <a href="https://www.linkedin.com/in/jaya-manasa-akula-5607b437b/" target="_blank" rel="noopener noreferrer"><Linkedin size={24} strokeWidth={1} /></a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formSide}>
                        <form onSubmit={handleSubmit} className={styles.contactForm}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="What is this about?"
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Write your message here..."
                                ></textarea>
                            </div>
                            <button type="submit" className={styles.submitBtn}>
                                Send Message <Send size={18} strokeWidth={1} />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Contact;
