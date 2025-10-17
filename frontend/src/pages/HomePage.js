import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";
import { 
  Palette, Share2, Printer, TrendingUp, Instagram, Target,
  Menu, X, Star, ArrowRight
} from "lucide-react";
import { services, portfolioItems, clientLogos, testimonials } from "../mock";

const iconMap = {
  Palette, Share2, Printer, TrendingUp, Instagram, Target
};

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["Tous", ...new Set(portfolioItems.map(item => item.category))];
  
  const filteredPortfolio = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <div className="min-h-screen bg-dark text-light-text">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-neon-glow/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center hover-glow transition-all duration-300">
              <img 
                src="https://customer-assets.emergentagent.com/job_design-hub-64/artifacts/39csihrp_MCMAILYS%20sigle-15.png" 
                alt="Logo" 
                className="h-12 w-12 object-contain"
              />
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="nav-link">Services</a>
              <a href="#portfolio" className="nav-link">Portfolio</a>
              <a href="#clients" className="nav-link">Clients</a>
              <a href="#testimonials" className="nav-link">Témoignages</a>
              <Link to="/about" className="btn-neon">
                Me Contacter
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-neon-glow"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 flex flex-col gap-4"
            >
              <a href="#services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#portfolio" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
              <a href="#clients" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Clients</a>
              <a href="#testimonials" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Témoignages</a>
              <Link to="/about" className="btn-neon inline-block text-center" onClick={() => setMobileMenuOpen(false)}>
                Me Contacter
              </Link>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="hero-video-section">
        {/* Video Background */}
        <div className="hero-video-wrapper">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="hero-video"
          >
            <source src="https://cdn.coverr.co/videos/coverr-abstract-golden-particles-5358/1080p.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark Overlay for better text visibility */}
          <div className="hero-video-overlay"></div>
        </div>

        {/* Content Overlay */}
        <div className="hero-content-overlay">
          <div className="container mx-auto text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text">
                Design Créatif
                <br />
                <span className="text-gradient">Qui Se Démarque</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Master en Communication • Designer Graphique • Stratège de Marque
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#portfolio" className="btn-neon">
                  Voir Mon Travail
                </a>
                <Link to="/about" className="btn-outline">
                  Me Contacter
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-darker">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">Ce Que Je Fais</h2>
            <p className="text-gray-400 text-lg">Services créatifs complets pour votre marque</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="service-card"
                >
                  <div className="icon-wrapper">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">Mon Travail</h2>
            <p className="text-gray-400 text-lg mb-8">Projets sélectionnés démontrant mon expertise</p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <Masonry
            breakpointCols={breakpointColumns}
            className="masonry-grid"
            columnClassName="masonry-column"
          >
            {filteredPortfolio.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="portfolio-item"
              >
                <div className="portfolio-image-wrapper">
                  <img src={item.image} alt={item.title} className="portfolio-image" />
                  <div className="portfolio-overlay">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300 mb-3">{item.description}</p>
                    <span className="category-tag">{item.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 px-6 bg-darker">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">They Trust Us</h2>
            <p className="text-gray-400 text-lg">Proud to work with amazing brands</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="client-logo"
              >
                <img src={client.logo} alt={client.name} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">Client Love</h2>
            <p className="text-gray-400 text-lg">What clients say about working together</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="testimonial-card"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#f0eea5" stroke="#f0eea5" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold neon-text">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-cta">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate and create something extraordinary together
            </p>
            <Link to="/about" className="btn-neon-large inline-flex items-center gap-2">
              Get Started <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-darker border-t border-neon-glow/10">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-6">
            <img 
              src="https://customer-assets.emergentagent.com/job_design-hub-64/artifacts/39csihrp_MCMAILYS%20sigle-15.png" 
              alt="Logo" 
              className="h-16 w-16 object-contain opacity-80"
            />
            <p className="text-gray-400 text-center">&copy; 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;