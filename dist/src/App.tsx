import React, { useState } from 'react';

import { LanguageProvider } from './contexts/LanguageContext';
import { Navbar } from './components/Navbar';
import { useLanguage } from './contexts/LanguageContext';
import { Code, Calendar, Globe, MessageSquare, ArrowRight, Send } from 'lucide-react';
import portret7 from './portret7.png';
import ohmyfood from './ohmyfood.png';
import argentb from './argentb.png';
import ninac from './ninac.png';

function Hero() {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 relative overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFA500' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-4">{t('hero.title')}</h1>
            <p className="text-xl text-gray-300 mb-8">{t('hero.subtitle')}</p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>{t('hero.cta')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToProjects}
                className="group border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>{t('hero.portfolio')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072"
              alt="Digital Workspace"
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFA500' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">{t('about.title')}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-6 rounded-lg overflow-hidden">
              <img src={portret7} alt="Profile"
                className="w-full h-[400px] object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div>
            <p className="text-gray-300 mb-6">{t('about.description')}</p>
            <p className="text-gray-300 mb-8">{t('about.experience')}</p>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">{t('about.highlights.title')}</h3>
              <ul className="space-y-4">
                {t('about.highlights.items').map((item: string, index: number) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  const { t } = useLanguage();

  const ExpertiseCard = ({ icon: Icon, title, skills }: { icon: any, title: string, skills: string[] }) => (
    <div className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
      <div className="text-orange-500 mb-4">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-300">{skill}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFA500' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12">{t('expertise.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ExpertiseCard
            icon={Code}
            title={t('expertise.frontend.title')}
            skills={t('expertise.frontend.skills')}
          />
          <ExpertiseCard
            icon={Globe}
            title={t('expertise.web.title')}
            skills={t('expertise.web.skills')}
          />
          <ExpertiseCard
            icon={Calendar}
            title={t('expertise.ai.title')}
            skills={t('expertise.ai.skills')}
          />
          <ExpertiseCard
            icon={MessageSquare}
            title={t('expertise.communication.title')}
            skills={t('expertise.communication.skills')}
          />
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const { t } = useLanguage();

  const projectImages = [
    ohmyfood,
    ninac,
    argentb
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFA500' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12">{t('projects.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t('projects.items').map((project: any, index: number) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src={projectImages[index]}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string, tagIndex: number) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Reset form
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFA500' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">{t('contact.title')}</h2>
        <form onSubmit={handleSubmit} action="https://formspree.io/f/xvgzrkng" method="POST" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                style={{ cursor: 'text' }}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                style={{ cursor: 'text' }}
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
              {t('contact.form.subject')}
            </label>
            <input
              type="text"
              id="subject"
              value={formState.subject}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
              style={{ cursor: 'text' }}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              {t('contact.form.message')}
            </label>
            <textarea
              id="message"
              rows={6}
              value={formState.message}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
              placeholder={t('contact.form.placeholder')}
              style={{ cursor: 'text' }}
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <span>{isSubmitting ? 'Sending...' : t('contact.form.submit')}</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>
        <a href="https://wa.me/33631894820" className="block text-center text-orange-500 underline mt-8">
          Contactez-moi sur WhatsApp ou par sms 0631894820
        </a>
      </div>
    </section>
  );
}

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;