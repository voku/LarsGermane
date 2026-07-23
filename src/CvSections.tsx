import {BriefcaseBusiness, GraduationCap, Languages, MapPin, ShieldCheck} from 'lucide-react';

type ExperienceEntry = Readonly<{
  period: string;
  company: string;
  role: string;
  summary: string;
  highlights: readonly string[];
}>;

type EducationEntry = Readonly<{
  period: string;
  title: string;
  institution?: string;
}>;

const experience: readonly ExperienceEntry[] = [
  {
    period: '08/2023 – heute',
    company: 'REMONDIS IT Services GmbH',
    role: 'Senior PHP Developer / Software Architect · IT-Portal',
    summary:
      'Technische Weiterentwicklung und Architektur eines zentralen IAM- und Berechtigungsportals für Benutzerrechte, Active Directory, Microsoft 365, Standorte, Inventar und weitere Infrastrukturprozesse.',
    highlights: [
      'Modernisierung einer gewachsenen PHP-8.x-Codebase mit typisierten APIs, klaren Verantwortlichkeiten und unveränderlichen Datenobjekten.',
      'PHPStan auf maximalem Level, projektspezifische Regeln, Codeception sowie nachvollziehbare CI/CD-, Release- und Rollback-Prozesse.',
      'Integration und Automatisierung von LDAP/Active Directory, Microsoft 365/Exchange, PowerShell-Gateways und AS/400-Systemen.',
      'Sicherheit durch CSRF-Schutz, Prepared Statements, XSS-/SQLi-Erkennung, Upload-Prüfungen und zentrales Fehlerhandling.',
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
      'Kleine, überprüfbare Änderungen statt riskanter Big-Bang-Umbauten.',
    ],
  },
  {
    period: '06/2017 – 02/2023',
    company: 'MEERX.de / VDMG connect GmbH',
    role: 'PHP Developer · E-Commerce & CRM',
    summary:
      'Modernisierung eines individuellen E-Commerce-Systems und einer rund 15 Jahre gewachsenen Codebase mit etwa 10.000 PHP-Klassen.',
    highlights: [
      'Aufbau einer Elasticsearch-basierten Suche für mehrere Millionen Artikeldatensätze.',
      'Realisierung der Amazon-Anbindung an das interne CRM.',
      'Einführung und Ausbau von PHPStan, automatisierten Tests, präzisen PHPDocs und CI-Checks.',
    ],
  },
  {
    period: '08/2011 – 05/2017',
    company: 'menadwork kommunikation GmbH',
    role: 'Full Stack Developer',
    summary:
      'Entwicklung eines internen CMS sowie Umsetzung von Websites und E-Mail-Templates mit PHP, HTML, CSS und JavaScript.',
    highlights: [
      'Einführung von Git und automatisierten Tests mit Jenkins.',
      'Verantwortung von Backend und Datenbank bis zur browsernahen Umsetzung.',
    ],
  },
  {
    period: '08/2007 – 08/2010',
    company: 'Global Village GmbH',
    role: 'Linux Systemadministrator',
    summary:
      'Betrieb, Automatisierung und Fehleranalyse von Linux-Servern sowie technischer Support für Server, Websites, E-Mail und DSL.',
    highlights: [
      'Automatisierung und Entwicklung mit Bash, PHP und Perl.',
      'Installation, Aktualisierung, Monitoring und Hardwarebetrieb im Serverraum.',
    ],
  },
];

const education: readonly EducationEntry[] = [
  {
    period: '2011 – 2013',
    title: 'Fachinformatiker Anwendungsentwicklung',
  },
  {
    period: '2010 – 2011',
    title: 'Informatik, ohne Abschluss',
    institution: 'Hochschule Niederrhein',
  },
  {
    period: '2007 – 2010',
    title: 'Fachinformatiker Systemintegration',
  },
  {
    period: '2004 – 2007',
    title: 'Staatlich geprüfter Assistent für Betriebsinformatik',
  },
];

