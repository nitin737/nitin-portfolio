import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
    {
        degree: 'Master of Technology (M.Tech)',
        field: 'Computer Science (Work Integrated Learning Program)',
        institution: 'Birla Institute of Technology & Science, Pilani',
        period: '2017 - 2020',
        logo: '🎓',
    },
    {
        degree: 'Bachelor of Computer Applications (BCA)',
        field: 'Computer Applications',
        institution: 'GLA University, Mathura',
        period: '2013 - 2016',
        logo: '🎓',
    },
];

const Education = () => {
    return (
        <section id="education" className="py-20 px-6 relative bg-surface/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-gradient">Education</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My academic background and qualifications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="glass-card p-6 hover:bg-white/10 transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg text-3xl">
                                    {edu.logo}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-white text-lg mb-1">{edu.degree}</h3>
                                    <p className="text-primary text-sm mb-2">{edu.field}</p>
                                    <p className="text-gray-400 text-sm mb-2">{edu.institution}</p>
                                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                                        <Calendar size={14} />
                                        {edu.period}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
