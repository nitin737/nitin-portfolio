import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const experiences = [
    {
        company: 'ThoughtWorks Technologies',
        logo: '/tw',
        location: 'Gurgaon, India',
        duration: '4+ years',
        roles: [
            {
                title: 'Application Developer - Senior Consultant',
                period: 'Jul 2023 - Present',
                achievements: [
                    'Led a team of 3 junior members as Squad Lead',
                    'Completed a 6-week tech transition, mastering multiple new technologies',
                    'Developed a React component to fetch data from GraphQL API',
                    'Improved team efficiency by resolving code issues',
                    'Addressed project challenges for increased velocity',
                ],
            },
            {
                title: 'Application Developer - Senior Consultant',
                period: 'Mar 2023 - Jul 2023',
                achievements: [
                    'Orchestrated shift from monolith to microservices',
                    'Engineered a dynamic pricing service for personalized discounts',
                    'Led BFF layer development and junior team mentoring',
                ],
            },
            {
                title: 'Application Developer - Senior Consultant',
                period: 'Oct 2022 - Jan 2023',
                achievements: [
                    'Built a batch processing application handling 10+ million records',
                ],
            },
            {
                title: 'Application Developer - Consultant',
                period: 'Jul 2021 - Sept 2022',
                achievements: [
                    'Developed customer-centric microservice for CCPA data deletion',
                    'Implemented functional and contract testing suites',
                    'Contributed to customer account service and authentication flows',
                    'Crafted JMeter load tests using New Relic for monitoring',
                ],
            },
        ],
    },
    {
        company: 'Wipro Technologies',
        logo: '/wipro',
        location: 'Bengaluru, India',
        duration: '4 yrs 8 months',
        roles: [
            {
                title: 'Senior Software Engineer',
                period: 'Dec 2020 - Jul 2021',
                achievements: [
                    'Improved master table lookup performance by 20%',
                    'Automated control data loading from Oracle directories',
                ],
            },
            {
                title: 'Software Engineer',
                period: 'Oct 2016 - Nov 2020',
                achievements: [
                    'Remediated CSRF vulnerabilities in web application',
                    'Enhanced data models for upstream system integration',
                    'Implemented SAP HANA connection support alongside Oracle',
                    'Provided critical UAT support and ad-hoc fixes',
                    'Expanded web app accessibility features',
                ],
            },
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -z-10" />

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        My <span className="text-gradient">Journey</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Building scalable solutions and evolving through challenging roles in the tech landscape.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-transparent opacity-30 rounded-full hidden md:block" />

                    <div className="space-y-16">
                        {experiences.map((exp, expIndex) => (
                            <div key={expIndex} className="relative">
                                {/* Timeline Dot */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 -top-4 w-12 h-12 bg-surface border-4 border-primary rounded-full items-center justify-center z-10 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                                >
                                    <Briefcase size={20} className="text-primary" />
                                </motion.div>

                                <div className={`flex flex-col ${expIndex % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-0`}>
                                    
                                    {/* Content Card */}
                                    <div className={`w-full md:w-1/2 ${expIndex % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                                        <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.02} transitionSpeed={2500}>
                                            <motion.div
                                                initial={{ opacity: 0, x: expIndex % 2 === 0 ? -50 : 50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6 }}
                                                className="glass-card p-8 group hover:border-primary/50 transition-colors duration-500 text-left"
                                            >
                                                <div className="flex flex-col gap-1 mb-6 border-b border-white/5 pb-6">
                                                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors">
                                                        {exp.company}
                                                    </h3>
                                                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-medium">
                                                        <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full">
                                                            <MapPin size={14} className="text-secondary" />
                                                            {exp.location}
                                                        </span>
                                                        <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full">
                                                            <Calendar size={14} className="text-secondary" />
                                                            {exp.duration}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="space-y-8">
                                                    {exp.roles.map((role, roleIndex) => (
                                                        <div key={roleIndex} className="relative pl-6">
                                                            {/* Role Line */}
                                                            <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-white/10" />
                                                            <div className="absolute left-[-2px] top-2 w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_10px_var(--color-secondary)]" />

                                                            <div className="mb-4">
                                                                <h4 className="text-xl font-semibold text-white/90">{role.title}</h4>
                                                                <p className="text-sm text-primary/80 font-mono mt-1">{role.period}</p>
                                                            </div>
                                                            
                                                            <ul className="space-y-3">
                                                                {role.achievements.map((achievement, achIndex) => (
                                                                    <li key={achIndex} className="text-gray-400 text-sm leading-relaxed flex items-start gap-3">
                                                                        <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                                                                        <span>{achievement}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        </Tilt>
                                    </div>

                                    {/* Empty Space for alignment */}
                                    <div className="w-full md:w-1/2" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

