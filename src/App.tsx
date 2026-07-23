import {useState} from 'react';
import {motion} from 'motion/react';
import {Github, Globe, Linkedin, Menu, Shield, X} from 'lucide-react';

type Experience = Readonly<{
  period: string;
  company: string;
  role: string;
  summary: string;
  highlights: readonly string[];
}>;

const getAssetUrl = (path: string): string => `${import.meta.env.BASE_URL}${path}`;

const experience: readonly Experience[] = [
  {
    period: '08/2023 - heute',
    company: 'REMONDIS IT Services GmbH',
    role: 'Senior PHP Developer / Software Architect - IT-Portal',
    summary: 'Architektur und technische Weiterentwicklung eines zentralen IAM- und Berechtigungsportals für Benutzerrechte, Active Directory, Microsoft 365, Standorte, Inventar und weitere Infrastrukturprozesse.',
    highlights: [
      'Modernisierung einer gewachsenen PHP-8.x-Codebase mit typisierten APIs, klaren Verantwortlichkeiten und unveränderlichen Datenobjekten.',
      'PHPStan auf maximalem Level, Codeception, projektspezifische Regeln sowie nachvollziehbare CI/CD-, Release- und Rollback-Prozesse.',
      'Integration von LDAP/AD, M365/Exchange, ScriptRunner/PowerShell und AS/400-Systemen.',
      'Sicherheit, Performance und überprüfbare Coding-Agent-Workflows mit Evidence-Gates.',
    ],
  },
  {
    period: '02/2023 - 08/2023',
    company: 'IONOS SE',
    role: 'PHP Developer',
    summary: 'Modernisierung einer rund 20 Jahre alten Codebase mit Fokus auf Wartbarkeit, statische Analyse und risikoarme Migration.',
    highlights: ['Verbessertes Autoloading, präzise PHPDocs, PHPStan und automatisierte CI-Prüfungen.', 'Stabilisierung der Datenbankanbindung.'],
  },
  {
    period: '06/2017 - 02/2023',
    company: 'MEERX.de / VDMG connect GmbH',
    role: 'PHP Developer - E-Commerce und CRM',
    summary: 'Modernisierung eines individuellen E-Commerce-Systems und einer gewachsenen Codebase mit rund 10.000 PHP-Klassen.',
    highlights: ['Elasticsearch-Suche für mehrere Millionen Artikeldatensätze.', 'Amazon-Anbindung an das interne CRM.', 'Einführung von PHPStan, Tests, präzisen PHPDocs und CI-Checks.'],
  },
  {
    period: '08/2011 - 05/2017',
    company: 'menadwork kommunikation GmbH',
    role: 'Full Stack Developer',
    summary: 'Entwicklung eines internen CMS sowie Umsetzung von Websites und E-Mail-Templates mit PHP, HTML, CSS und JavaScript.',
    highlights: ['Einführung von Git und automatisierten Tests mit Jenkins.'],
  },
  {
    period: '08/2007 - 08/2010',
    company: 'Global Village GmbH',
    role: 'Linux Systemadministrator',
    summary: 'Automatisierung, Betrieb und Fehleranalyse von Linux-Servern sowie technischer Support für Server, Websites, E-Mail und DSL.',
    highlights: ['Automatisierung mit Bash, PHP und Perl.', 'Betrieb des Serverraums inklusive Hardware, Verkabelung und Monitoring.'],
  },
];

const projects = [
  {
    title: 'PHP OPEN SOURCE',
    description: 'portable-utf8, portable-ascii, anti-xss und Arrayy: langfristig gepflegte Bibliotheken mit Fokus auf Unicode, Sicherheit, Typisierung, stabile APIs und Abwärtskompatibilität.',
    href: 'https://github.com/voku',
    image: 'images/projects/portable-utf8.svg',
    alt: 'Pergamentrolle mit Runen und Code-Motiven für die PHP-Open-Source-Projekte von Lars Moelleken.',
  },
  {
    title: 'AGENT ENGINEERING',
    description: 'Git-native Werkzeuge für Task-Steuerung, Sitzungszustand, selektiven Recall, Verifikation und kontrolliertes Lernen von Coding Agents.',
    href: 'https://github.com/voku/agent-loop',
    image: 'images/projects/anti-xss.svg',
    alt: 'Schutzschild mit Code-Klammern als Symbol für überprüfbare Coding-Agent-Workflows.',
  },
  {
    title: 'PHPSTAN TOOLING',
    description: 'Projekte und Regeln für präzisere statische Analyse, verständlichere Fehlerausgaben und sichere Architekturgrenzen.',
    href: 'https://github.com/voku?tab=repositories&q=phpstan',
    image: 'images/projects/arrayy.svg',
    alt: 'Verbundene Holzelemente als Symbol für Typbeziehungen und statische Analyse.',
  },
] as const;

