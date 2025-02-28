
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { FlaskRound as Flask, Atom } from 'lucide-react';

export function Navbar() {
  const { t } = useLanguage();

  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-2">
              <div className="flex-shrink-0 relative group">
                <Flask
                  size={32}
                  className="text-amber-500 absolute transform group-hover:scale-75 transition-all duration-300 ease-in-out"
                />
                <Atom
                  size={32}
                  className="text-amber-500 opacity-0 group-hover:opacity-100 transform group-hover:rotate-90 transition-all duration-300 ease-in-out"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 text-transparent bg-clip-text tracking-wide">
                MP Digital Lab
              </span>
            </a>
          </div>

          <div className="flex items-center space-x-8">
            <a href="#home" className="text-amber-100/80 hover:text-amber-300 transition-colors duration-200">{t('nav.home')}</a>
            <a href="#about" className="text-amber-100/80 hover:text-amber-300 transition-colors duration-200">{t('nav.about')}</a>
            <a href="#skills" className="text-amber-100/80 hover:text-amber-300 transition-colors duration-200">{t('nav.skills')}</a>
            <a href="#projects" className="text-amber-100/80 hover:text-amber-300 transition-colors duration-200">{t('nav.projects')}</a>
            <a href="#contact" className="text-amber-100/80 hover:text-amber-300 transition-colors duration-200">{t('nav.contact')}</a>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
}