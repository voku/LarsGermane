import {useState, type ReactNode} from 'react';
import {motion} from 'motion/react';
import {
  BrainCircuit,
  Code2,
  Database,
  ExternalLink,
  GitBranch,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Server,
  Shield,
  Terminal,
  Workflow,
  X,
} from 'lucide-react';

const getAssetUrl = (path: string): string => `${import.meta.env.BASE_URL}${path}`;

const navItems = [
  {label: 'START', href: '#start'},
  {label: 'PROFIL', href: '#profil'},
  {label: 'ERFAHRUNG', href: '#erfahrung'},
  {label: 'PROJEKTE', href: '#projekte'},
  {label: 'STACK', href: '#stack'},
  {label: 'KONTAKT', href: '#kontakt'},
] as const;

const experience = [
  {
    period: '08/2023 – heute',
    company: 'REMONDIS IT Services GmbH',
    role: 'Senior PHP Developer / Software Architect',
    summary:
      'Technische Weiterentwicklung und Architektur eines zentralen IAM- und Berechtigungsportals für Benutzerrechte, Active Directory, Microsoft 365, Standorte, Inventar und weitere Infrastrukturprozesse.',
    highlights: [
      'Modernisierung einer gewachsenen PHP-8.x-Codebase mit typisierten APIs, klaren Verantwortlichkeiten und unveränderlichen Datenobjekten.',
      'PHPStan auf maximalem Level, projektspezifische Regeln, Codeception sowie nachvollziehbare CI/CD-, Release- und Rollback-Prozesse.',
      'Sichere Integrationen mit LDAP/AD, M365/Exchange, PowerShell-Gateways und AS/400-Systemen.',
      'Überprüfbare Coding-Agent-Workflows mit explizitem Scope, selektivem Kontext, Evidence-Gates und menschlich freigegebenem Lernen.',
    ],
  },
  {
    period: '02/2023 – 08/2023',
    company: 'IONOS SE',
    role: 'PHP Developer',
    summary:
      'Schrittweise Modernisierung einer rund 20 Jahre alten Codebase mit Fokus auf Wartbarkeit, statische Analyse und risikoarme Migration.',
    highlights: [
      'Verbessertes Autoloading, präzise PHPDocs, PHPStan und automatisierte CI-Prüfungen.',
      'Stabilisierung und zuverlässigere Gestaltung der Datenbankanbindung.',
    ],
  },
  {
    period: '06/2017 – 02/2023',
    company: 'MEERX.de / VDMG connect GmbH',
    role: 'PHP Developer · E-Commerce & CRM',
    summary:
      'Modernisierung eines individuellen E-Commerce-Systems und einer über viele Jahre gewachsenen Codebase mit rund 10.000 PHP-Klassen.',
    highlights: [
      'Elasticsearch-Suche für mehrere Millionen Artikeldatensätze.',
      'Amazon-Anbindung an das interne CRM.',
      'Einführung und Ausbau von PHPStan, automatisierten Tests, präzisen PHPDocs und CI-Checks.',
    ],
  },
  {
    period: '08/2011 – 05/2017',
    company: 'menadwork kommunikation GmbH',
    role: 'Full Stack Developer',
    summary:
      'Entwicklung eines internen CMS sowie Umsetzung von Websites und E-Mail-Templates mit PHP, HTML, CSS und JavaScript.',
    highlights: ['Einführung von Git und automatisierten Tests mit Jenkins.'],
  },
  {
    period: '08/2007 – 08/2010',
    company: 'Global Village GmbH',
    role: 'Linux Systemadministrator',
    summary:
      'Automatisierung, Betrieb und Fehleranalyse von Linux-Servern sowie technischer Support für Server, Websites, E-Mail und DSL.',
    highlights: ['Entwicklung und Automatisierung mit Bash, PHP und Perl.', 'Betrieb des Serverraums inklusive Hardware, Verkabelung und Monitoring.'],
  },
] as const;

