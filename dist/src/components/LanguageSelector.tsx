
import { useLanguage } from '../contexts/LanguageContext';

const languages = [
  { code: 'en', name: 'EN', fullName: 'English' },
  { code: 'fr', name: 'FR', fullName: 'Français' },
  { code: 'de', name: 'DE', fullName: 'Deutsch' },
  { code: 'es', name: 'ES', fullName: 'Español' },
  { code: 'ro', name: 'RO', fullName: 'Romanian' }
];

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as any)}
      className="bg-gray-800 border border-amber-500/20 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-100 hover:border-amber-500/40 transition-colors cursor-pointer appearance-none pr-8 relative"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23fbbf24' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
        backgroundPosition: 'right 0.5rem center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1.5em 1.5em'
      }}
      title={languages.find(l => l.code === language)?.fullName}
    >
      {languages.map((lang) => (
        <option
          key={lang.code}
          value={lang.code}
          className="bg-gray-800 text-amber-100"
        >
          {lang.name}
        </option>
      ))}
    </select>
  );
}