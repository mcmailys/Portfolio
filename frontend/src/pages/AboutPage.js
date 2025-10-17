import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, ArrowLeft, CheckCircle2, Send } from "lucide-react";
import { aboutContent } from "../mock";
import { useToast } from "../hooks/use-toast";
import { Toaster } from "../components/ui/toaster";

const AboutPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
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
            <Link to="/" className="nav-link flex items-center gap-2">
              <ArrowLeft size={20} /> Retour à l'Accueil
            </Link>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            {/* About Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 neon-text">
                {aboutContent.title}
              </h1>
              <p className="text-2xl text-neon-glow mb-6">{aboutContent.subtitle}</p>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                {aboutContent.description}
              </p>

              {/* Skills */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 neon-text">Expertise</h3>
                <div className="grid grid-cols-2 gap-3">
                  {aboutContent.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <CheckCircle2 size={18} className="text-neon-glow flex-shrink-0" />
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={20} className="text-neon-glow" />
                <span>contact@creativestudio.com</span>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="contact-form-wrapper"
            >
              <h2 className="text-3xl font-bold mb-6 neon-text">Restons Connectés</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                    Votre Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                    Adresse Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="jean@exemple.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="form-input resize-none"
                    placeholder="Parlez-moi de votre projet..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-neon-large w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Envoyer le Message <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
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

      <Toaster />
    </div>
  );
};

export default AboutPage;