const stackGroups = [
  {
    title: 'BACKEND & ARCHITEKTUR',
    subtitle: 'TYPEN STATT HOFFNUNG',
    icon: <Code2 aria-hidden="true" size={34} />,
    items: ['PHP 8.x', 'MariaDB / MySQL', 'SQL & REST APIs', 'Composer', 'Legacy-Modernisierung', 'Immutable DTOs & klare Verträge'],
  },
  {
    title: 'QUALITÄT & DELIVERY',
    subtitle: 'VERIFIKATION VOR VERTRAUEN',
    icon: <Shield aria-hidden="true" size={34} />,
    items: ['PHPStan max', 'PHPUnit & Codeception', 'php-cs-fixer & Rector', 'präzise PHPDocs', 'CI/CD', 'kleine überprüfbare Diffs'],
  },
  {
    title: 'ENTERPRISE & PLATTFORM',
    subtitle: 'SYSTEME MÜSSEN WIRKLICH LAUFEN',
    icon: <Server aria-hidden="true" size={34} />,
    items: ['Linux & Apache', 'Docker Compose', 'LDAP / Active Directory', 'M365 / Exchange', 'PowerShell-Gateways', 'Sentry & Syslog'],
  },
  {
    title: 'AGENT ENGINEERING',
    subtitle: 'PROZESS STATT PROMPT-MAGIE',
    icon: <BrainCircuit aria-hidden="true" size={34} />,
    items: ['expliziter Task-Scope', 'selektiver Recall', 'temporärer Session-Kontext', 'Evidence-Gates', 'menschlich freigegebenes Lernen', 'bewusstes Vergessen'],
  },
] as const;

const TornEdgeFilter = () => (
  <svg width="0" height="0" className="absolute" aria-hidden="true">
    <defs>
      <clipPath id="torn-clip" clipPathUnits="objectBoundingBox">
        <path d="M0,0.07 L0.025,0.02 L0.05,0.06 L0.075,0.01 L0.1,0.04 L0.125,0 L0.15,0.05 L0.175,0.02 L0.2,0.06 L0.225,0.01 L0.25,0.04 L0.275,0 L0.3,0.05 L0.325,0.02 L0.35,0.06 L0.375,0.01 L0.4,0.04 L0.425,0.02 L0.45,0.06 L0.475,0 L0.5,0.04 L0.525,0.02 L0.55,0.06 L0.575,0.01 L0.6,0.04 L0.625,0 L0.65,0.05 L0.675,0.02 L0.7,0.06 L0.725,0.01 L0.75,0.04 L0.775,0.02 L0.8,0.06 L0.825,0 L0.85,0.04 L0.875,0.02 L0.9,0.06 L0.925,0.01 L0.95,0.04 L0.975,0.02 L1,0.06 L1,0.94 L0.975,0.98 L0.95,0.95 L0.925,0.99 L0.9,0.96 L0.875,1 L0.85,0.96 L0.825,0.98 L0.8,0.94 L0.775,0.99 L0.75,0.96 L0.725,1 L0.7,0.95 L0.675,0.98 L0.65,0.94 L0.625,0.99 L0.6,0.96 L0.575,1 L0.55,0.95 L0.525,0.98 L0.5,0.96 L0.475,0.99 L0.45,0.94 L0.425,0.98 L0.4,0.96 L0.375,1 L0.35,0.95 L0.325,0.98 L0.3,0.94 L0.275,0.99 L0.25,0.96 L0.225,1 L0.2,0.95 L0.175,0.98 L0.15,0.96 L0.125,0.99 L0.1,0.94 L0.075,0.98 L0.05,0.96 L0.025,1 L0,0.94 Z" />
      </clipPath>
      <clipPath id="torn-clip-small" clipPathUnits="objectBoundingBox">
        <path d="M0,0.05 L0.05,0 L0.1,0.04 L0.15,0.01 L0.2,0.04 L0.25,0 L0.3,0.04 L0.35,0.01 L0.4,0.04 L0.45,0 L0.5,0.03 L0.55,0 L0.6,0.04 L0.65,0.01 L0.7,0.04 L0.75,0 L0.8,0.04 L0.85,0.01 L0.9,0.04 L0.95,0 L1,0.04 L1,0.96 L0.95,1 L0.9,0.97 L0.85,0.99 L0.8,0.96 L0.75,1 L0.7,0.97 L0.65,0.99 L0.6,0.96 L0.55,1 L0.5,0.97 L0.45,0.99 L0.4,0.96 L0.35,1 L0.3,0.97 L0.25,0.99 L0.2,0.96 L0.15,1 L0.1,0.97 L0.05,0.99 L0,0.96 Z" />
      </clipPath>
    </defs>
  </svg>
);

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