const RunicCompass = ({className = ''}: {className?: string}) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <circle cx="50" cy="50" r="45" />
    <circle cx="50" cy="50" r="35" />
    <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" />
    <circle cx="50" cy="15" r="3" fill="currentColor" />
    <circle cx="50" cy="85" r="3" fill="currentColor" />
    <circle cx="15" cy="50" r="3" fill="currentColor" />
    <circle cx="85" cy="50" r="3" fill="currentColor" />
  </svg>
);

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    ['#about', 'ÜBER MICH'],
    ['#career', 'WERDEGANG'],
    ['#projects', 'PROJEKTE'],
    ['#skills', 'FÄHIGKEITEN'],
    ['#contact', 'KONTAKT'],
  ] as const;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-wood-texture shadow-[0_5px_20px_rgba(0,0,0,0.9)] border-b-2 border-dirt-dark">
      <div className="container-1200 h-20 flex items-center justify-between">
        <RunicCompass className="w-14 h-14 text-gold-dark" />
        <div className="hidden md:flex gap-6 font-cinzel font-bold text-sm tracking-widest text-gold-dark">
          {links.map(([href, label]) => <a key={href} href={href} className="hover:text-gold transition-colors">{label}</a>)}
        </div>
        <Shield className="hidden md:block text-gold-dark" aria-hidden="true" />
        <button type="button" className="md:hidden text-gold-dark" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label="Navigation öffnen oder schließen">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>
      {isOpen ? (
        <div className="md:hidden bg-wood-texture border-t border-dirt-dark py-6">
          <div className="flex flex-col items-center gap-6 font-cinzel font-bold text-sm tracking-widest text-gold-dark">
            {links.map(([href, label]) => <a key={href} href={href} onClick={() => setIsOpen(false)}>{label}</a>)}
          </div>
        </div>
      ) : null}
    </nav>
  );
};

const SectionTitle = ({title, subtitle}: {title: string; subtitle: string}) => (
  <div className="text-center mb-14">
    <h2 className="font-cinzel text-3xl md:text-6xl font-bold text-parchment text-shadow-dark">{title}</h2>
    <p className="font-cinzel text-parchment-dark tracking-widest uppercase text-xs md:text-sm font-bold mt-4">{subtitle}</p>
  </div>
);

const Hero = () => (
  <section className="relative min-h-[720px] lg:min-h-[820px] flex items-center overflow-hidden">
    <picture className="absolute inset-0 block h-full w-full">
      <source type="image/webp" media="(min-width: 1280px)" srcSet={getAssetUrl('images/hero/header-desktop.webp')} />
      <source type="image/webp" media="(min-width: 640px)" srcSet={getAssetUrl('images/hero/header-tablet.webp')} />
      <img src={getAssetUrl('images/hero/header-mobile.webp')} alt="KI-generiertes Porträt von Lars Moelleken als Wikinger" className="hero-image w-full h-full object-cover" fetchPriority="high" />
    </picture>
    <div className="absolute inset-0 bg-gradient-to-r from-dirt/95 via-dirt/70 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dirt/90" />
    <div className="relative z-10 container-1200 pt-32 pb-20">
      <motion.div initial={{opacity: 0, x: -30}} animate={{opacity: 1, x: 0}} transition={{duration: 1}} className="max-w-3xl">
        <h1 className="font-cinzel text-5xl md:text-7xl xl:text-[8rem] font-bold text-parchment text-shadow-dark leading-none">LARS<br />MOELLEKEN</h1>
        <p className="font-cinzel text-parchment text-sm md:text-xl tracking-[0.18em] mt-8 uppercase font-bold">Senior PHP Developer • Software Architect • Open-Source Maintainer</p>
        <p className="font-body text-parchment-light text-xl md:text-2xl italic mt-4 mb-8">Legacy-Modernisierung, Static Analysis und überprüfbare Delivery.</p>
        <a href="#career" className="btn-parchment"><span>WERDEGANG</span><span className="arrow">&gt;</span></a>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="relative z-20">
    <div className="banner-parchment">
      <div className="container-1200 text-center">
        <h2 className="font-cinzel text-3xl md:text-6xl font-bold text-ink mb-8">« ÜBER MICH »</h2>
        <p className="font-body text-ink text-xl md:text-3xl leading-relaxed max-w-5xl mx-auto font-semibold">
          Ich bin <strong>Lars Moelleken</strong> aka <strong>voku</strong>, Senior PHP Developer und Software-Architekt mit rund 20 Jahren Erfahrung in Entwicklung, Modernisierung und stabilem Betrieb geschäftskritischer Anwendungen. Mein Schwerpunkt liegt auf großen Legacy-Codebases, klaren Typverträgen, statischer Analyse, automatisierten Tests, CI/CD und sicheren Enterprise-Integrationen.
        </p>
      </div>
    </div>
  </section>
);