const SectionHeading = ({title, subtitle}: Readonly<{title: string; subtitle: string}>) => (
  <div className="relative z-10 mb-16 text-center">
    <div className="mb-4 flex items-center justify-center gap-3 md:gap-6">
      <div className="h-px w-8 bg-parchment/30 md:w-28" />
      <div className="h-2.5 w-2.5 rotate-45 bg-parchment/60" />
      <h2 className="px-2 font-cinzel text-3xl font-bold text-parchment text-shadow-dark md:text-6xl">
        {title}
      </h2>
      <div className="h-2.5 w-2.5 rotate-45 bg-parchment/60" />
      <div className="h-px w-8 bg-parchment/30 md:w-28" />
    </div>
    <p className="font-cinzel text-xs font-bold uppercase tracking-[0.22em] text-parchment-dark md:text-sm">
      {subtitle}
    </p>
  </div>
);

export const ExperienceSection = () => (
  <section id="experience" className="relative border-t border-parchment/10 bg-dirt-texture py-20 md:py-32">
    <div className="container-1200">
      <SectionHeading title="BERUFSWEG" subtitle="VOM LINUX-BETRIEB ZUR SOFTWARE-ARCHITEKTUR" />

      <div className="mx-auto max-w-6xl space-y-8">
        {experience.map((entry, index) => (
          <motion.article
            key={`${entry.period}-${entry.company}`}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.15}}
            transition={{duration: 0.45, delay: Math.min(index * 0.05, 0.2)}}
            className="grid items-start gap-4 md:grid-cols-[10rem_1fr] md:gap-8"
          >
            <div className="relative z-10 flex items-center gap-3 md:block md:text-right">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-dark/60 bg-wood-texture text-gold-dark shadow-lg md:ml-auto md:mb-3">
                <BriefcaseBusiness size={20} aria-hidden="true" />
              </div>
              <p className="font-cinzel text-sm font-bold tracking-wider text-parchment md:text-base">{entry.period}</p>
            </div>

            <div className="card-parchment !p-0">
              <div className="relative z-10 p-6 md:p-8">
                <div className="mb-5 border-b border-ink/20 pb-5">
                  <h3 className="font-cinzel text-2xl font-bold text-ink md:text-3xl">{entry.company}</h3>
                  <p className="mt-2 font-cinzel text-xs font-bold uppercase tracking-[0.16em] text-ink/70 md:text-sm">
                    {entry.role}
                  </p>
                </div>

                <p className="font-body text-lg font-semibold leading-relaxed text-ink md:text-xl">{entry.summary}</p>

                <ul className="mt-6 space-y-3 font-body text-base font-medium text-ink/85 md:text-lg">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-1 font-bold text-ink" aria-hidden="true">◆</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

const facts = [
  {label: 'Standort', value: 'Voerde (NRW)', icon: <MapPin size={24} aria-hidden="true" />},
  {label: 'Sprachen', value: 'Deutsch · Englisch', icon: <Languages size={24} aria-hidden="true" />},
  {label: 'Arbeitsweise', value: 'Verifikation vor Vertrauen', icon: <ShieldCheck size={24} aria-hidden="true" />},
] as const;

export const EducationSection = () => (
  <section id="education" className="relative border-t border-parchment/10 bg-dirt-texture py-20 md:py-32">
    <div className="container-1200">
      <SectionHeading title="AUSBILDUNG" subtitle="SYSTEMBETRIEB, ANWENDUNGSENTWICKLUNG UND PRAXIS" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        {education.map((entry) => (
          <article key={`${entry.period}-${entry.title}`} className="card-parchment !p-0">
            <div className="relative z-10 flex h-full gap-5 p-6 md:p-8">
              <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink/30 bg-wood-texture text-parchment shadow-inner">
                <GraduationCap size={26} aria-hidden="true" />
              </div>
              <div>
                <p className="font-cinzel text-xs font-bold tracking-[0.16em] text-ink/60">{entry.period}</p>
                <h3 className="mt-2 font-cinzel text-xl font-bold leading-snug text-ink md:text-2xl">{entry.title}</h3>
                {entry.institution ? <p className="mt-2 font-body text-lg font-semibold text-ink/75">{entry.institution}</p> : null}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
        {facts.map((fact) => (
          <div key={fact.label} className="border border-parchment/15 bg-wood-texture p-5 text-center shadow-xl">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center text-gold-dark">{fact.icon}</div>
            <p className="font-cinzel text-[10px] font-bold uppercase tracking-[0.2em] text-parchment-dark">{fact.label}</p>
            <p className="mt-2 font-body text-lg font-semibold text-parchment">{fact.value}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