const SectionHeading = ({title, subtitle}: {title: string; subtitle: string}) => (
  <div className="mb-14 text-center">
    <div className="mb-4 flex items-center justify-center gap-3 md:gap-6">
      <div className="h-px w-10 bg-parchment/30 md:w-32" />
      <div className="h-3 w-3 rotate-45 bg-gold-dark" />
      <h2 className="font-cinzel text-3xl font-bold text-parchment text-shadow-dark md:text-6xl">{title}</h2>
      <div className="h-3 w-3 rotate-45 bg-gold-dark" />
      <div className="h-px w-10 bg-parchment/30 md:w-32" />
    </div>
    <p className="font-cinzel text-xs font-bold uppercase tracking-[0.22em] text-parchment-dark md:text-sm">{subtitle}</p>
  </div>
);

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b-2 border-dirt-dark bg-wood-texture shadow-[0_5px_20px_rgba(0,0,0,0.9)]">
      <div className="container-1200 relative z-10 flex h-20 items-center justify-between">
        <a href="#start" className="flex items-center gap-3 text-gold-dark" aria-label="Zum Seitenanfang">
          <RunicCompass className="h-12 w-12 drop-shadow-md" />
          <span className="hidden font-cinzel text-sm font-bold tracking-[0.18em] sm:block">LARS GERMANE</span>
        </a>

        <div className="hidden items-center gap-7 font-cinzel text-xs font-bold tracking-[0.14em] text-gold-dark lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-gold">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 text-gold-dark lg:flex" aria-hidden="true">
          <Shield size={28} />
          <Terminal size={30} />
        </div>

        <button
          type="button"
          className="text-gold-dark lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Navigation schließen' : 'Navigation öffnen'}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {isOpen ? (
        <div id="mobile-navigation" className="border-t border-dirt-dark bg-wood-texture lg:hidden">
          <div className="container-1200 flex flex-col py-5 font-cinzel text-sm font-bold tracking-widest text-gold-dark">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="border-b border-parchment/10 py-3" onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
};

