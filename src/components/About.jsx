import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Server, Smartphone, Terminal } from 'lucide-react';

const skills = [
    { name: 'Backend Development', icon: <Server size={24} />, description: 'Java 8, Spring Boot, Spring Cloud, GraphQL, Kafka, Oracle SQL, Cosmos DB.' },
    { name: 'Frontend Development', icon: <Layout size={24} />, description: 'React, Angular 6+, TypeScript, JavaScript, jQuery, and modern CSS.' },
    { name: 'Cloud & DevOps', icon: <Terminal size={24} />, description: 'Azure Cloud, AWS, Docker, Jenkins, GitHub Actions, Terraform.' },
    { name: 'Testing & Quality', icon: <Code size={24} />, description: 'JUnit, Cucumber, Pacts, JMeter load testing, and comprehensive test automation.' },
    { name: 'Monitoring', icon: <Database size={24} />, description: 'Splunk, NewRelic, Grafana for application monitoring and observability.' },
    { name: 'Architecture', icon: <Smartphone size={24} />, description: 'Microservices, Event-Driven Systems, RESTful APIs, and batch processing.' },
];

const About = () => {
    return (
        <section id="about" className="py-20 px-6 relative bg-surface/50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">About <span className="text-gradient">Me</span></h2>
                        <div className="space-y-4 text-gray-400 text-lg">
                            <p>
                                I'm an Application Developer with strong technical aptitude in Java, Spring Boot, and microservices architecture, with hands-on experience building RESTful APIs and event-driven systems.
                            </p>
                            <p>
                                With 7+ years in the industry, I've led teams, architected scalable solutions, and delivered high-impact features at ThoughtWorks and Wipro Technologies.
                            </p>
                            <p>
                                I'm passionate about performance optimization, automated testing, and building systems that handle millions of records efficiently.
                            </p>
                        </div>

                        <div className="mt-8 flex gap-4">
                            <div className="text-center">
                                <h3 className="text-3xl font-bold text-white">7+</h3>
                                <p className="text-sm text-gray-500">Years Exp.</p>
                            </div>
                            <div className="w-px bg-white/10" />
                            <div className="text-center">
                                <h3 className="text-3xl font-bold text-white">10M+</h3>
                                <p className="text-sm text-gray-500">Records Processed</p>
                            </div>
                            <div className="w-px bg-white/10" />
                            <div className="text-center">
                                <h3 className="text-3xl font-bold text-white">2</h3>
                                <p className="text-sm text-gray-500">Companies</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="p-6 glass-card hover:bg-white/10 transition-colors"
                            >
                                <div className="text-primary mb-4">{skill.icon}</div>
                                <h3 className="font-bold mb-2">{skill.name}</h3>
                                <p className="text-sm text-gray-400">{skill.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