const Career = () => (
  <section id="career" className="py-20 md:py-32 bg-dirt-texture">
    <div className="container-1200">
      <SectionTitle title="BERUFLICHER WERDEGANG" subtitle="VOM LINUX-BETRIEB ZUR SOFTWARE-ARCHITEKTUR" />
      <div className="space-y-8">
        {experience.map((entry) => (
          <article key={`${entry.period}-${entry.company}`} className="card-parchment !p-6 md:!p-8">
            <div className="grid gap-6 md:grid-cols-[220px_1fr]">
              <div>
                <p className="font-cinzel text-sm font-bold tracking-widest text-ink/70">{entry.period}</p>
                <h3 className="font-cinzel text-2xl font-bold text-ink mt-2">{entry.company}</h3>
                <p className="font-body text-lg font-semibold text-ink/80 mt-2">{entry.role}</p>
              </div>
              <div>
                <p className="font-body text-xl text-ink font-semibold leading-relaxed">{entry.summary}</p>
                <ul className="mt-5 space-y-3 font-body text-lg text-ink/85">
                  {entry.highlights.map((highlight) => <li key={highlight} className="flex gap-3"><span>✓</span><span>{highlight}</span></li>)}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-20 md:py-32 bg-dirt-texture">
    <div className="container-1200">
      <SectionTitle title="OPEN SOURCE & PROJEKTE" subtitle="CODE, DER NICHT NACH DEM SCREENSHOT ENDET" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article key={project.title} className="card-parchment">
            <div className="card-image-frame"><img src={getAssetUrl(project.image)} alt={project.alt} loading="lazy" /></div>
            <h3 className="font-cinzel font-bold text-2xl text-ink mb-4 text-center">{project.title}</h3>
            <p className="text-ink/80 text-center font-body text-xl mb-8 flex-grow font-medium">{project.description}</p>
            <a href={project.href} target="_blank" rel="noreferrer" className="btn-wood w-full"><span>MEHR ERFAHREN</span><span className="arrow">&gt;</span></a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-20 md:py-32 bg-dirt-texture border-t border-parchment/10">
    <div className="container-1200">
      <SectionTitle title="FÄHIGKEITEN" subtitle="TYPEN, VERIFIKATION UND SICHERE INTEGRATIONEN" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          ['BACKEND & ARCHITEKTUR', 'PHP 8.x, MariaDB/MySQL, REST, Composer, große Legacy-Codebases, klare Verträge, präzise PHPDocs und immutable Datenobjekte.'],
          ['QUALITÄT & DELIVERY', 'PHPStan max, PHPUnit, Codeception, php-cs-fixer, Rector, CI/CD, kleine überprüfbare Diffs und keine stillen Fehler.'],
          ['ENTERPRISE & PLATTFORM', 'Linux, Apache, Docker Compose, GitLab CI, Jenkins, Sentry, Syslog, LDAP/AD, M365/Exchange, PowerShell und AS/400.'],
        ].map(([title, text]) => (
          <article key={title} className="card-parchment">
            <h3 className="font-cinzel text-2xl font-bold text-ink mb-5">{title}</h3>
            <p className="font-body text-ink text-lg font-medium leading-relaxed">{text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 md:py-32 bg-dirt-texture border-t border-parchment/10 text-center">
    <div className="container-1200">
      <SectionTitle title="KONTAKT" subtitle="LASS UNS ÜBER BELASTBARE SOFTWARE SPRECHEN" />
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 font-body text-parchment text-xl mb-12">
        <a href="mailto:lars@moelleken.org" className="hover:text-gold">lars@moelleken.org</a>
        <a href="https://moelleken.org/" target="_blank" rel="noreferrer" className="hover:text-gold">moelleken.org</a>
        <span>Voerde (NRW), Deutschland</span>
      </div>
      <div className="flex justify-center gap-6">
        <a href="https://github.com/voku" target="_blank" rel="noreferrer" className="text-parchment hover:text-gold" aria-label="GitHub"><Github size={30} /></a>
        <a href="https://www.linkedin.com/in/larsmoelleken/" target="_blank" rel="noreferrer" className="text-parchment hover:text-gold" aria-label="LinkedIn"><Linkedin size={30} /></a>
        <a href="https://suckup.de/" target="_blank" rel="noreferrer" className="text-parchment hover:text-gold" aria-label="Blog"><Globe size={30} /></a>
      </div>
      <p className="font-body text-parchment-dark mt-16">© 2026 Lars Moelleken • Open Source • Static Analysis • Legacy Modernisierung</p>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="bg-dirt selection:bg-gold selection:text-dirt overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Career />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
