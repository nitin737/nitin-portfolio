import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
    {
        company: 'ThoughtWorks Technologies Private Ltd.',
        logo: '/tw',
        location: 'Gurgaon, India',
        duration: '2.5 years',
        roles: [
            {
                title: 'Application Developer - Senior Consultant',
                period: 'Jul 2023 - Present',
                achievements: [
                    'Led a team of 3 junior members as Squad Lead',
                    'Completed a 6-week tech transition, mastering multiple new technologies and 8 core code repositories',
                    'Developed a React component to fetch data from GraphQL API',
                    'Improved team efficiency by resolving code issues and enhancing system understanding',
                    'Addressed project challenges, proposing solutions for increased velocity and overcoming obstacles',
                ],
            },
            {
                title: 'Application Developer - Senior Consultant',
                period: 'Mar 2023 - Jul 2023',
                achievements: [
                    'Orchestrated the shift from monolith to microservices, boosting system adaptability',
                    'Engineered a dynamic pricing service, refining customer experiences with personalized discounts',
                    'Led BFF layer development, guiding junior team members for seamless onboarding',
                ],
            },
            {
                title: 'Application Developer - Senior Consultant',
                period: 'Oct 2022 - Jan 2023',
                achievements: [
                    'Built a batch processing application which handles 10+ million records in production',
                ],
            },
            {
                title: 'Application Developer - Consultant',
                period: 'Jul 2021 - Sept 2022',
                achievements: [
                    'Developed a customer-centric microservice, enabling data deletion across multiple services per CCPA requests',
                    'Implemented comprehensive testing, including contract tests with pacts, functional tests with Cucumber, and JUnit tests',
                    'Contributed to the customer account service, overseeing account data, sign-in, signup, and loyalty profile creation',
                    'Played a key role in integrated load testing, ensuring the service\'s capability to handle expected peak-hour loads',
                    'Crafted a JMeter load test script, evaluating the new REST endpoint under realistic load, and monitored its behavior using New Relic and Splunk',
                ],
            },
        ],
    },
    {
        company: 'Wipro Technologies Ltd.',
        logo: '/wipro',
        location: 'Bengaluru, India',
        duration: '4 yrs 8 months',
        roles: [
            {
                title: 'Senior Software Engineer',
                period: 'Dec 2020 - Jul 2021',
                achievements: [
                    'Improved performance of lookup operation on master table by almost 20%',
                    'Worked on automation script which loads the control data from .tar file present in Oracle asfs directory and processing that data further through batch application',
                ],
            },
            {
                title: 'Software Engineer',
                period: 'Oct 2016 - Nov 2020',
                achievements: [
                    'Fixed CSRF vulnerability issue in web application',
                    'Data Model Changes to Populate new fields from upstream systems',
                    'Worked with SAP team and implemented the code for supporting SAP HANA connection along with Oracle',
                    'Supported code testing in UAT env, for finding out the issues and adhoc providing code fixes',
                    'Added multiple functionality in web app to make it easily accessible',
                ],
            },
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My professional journey building scalable applications and leading teams.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, expIndex) => (
                        <motion.div
                            key={expIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: expIndex * 0.1 }}
                            className="glass-card p-8"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                                    <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-400 text-sm">
                                        <span className="flex items-center gap-1">
                                            <MapPin size={14} />
                                            {exp.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            {exp.duration}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                {exp.roles.map((role, roleIndex) => (
                                    <div key={roleIndex} className="relative pl-6 border-l-2 border-primary/30">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                                        <div className="mb-3">
                                            <h4 className="text-lg font-semibold text-white">{role.title}</h4>
                                            <p className="text-sm text-accent">{role.period}</p>
                                        </div>
                                        <ul className="space-y-2">
                                            {role.achievements.map((achievement, achIndex) => (
                                                <li key={achIndex} className="text-gray-400 text-sm flex items-start gap-2">
                                                    <span className="text-primary mt-1">•</span>
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
