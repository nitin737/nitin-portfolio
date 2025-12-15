import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-featured online store with cart functionality, user authentication, and payment processing.',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        links: { demo: '#', github: '#' },
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80'
    },
    {
        title: 'Task Management App',
        description: 'A productivity tool for teams to organize tasks, track progress, and collaborate in real-time.',
        tags: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind'],
        links: { demo: '#', github: '#' },
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80'
    },
    {
        title: 'AI Content Generator',
        description: 'An application that uses OpenAI API to generate blog posts, social media captions, and more.',
        tags: ['React', 'Python', 'FastAPI', 'OpenAI'],
        links: { demo: '#', github: '#' },
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80'
    },
    {
        title: 'Portfolio Website',
        description: 'A modern, responsive portfolio website showcasing my projects and skills (this site!).',
        tags: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
        links: { demo: '#', github: '#' },
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Here are some of the projects I've worked on. Each one presented unique challenges and learning opportunities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2500}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card overflow-hidden group h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={project.links.github} className="p-3 bg-white/10 rounded-full hover:bg-white/20 backdrop-blur-sm transition-colors">
                      <Github size={24} />
                    </a>
                    <a href={project.links.demo} className="p-3 bg-white/10 rounded-full hover:bg-white/20 backdrop-blur-sm transition-colors">
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Tilt>                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