const Hero = () => (
  <header id="start" className="relative flex min-h-[760px] items-center overflow-hidden lg:min-h-[860px]">
    <picture className="absolute inset-0 block h-full w-full">
      <source type="image/webp" media="(min-width: 1280px)" srcSet={getAssetUrl('images/hero/header-desktop.webp')} />
      <source type="image/webp" media="(min-width: 640px)" srcSet={getAssetUrl('images/hero/header-tablet.webp')} />
      <img
        src={getAssetUrl('images/hero/header-mobile.webp')}
        alt="KI-generiertes Porträt von Lars Moelleken als Wikinger vor einer rauen nordischen Landschaft."
        className="hero-image h-full w-full object-cover"
        fetchPriority="high"
      />
    </picture>
    <div className="absolute inset-0 bg-gradient-to-r from-dirt/95 via-dirt/75 to-dirt/10" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-dirt" />

    <div className="container-1200 relative z-10 pb-20 pt-32">
      <motion.div initial={{opacity: 0, x: -28}} animate={{opacity: 1, x: 0}} transition={{duration: 0.8}} className="max-w-3xl">
        <p className="mb-5 font-cinzel text-xs font-bold uppercase tracking-[0.28em] text-gold-light sm:text-sm">
          Senior PHP Developer · Software Architect · Open-Source Maintainer
        </p>
        <h1 className="font-cinzel text-5xl font-bold leading-[0.92] text-parchment text-shadow-dark sm:text-7xl lg:text-[7rem]">
          LARS<br />MOELLEKEN
        </h1>
        <div className="my-7 flex max-w-xl items-center gap-3">
          <div className="h-px flex-1 bg-parchment/40" />
          <div className="h-3 w-3 rotate-45 bg-gold-dark" />
          <div className="h-px flex-1 bg-parchment/40" />
        </div>
        <p className="max-w-2xl font-body text-xl font-semibold leading-relaxed text-parchment-light text-shadow-dark sm:text-2xl">
          Rund 20 Jahre Erfahrung mit geschäftskritischen Anwendungen, großen Legacy-Codebases, statischer Analyse, sicheren Enterprise-Integrationen und überprüfbaren AI-gestützten Entwicklungsprozessen.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a href="#erfahrung" className="btn-parchment">
            <span>BERUFSERFAHRUNG</span><span className="arrow" aria-hidden="true">›</span>
          </a>
          <a href="https://github.com/voku" target="_blank" rel="noreferrer" className="btn-wood">
            <Github size={20} aria-hidden="true" /><span className="ml-3">GITHUB</span>
          </a>
        </div>
        <p className="mt-5 font-body text-sm italic text-parchment-dark">Das Porträt ist KI-generiert. Der Lebenslauf leider nicht.</p>
      </motion.div>
    </div>
  </header>
);

