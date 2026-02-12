import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star, Github, Linkedin, Twitter } from 'lucide-react';

const Home = () => {
    const scrollToFeatures = () => {
        document.getElementById('features-section')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section - PERFECT SIZES */}
            <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center py-12 lg:py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-black/30 to-yankees-600/95" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,white,transparent)] opacity-20" />

                <div className="relative z-10 text-center lg:text-left max-w-6xl mx-auto w-full px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-8 lg:mb-12"
                    >
                        <span className="block bg-gradient-to-r from-white/90 to-white/50 bg-clip-text text-transparent drop-shadow-2xl">
                            INNOVATE.
                        </span>
                        <span className="block gradient-text drop-shadow-2xl text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                            BUILD.
                        </span>
                        <span className="block bg-gradient-to-r from-secondary/90 via-yellow-400/80 to-orange-400/70 bg-clip-text text-transparent drop-shadow-2xl text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                            SCALE.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg sm:text-xl lg:text-2xl font-light max-w-4xl mx-auto lg:mx-0 mb-12 lg:mb-16 leading-relaxed opacity-95 px-4 lg:px-0"
                    >
                        Enterprise software solutions engineered for the modern world.
                        50+ global clients trust TechNova for digital transformation.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start items-center mb-16 lg:mb-24 px-4"
                    >
                        <Link to="/contact" className="btn-primary text-base sm:text-lg lg:text-xl shadow-2xl w-full sm:w-auto px-8 py-4 sm:py-5">
                            Start Your Project <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 inline group-hover:translate-x-2" />
                        </Link>
                        <button
                            onClick={scrollToFeatures}
                            className="btn-secondary text-base sm:text-lg lg:text-xl px-8 sm:px-12 py-4 sm:py-5 w-full sm:w-auto flex items-center justify-center group"
                        >
                            Live Demo <Play className="ml-2 w-5 h-5 sm:w-6 sm:h-6 inline group-hover:translate-x-2 transition-transform" />
                        </button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6 sm:gap-8 text-sm sm:text-base uppercase tracking-widest font-semibold opacity-80 px-4 text-center lg:text-left mb-8 lg:mb-12"
                    >
                        <div className="flex items-center gap-2">
                            <div className="flex text-yellow-400">
                                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                            </div>
                            <span>5.0 Rating</span>
                        </div>
                        <div className="hidden sm:block w-px h-6 bg-white/30" />
                        <div>50+ Clients</div>
                        <div className="hidden sm:block w-px h-6 bg-white/30" />
                        <div>10+ Years</div>
                    </motion.div>

                    {/* SOCIAL LINKS - BOTTOM OF HERO */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="flex justify-center lg:justify-start items-center gap-4 pt-8 lg:pt-12 border-t border-white/10 pt-6 lg:pt-8 px-4"
                    >
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 text-sm sm:text-base opacity-80 hover:opacity-100 hover:text-white transition-all duration-300 hover:-translate-y-1"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 group-hover:-translate-y-0.5 transition-all duration-300" />
                            <span className="hidden md:inline font-medium">GitHub</span>
                        </a>

                        <span className="hidden lg:block w-px h-5 bg-white/20" />

                        <a
                            href="https://linkedin.com/in/xxx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 text-sm sm:text-base opacity-80 hover:opacity-100 hover:text-white transition-all duration-300 hover:-translate-y-1"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 group-hover:-translate-y-0.5 transition-all duration-300" />
                            <span className="hidden md:inline font-medium">LinkedIn</span>
                        </a>

                        <span className="hidden lg:block w-px h-5 bg-white/20" />

                        <a
                            href="https://twitter.com/xxx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 text-sm sm:text-base opacity-80 hover:opacity-100 hover:text-white transition-all duration-300 hover:-translate-y-1"
                            aria-label="Twitter"
                        >
                            <Twitter className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 group-hover:-translate-y-0.5 transition-all duration-300" />
                            <span className="hidden md:inline font-medium">Twitter</span>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Features - BALANCED SIZES */}
            <section id="features-section" className="py-20 sm:py-24 md:py-32 relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                        {[
                            { icon: '🚀', title: 'Lightning Fast', desc: 'Concept to deployment in weeks, not months.' },
                            { icon: '🛡️', title: 'Enterprise Secure', desc: 'Military-grade security for mission-critical systems.' },
                            { icon: '⚡', title: 'Infinitely Scalable', desc: 'AWS optimized architecture handles millions of users.' }
                        ].map((feature, idx) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                className="glass-card p-6 sm:p-8 lg:p-12 text-center group hover:shadow-2xl hover:shadow-primary/25 hover:-translate-y-4 transition-all duration-700 w-full"
                            >
                                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-primary to-yankees-600 text-2xl sm:text-3xl lg:text-4xl rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 lg:mb-12 group-hover:scale-110 transition-all duration-500">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 group-hover:gradient-text transition-all duration-500">
                                    {feature.title}
                                </h3>
                                <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed px-2">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA - BALANCED SIZES */}
            <section className="py-20 sm:py-24 md:py-32">
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="glass-card max-w-4xl mx-auto text-center p-8 sm:p-12 md:p-16 lg:p-20 rounded-3xl shadow-2xl mx-4"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black gradient-text mb-6 sm:mb-8">
                        Ready to Transform?
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
                        Let's discuss your project and create something extraordinary together.
                    </p>
                    <Link to="/contact" className="btn-primary text-lg sm:text-xl px-8 sm:px-16 py-6 md:py-7 shadow-2xl inline-flex items-center gap-3 w-full sm:w-auto mx-4 sm:mx-0">
                        Get Free Consultation <Play className="w-5 h-5 sm:w-6 sm:h-6" />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
