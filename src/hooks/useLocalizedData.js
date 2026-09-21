import { useLanguage } from '../context/LanguageContext';
import { projects as projectsFr } from '../data/projects';
import { projects as projectsEn } from '../data/projects.en';
import * as aboutFr from '../data/about';
import * as aboutEn from '../data/about.en';

export function useLocalizedProjects() {
  const { lang } = useLanguage();
  return lang === 'en' ? projectsEn : projectsFr;
}

export function useLocalizedAbout() {
  const { lang } = useLanguage();
  const data = lang === 'en' ? aboutEn : aboutFr;
  return {
    aboutInfo: data.aboutInfo,
    timeline: data.timeline,
    certifications: data.certifications,
    languages: data.languages,
    interests: data.interests
  };
}