const Profile = () => (
  <section id="profil" className="relative z-20">
    <div className="banner-parchment">
      <div className="container-1200">
        <h2 className="mb-8 font-cinzel text-3xl font-bold text-ink md:text-6xl">PROFIL</h2>
        <p className="mx-auto max-w-5xl px-4 font-body text-xl font-semibold leading-relaxed text-ink md:text-3xl">
          Ich bin <strong>Lars Moelleken</strong>, auf GitHub besser bekannt als <strong>voku</strong>. Mein Schwerpunkt liegt auf PHP-Architektur, der kontrollierten Modernisierung gewachsener Systeme und Softwarequalität, die sich mit Typen, Tests, statischer Analyse und reproduzierbaren Checks belegen lässt.
        </p>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            ['~20 JAHRE', 'Softwareentwicklung & Betrieb'],
            ['PHPSTAN MAX', 'statische Analyse als Standard'],
            ['10.000+', 'PHP-Klassen in einer Legacy-Codebase'],
            ['OPEN SOURCE', 'Libraries, Tools & Dokumentation'],
          ].map(([value, label]) => (
            <div key={value} className="border border-ink/20 bg-ink/5 p-5 text-center shadow-inner">
              <strong className="block font-cinzel text-xl text-ink md:text-2xl">{value}</strong>
              <span className="mt-2 block font-body text-sm font-semibold text-ink/75 md:text-base">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="erfahrung" className="bg-dirt-texture py-24 md:py-32">
    <div className="container-1200">
      <SectionHeading title="ERFAHRUNG" subtitle="VOM LINUX-SERVER BIS ZUR ENTERPRISE-ARCHITEKTUR" />
      <div className="space-y-8">
        {experience.map((item) => (
          <article key={`${item.period}-${item.company}`} className="card-parchment !h-auto md:!p-10">
            <div className="relative z-10 grid gap-6 lg:grid-cols-[230px_1fr]">
              <div>
                <p className="font-cinzel text-sm font-bold tracking-wider text-ink/65">{item.period}</p>
                <h3 className="mt-3 font-cinzel text-2xl font-bold text-ink">{item.company}</h3>
                <p className="mt-2 font-body text-lg font-semibold text-ink/75">{item.role}</p>
              </div>
              <div>
                <p className="font-body text-xl font-semibold leading-relaxed text-ink">{item.summary}</p>
                <ul className="mt-5 space-y-3 font-body text-lg text-ink/85">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="font-bold text-gold-dark" aria-hidden="true">◆</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

type ProjectCardProps = {
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
};

const ProjectCard = ({title, eyebrow, description, href, image, imageAlt = '', children}: ProjectCardProps) => (
  <article className="card-parchment">
    <div className="card-image-frame">
      {image ? <img src={image} alt={imageAlt} loading="lazy" /> : <div className="flex items-center justify-center bg-dirt-texture text-gold-dark">{children}</div>}
    </div>
    <p className="font-cinzel text-[10px] font-bold tracking-[0.22em] text-ink/60">{eyebrow}</p>
    <h3 className="mt-2 font-cinzel text-2xl font-bold text-ink">{title}</h3>
    <p className="mb-7 mt-4 flex-1 font-body text-lg font-medium leading-relaxed text-ink/80">{description}</p>
    <a href={href} target="_blank" rel="noreferrer" className="btn-wood w-full">
      <span>PROJEKT ANSEHEN</span><ExternalLink className="ml-3" size={18} aria-hidden="true" />
    </a>
  </article>
);

const Projects = () => (
  <section id="projekte" className="bg-dirt-texture pb-24 md:pb-32">
    <div className="container-1200">
      <SectionHeading title="PROJEKTE" subtitle="LANGFRISTIG GEPFLEGT, NICHT NUR SCHNELL GENERIERT" />
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <ProjectCard
          title="PORTABLE UTF-8"
          eyebrow="UNICODE & STABILE APIS"
          description="Langjährig gepflegte PHP-Bibliothek für portable Unicode-Verarbeitung mit Fokus auf Kompatibilität, Performance und verlässliches Verhalten."
          href="https://github.com/voku/portable-utf8"
          image={getAssetUrl('images/projects/portable-utf8.svg')}
          imageAlt="Pergamentillustration mit Runen und Code-Motiven für portable UTF-8."
        />
        <ProjectCard
          title="ANTI-XSS"
          eyebrow="SICHERHEIT AUS DER PRAXIS"
          description="Eine robuste PHP-Bibliothek zur Bereinigung potenziell gefährlicher HTML-Inhalte und zur Reduzierung realer XSS-Risiken."
          href="https://github.com/voku/anti-xss"
          image={getAssetUrl('images/projects/anti-xss.svg')}
          imageAlt="Illustrierter Schild mit Code-Klammern für das Projekt Anti-XSS."
        />
        <ProjectCard
          title="AGENT LOOP"
          eyebrow="GOVERNED CODING AGENTS"
          description="Git-native Werkzeuge für Task-Steuerung, Session-Zustand, selektiven Recall, Verifikation und kontrolliertes Lernen von Coding Agents."
          href="https://github.com/voku/agent-loop"
        >
          <Workflow size={92} strokeWidth={1.2} aria-hidden="true" />
        </ProjectCard>
        <ProjectCard
          title="PHPSTAN AGENT FORMAT"
          eyebrow="STATIC ANALYSIS FOR AGENTS"
          description="Strukturierte PHPStan-Ausgaben mit Root-Cause-Kontext, Clustering und reparaturorientierter Darstellung für Menschen und Coding Agents."
          href="https://github.com/voku/phpstan-agent-format"
        >
          <GitBranch size={92} strokeWidth={1.2} aria-hidden="true" />
        </ProjectCard>
        <ProjectCard
          title="PHPSTAN CONFIGURATOR"
          eyebrow="ANALYSE SICHTBAR MACHEN"
          description="Interaktive Konfiguration für PHPStan-Presets, Strictness, Erweiterungen, Baselines und CI-Setups."
          href="https://github.com/voku/PHPStanConfigurator"
        >
          <Database size={92} strokeWidth={1.2} aria-hidden="true" />
        </ProjectCard>
        <ProjectCard
          title="ARRAYY"
          eyebrow="TYPISIERTE COLLECTIONS"
          description="Eine pragmatische PHP-Collection-Library für lesbare Datenverarbeitung in modernen und gewachsenen Anwendungen."
          href="https://github.com/voku/Arrayy"
          image={getAssetUrl('images/projects/arrayy.svg')}
          imageAlt="Illustration verbundener Holzfächer für das Projekt Arrayy."
        />
      </div>
    </div>
  </section>
);

const Stack = () => (
  <section id="stack" className="border-t border-parchment/10 bg-dirt-texture py-24 md:py-32">
    <div className="container-1200">
      <SectionHeading title="STACK & METHODEN" subtitle="WERKZEUGE SIND NUR DANN WERTVOLL, WENN SIE FEHLER SICHTBAR MACHEN" />
      <div className="grid gap-8 md:grid-cols-2">
        {stackGroups.map((group) => (
          <article key={group.title} className="card-parchment !h-auto">
            <div className="relative z-10">
              <div className="flex items-start justify-between gap-5 border-b border-ink/20 pb-5">
                <div>
                  <h3 className="font-cinzel text-2xl font-bold text-ink">{group.title}</h3>
                  <p className="mt-2 font-cinzel text-[10px] font-bold tracking-[0.2em] text-ink/60">{group.subtitle}</p>
                </div>
                <div className="text-gold-dark">{group.icon}</div>
              </div>
              <ul className="mt-5 grid gap-3 font-body text-lg font-semibold text-ink/85 sm:grid-cols-2">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3"><span className="text-gold-dark" aria-hidden="true">◆</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <footer id="kontakt" className="relative overflow-hidden border-t border-parchment/10 py-24 md:py-32">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(74,48,28,0.8),transparent_60%),linear-gradient(to_bottom,#24140c,#140c08)]" />
    <div className="container-1200 relative z-10 text-center">
      <RunicCompass className="mx-auto mb-8 h-20 w-20 text-gold-dark opacity-80" />
      <h2 className="font-cinzel text-4xl font-bold text-parchment text-shadow-dark md:text-6xl">KONTAKT</h2>
      <p className="mx-auto mt-6 max-w-3xl font-body text-xl font-semibold leading-relaxed text-parchment-light md:text-2xl">
        Für PHP-Architektur, Legacy-Modernisierung, statische Analyse, Enterprise-Integrationen und belastbare Agent-Workflows.
      </p>
      <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-center gap-5 font-body text-lg text-parchment md:flex-row md:flex-wrap md:gap-8">
        <a href="mailto:lars@moelleken.org" className="flex items-center gap-3 transition-colors hover:text-gold"><Mail size={20} />lars@moelleken.org</a>
        <a href="https://moelleken.org/" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition-colors hover:text-gold"><Globe size={20} />moelleken.org</a>
        <span className="flex items-center gap-3"><MapPin size={20} />Voerde, NRW</span>
      </div>
      <div className="mt-10 flex items-center justify-center gap-6 text-parchment">
        <a href="https://github.com/voku" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-gold"><Github size={30} /></a>
        <a href="https://www.linkedin.com/in/larsmoelleken/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-gold"><Linkedin size={30} /></a>
        <a href="https://suckup.de/" target="_blank" rel="noreferrer" aria-label="Technischer Blog" className="transition-colors hover:text-gold"><Globe size={30} /></a>
      </div>
      <p className="mt-16 border-t border-parchment/10 pt-8 font-body text-sm text-parchment-dark">
        © 2026 Lars Moelleken · Senior PHP Developer · Software Architect · Open Source Maintainer
      </p>
    </div>
  </footer>
);

export default function CvPage() {
  return (
    <div className="overflow-x-hidden bg-dirt selection:bg-gold selection:text-dirt">
      <TornEdgeFilter />
      <Navigation />
      <Hero />
      <Profile />
      <Experience />
      <Projects />
      <Stack />
      <Contact />
    </div>
  );
}
