import { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Globe, Shield, PaintBucket, Menu, X } from 'lucide-react';

// --- SVG Assets ---

const CrossedAxes = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 80 L80 20 M80 80 L20 20" />
    <path d="M75 15 Q85 5 95 15 Q85 25 75 15 Z" fill="currentColor" />
    <path d="M25 15 Q15 5 5 15 Q15 25 25 15 Z" fill="currentColor" />
  </svg>
);

const RunicCompass = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="50" cy="50" r="45" />
    <circle cx="50" cy="50" r="35" />
    <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" />
    <circle cx="50" cy="15" r="3" fill="currentColor" />
    <circle cx="50" cy="85" r="3" fill="currentColor" />
    <circle cx="15" cy="50" r="3" fill="currentColor" />
    <circle cx="85" cy="50" r="3" fill="currentColor" />
    <path d="M45 25 L55 25 M45 75 L55 75 M25 45 L25 55 M75 45 L75 55" />
  </svg>
);

const SwordDivider = ({ className = "" }) => (
  <svg viewBox="0 0 400 30" className={className} fill="none" stroke="currentColor">
    {/* Left Sword */}
    <path d="M180 15 L20 15" strokeWidth="2" />
    <path d="M160 10 L160 20 M140 12 L140 18" strokeWidth="3" />
    <circle cx="180" cy="15" r="4" fill="currentColor" />
    <path d="M20 15 L35 10 L35 20 Z" fill="currentColor" />
    {/* Right Sword */}
    <path d="M220 15 L380 15" strokeWidth="2" />
    <path d="M240 10 L240 20 M260 12 L260 18" strokeWidth="3" />
    <circle cx="220" cy="15" r="4" fill="currentColor" />
    <path d="M380 15 L365 10 L365 20 Z" fill="currentColor" />
  </svg>
);

const TornEdgeFilter = () => (
  <svg width="0" height="0" className="absolute">
    <filter id="torn-edge">
      <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="5" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
    </filter>
    <filter id="torn-edge-small">
      <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
    </filter>
  </svg>
);

const SquiggleIcon = ({ className = "" }) => (
  <svg viewBox="0 0 40 20" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 10 Q 12.5 0, 20 10 T 35 10" />
  </svg>
);

const DiamondOverlap = ({ className = "" }) => (
  <svg viewBox="0 0 40 20" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="8" y="4" width="12" height="12" transform="rotate(45 14 10)" />
    <rect x="20" y="4" width="12" height="12" transform="rotate(45 26 10)" />
  </svg>
);

const WaxSeal = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="50" r="45" fill="#7a1212" />
    <circle cx="50" cy="50" r="38" fill="#630a0a" />
    <circle cx="50" cy="50" r="35" fill="none" stroke="#4a0505" strokeWidth="2" />
    <text x="50" y="65" fontFamily="Cinzel Decorative" fontSize="40" fill="#4a0505" textAnchor="middle" fontWeight="bold">V</text>
  </svg>
);

const Rivet = ({ className = "" }) => (
  <svg viewBox="0 0 20 20" className={className}>
    <circle cx="10" cy="10" r="8" fill="#2a2a2a" />
    <circle cx="10" cy="10" r="6" fill="#1a1a1a" />
    <circle cx="7" cy="7" r="2" fill="#4a4a4a" />
  </svg>
);

const CornerOrnament = ({ className = "" }) => (
  <svg viewBox="0 0 50 50" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M0 0 L50 0 L50 10 L10 10 L10 50 L0 50 Z" fill="currentColor" opacity="0.3" />
    <path d="M5 5 L45 5 L45 45" />
    <circle cx="15" cy="15" r="3" fill="currentColor" />
  </svg>
);

// --- Components ---

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-wood-texture shadow-[0_5px_20px_rgba(0,0,0,0.9)] border-b-2 border-dirt-dark">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>
      <div className="container-1200 h-20 flex items-center justify-between relative z-10">
        {/* Left Emblem */}
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full bg-wood-texture border-2 border-dirt-dark shadow-inner flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-black/20"></div>
             <RunicCompass className="w-12 h-12 text-gold-dark drop-shadow-md relative z-10" />
          </div>
        </div>
        
        {/* Center Links - Desktop */}
        <div className="hidden md:flex items-center space-x-8 font-cinzel font-bold text-sm tracking-widest text-gold-dark">
          <a href="#" className="hover:text-gold hover:text-shadow-glow transition-all">START</a>
          <a href="#about" className="hover:text-gold hover:text-shadow-glow transition-all">ÜBER MICH</a>
          <a href="#projects" className="hover:text-gold hover:text-shadow-glow transition-all">PROJEKTE</a>
          <a href="#skills" className="hover:text-gold hover:text-shadow-glow transition-all">FÄHIGKEITEN</a>
          <a href="#contact" className="hover:text-gold hover:text-shadow-glow transition-all">KONTAKT</a>
        </div>
        
        {/* Right Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-4 text-gold-dark">
          <Shield className="w-8 h-8 drop-shadow-md" />
          <CrossedAxes className="w-10 h-10 drop-shadow-md" />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gold-dark hover:text-gold transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-wood-texture border-b-2 border-dirt-dark shadow-xl z-40">
          <div className="flex flex-col items-center py-6 space-y-6 font-cinzel font-bold text-sm tracking-widest text-gold-dark">
            <a href="#" onClick={() => setIsOpen(false)} className="hover:text-gold hover:text-shadow-glow transition-all">START</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-gold hover:text-shadow-glow transition-all">ÜBER MICH</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-gold hover:text-shadow-glow transition-all">PROJEKTE</a>
            <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-gold hover:text-shadow-glow transition-all">FÄHIGKEITEN</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-gold hover:text-shadow-glow transition-all">KONTAKT</a>
            
            <div className="flex items-center space-x-6 pt-4 border-t border-dirt-dark w-1/2 justify-center">
              <Shield className="w-6 h-6 drop-shadow-md" />
              <CrossedAxes className="w-8 h-8 drop-shadow-md" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-[600px] md:h-[800px] flex flex-col justify-center overflow-hidden">
    {/* Background Image - Restored to the original one */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=2000&auto=format&fit=crop" 
        alt="Germanic village at sunset" 
        className="w-full h-full object-cover object-center"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dirt/90 via-dirt/50 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dirt/90"></div>
    </div>

    {/* Top Right Compass */}
    <div className="hidden md:block absolute top-12 right-12 z-20 text-parchment opacity-70">
      <RunicCompass className="w-32 h-32 drop-shadow-2xl" />
    </div>

    <div className="relative z-10 container-1200 flex flex-col items-start mt-32 md:mt-48">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-start"
      >
        <div className="flex items-center space-x-4 md:space-x-6 mb-2">
          <CrossedAxes className="w-10 h-10 sm:w-12 sm:h-12 md:w-24 md:h-24 text-parchment drop-shadow-lg" />
          <h1 className="font-cinzel text-4xl sm:text-5xl md:text-[8rem] font-bold text-parchment tracking-tight text-shadow-dark leading-none">
            LARS
          </h1>
        </div>
        <h1 className="font-cinzel text-4xl sm:text-5xl md:text-[8rem] font-bold text-parchment mb-6 tracking-tight text-shadow-dark leading-none">
          MOELLEKEN
        </h1>
        
        <div className="flex items-center space-x-3 mb-8 w-full max-w-md">
          <div className="w-2 h-2 rotate-45 bg-parchment/80"></div>
          <div className="h-px flex-grow bg-parchment/50"></div>
          <div className="w-3 h-3 rotate-45 bg-parchment/80"></div>
          <div className="h-px flex-grow bg-parchment/50"></div>
          <div className="w-2 h-2 rotate-45 bg-parchment/80"></div>
        </div>

        <p className="font-cinzel text-parchment text-xs md:text-xl tracking-[0.15em] md:tracking-[0.25em] mb-4 uppercase text-shadow-dark font-bold">
          WEB DESIGNER &bull; ENTWICKLER &bull; PRODUKTMANAGER
        </p>

        <p className="font-body text-parchment-light text-xl md:text-2xl italic mb-8 text-shadow-dark">
          MIT HERZ & VERSTAND SEIT 2007
        </p>
        
        <a href="#projects" className="btn-parchment">
          <span>MEHR ERFAHREN</span>
          <span className="arrow">&gt;</span>
        </a>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="relative z-20">
    <div className="banner-parchment">
      <div className="container-1200">
        {/* Decorative Runes Top Left */}
        <div className="hidden md:block absolute -top-6 left-4 font-cinzel text-ink/40 text-2xl tracking-[0.4em] font-bold">
          ᛉ ᛟ ᛈ ᚱ ᛗ ᚷ
        </div>

        <h2 className="font-cinzel text-3xl md:text-6xl font-bold text-ink mb-6 flex items-center justify-center space-x-4 md:space-x-6">
          <span className="text-ink/60 text-3xl md:text-6xl font-light">«</span>
          <span>ÜBER MICH</span>
          <span className="text-ink/60 text-3xl md:text-6xl font-light">»</span>
        </h2>
        
        <div className="flex items-center justify-center space-x-2 md:space-x-4 mb-10 w-full max-w-2xl mx-auto">
          <div className="flex items-center flex-grow">
            <div className="w-3 h-3 border-b-2 border-l-2 border-ink/40 rotate-45 -mr-1"></div>
            <div className="h-px flex-grow bg-ink/40"></div>
          </div>
          <p className="font-cinzel text-ink/80 tracking-widest uppercase font-bold text-xs md:text-xl whitespace-normal md:whitespace-nowrap px-2 text-center">
            VIEL ERFAHRUNG, VIEL LEIDENSCHAFT
          </p>
          <div className="flex items-center flex-grow">
            <div className="h-px flex-grow bg-ink/40"></div>
            <div className="w-3 h-3 border-t-2 border-r-2 border-ink/40 rotate-45 -ml-1"></div>
          </div>
        </div>

        <p className="font-body text-ink text-xl md:text-3xl leading-relaxed max-w-5xl mx-auto font-semibold px-4 md:px-0 text-center">
          Ich bin <strong>Lars Moelleken</strong>, ein kreativer Germane alias "Voku" mit Leidenschaft für Webentwicklung und Design. Seit 2007 helfe ich, Projekte mit Herz & Verstand ins digitale Zeitalter zu führen - von kleinen Stämmen bis zu römischen Legionen.
        </p>
      </div>
    </div>
  </section>
);

const Projects = () => {
  const projects = [
    {
      title: "KREATIV & STRATEGISCH",
      desc: "Modernes Design, kluge Lösungen, zielgerichtete Planung.",
      image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "FLEXIBEL & ZUVERLÄSSIG",
      desc: "Breites Know-how, vielfältige Fähigkeiten, stetiges Dazulernen.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "ECHT & BODENSTÄNDIG",
      desc: "Persönlicher Einsatz, direkter Kontakt, klare Kommunikation.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-dirt-texture relative z-10">
      <div className="container-1200">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 md:space-x-4 mb-4">
            <div className="h-px w-8 md:w-32 bg-parchment/30"></div>
            <div className="w-2 h-2 rotate-45 bg-parchment/60"></div>
            <div className="h-px w-4 md:w-8 bg-parchment/30"></div>
            <h2 className="font-cinzel text-3xl md:text-6xl font-bold text-parchment text-shadow-dark px-2 md:px-4">PROJEKTE</h2>
            <div className="h-px w-4 md:w-8 bg-parchment/30"></div>
            <div className="w-2 h-2 rotate-45 bg-parchment/60"></div>
            <div className="h-px w-8 md:w-32 bg-parchment/30"></div>
          </div>
          <p className="font-cinzel text-parchment-dark tracking-widest uppercase text-xs md:text-sm font-bold">
            EINE AUSWAHL MEINER ARBEITEN
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="card-parchment">
              {/* Rivets */}
              <Rivet className="absolute top-3 left-3 w-4 h-4 z-20 opacity-80" />
              <Rivet className="absolute top-3 right-3 w-4 h-4 z-20 opacity-80" />
              <Rivet className="absolute bottom-3 left-3 w-4 h-4 z-20 opacity-80" />
              <Rivet className="absolute bottom-3 right-3 w-4 h-4 z-20 opacity-80" />
              
              <div className="card-image-frame">
                <img src={p.image} alt={p.title} referrerPolicy="no-referrer" />
              </div>
              
              <h3 className="font-cinzel font-bold text-2xl text-ink mb-4 text-center">{p.title}</h3>
              <p className="text-ink/80 text-center font-body text-xl mb-8 flex-grow font-medium">{p.desc}</p>
              
              <button className="btn-wood w-full">
                <span>MEHR ERFAHREN</span>
                <span className="arrow">&gt;</span>
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 font-cinzel text-parchment/40 text-lg md:text-2xl tracking-[0.3em] md:tracking-[0.6em] text-shadow-dark font-bold px-4 break-words">
          XXV ᛏᛒᚱᛗᚱᚾ ᛒᚠᚱᚷᛏ
        </div>
      </div>
    </section>
  );
};

const RuneDividerSection = () => (
  <div className="bg-dirt-texture pb-16 pt-8 flex justify-center items-center overflow-hidden">
    <div className="font-cinzel text-parchment/40 text-lg md:text-4xl tracking-[0.3em] md:tracking-[0.6em] text-shadow-dark font-bold text-center px-4 break-words">
      ᛉ ᛟ ᛈ ᚱ ᛗ ᚷ ᚾ ᛒ ᚠ ᚱ ᚷ ᛏ
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-dirt-texture relative border-t border-parchment/10">
      <div className="container-1200">
        <div className="text-center mb-16 relative">
          <div className="flex items-center justify-center mb-4 relative z-10">
            <h2 className="font-cinzel text-3xl md:text-6xl font-bold text-parchment text-shadow-dark px-8 bg-dirt-texture">
              FÄHIGKEITEN
            </h2>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl text-parchment/60 z-0 hidden md:block mt-[-10px]">
            <SwordDivider className="w-full h-8 drop-shadow-lg" />
          </div>
          <p className="font-cinzel text-parchment-dark tracking-widest uppercase text-xs md:text-sm font-bold relative z-10">
            WAS ICH DRAUF HABE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Block 1: Web Design */}
          <div className="card-parchment !p-0">
            <CornerOrnament className="absolute top-4 left-4 w-6 h-6 text-ink/30 z-20" />
            <CornerOrnament className="absolute bottom-4 right-4 w-6 h-6 text-ink/30 z-20 rotate-180" />
            <div className="relative z-10 p-6">
              <div className="flex items-center justify-between border-b border-ink/20 pb-4 mb-4">
                <div>
                  <h3 className="font-cinzel text-2xl font-bold text-ink">WEB DESIGN</h3>
                  <p className="font-cinzel text-[10px] text-ink/80 tracking-widest mt-1 font-bold">DESIGN & KONZEPT</p>
                </div>
                <div className="text-ink opacity-80">
                  <PaintBucket size={28} strokeWidth={1.5} />
                </div>
              </div>
              <ul className="space-y-3 font-body text-ink text-lg font-medium">
                <li className="flex items-start space-x-3">
                  <span className="text-ink font-bold mt-1">✓</span>
                  <span>Kreative Designs, Usability & UX</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-ink font-bold mt-1">✓</span>
                  <span>SEO, Performance & Struktur</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Block 2: Tech Stack */}
          <div className="card-parchment !p-0">
            <CornerOrnament className="absolute top-4 left-4 w-6 h-6 text-ink/30 z-20" />
            <CornerOrnament className="absolute bottom-4 right-4 w-6 h-6 text-ink/30 z-20 rotate-180" />
            <div className="relative z-10 p-6">
              <div className="flex items-center justify-center space-x-1 md:space-x-3 border-b border-ink/20 pb-4 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-wood-texture shadow-inner border border-ink/40" style={{ filter: 'url(#torn-edge-small)' }}></div>
                  <span className="relative z-10 text-parchment px-2 md:px-3 py-1 font-cinzel font-bold text-sm md:text-xl block">HTML</span>
                </div>
                <SquiggleIcon className="w-6 h-6 md:w-8 md:h-8 text-ink opacity-70" />
                <div className="relative">
                  <div className="absolute inset-0 bg-wood-texture shadow-inner border border-ink/40" style={{ filter: 'url(#torn-edge-small)' }}></div>
                  <span className="relative z-10 text-parchment px-2 md:px-3 py-1 font-cinzel font-bold text-sm md:text-xl block">CSS</span>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-wood-texture shadow-inner border border-ink/40" style={{ filter: 'url(#torn-edge-small)' }}></div>
                  <span className="relative z-10 text-parchment px-2 md:px-3 py-1 font-cinzel font-bold text-sm md:text-xl block">JS</span>
                </div>
              </div>
              <ul className="space-y-3 font-body text-ink text-lg font-medium">
                <li className="flex items-start space-x-3">
                  <span className="text-ink font-bold mt-1">✓</span>
                  <span>WordPress, PHP, & MySQL</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-ink font-bold mt-1">✓</span>
                  <span>PHP & Datenbanken</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Block 3: Programmieren */}
          <div className="card-parchment !p-0">
            <CornerOrnament className="absolute top-4 left-4 w-6 h-6 text-ink/30 z-20" />
            <CornerOrnament className="absolute bottom-4 right-4 w-6 h-6 text-ink/30 z-20 rotate-180" />
            <div className="relative z-10 p-6">
              <div className="flex items-center justify-between border-b border-ink/20 pb-4 mb-4">
                <div>
                  <h3 className="font-cinzel text-2xl font-bold text-ink">PROGRAMMIEREN</h3>
                  <p className="font-cinzel text-[10px] text-ink/80 tracking-widest mt-1 font-bold">ENTWICKLUNG</p>
                </div>
                <div className="text-ink opacity-80">
                  <DiamondOverlap className="w-8 h-8" />
                </div>
              </div>
              <ul className="space-y-3 font-body text-ink text-lg font-medium">
                <li className="flex items-start space-x-3">
                  <span className="text-ink font-bold mt-1">✓</span>
                  <span>Figma, Photoshop & mehr</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-ink font-bold mt-1">✓</span>
                  <span>SEO, Performance & Sicherheit</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 md:py-32 relative z-10 border-t border-parchment/10 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1478827536114-da961b7f86d2?q=80&w=2000&auto=format&fit=crop" 
        alt="Dark forest landscape" 
        className="w-full h-full object-cover object-center opacity-40"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dirt via-dirt/80 to-dirt/40"></div>
    </div>
    
    <div className="container-1200 text-center relative z-10">
      <div className="flex items-center justify-center space-x-2 md:space-x-4 mb-4">
        <div className="h-px w-8 md:w-32 bg-parchment/30"></div>
        <div className="w-2 h-2 rotate-45 bg-parchment/60"></div>
        <div className="h-px w-4 md:w-8 bg-parchment/30"></div>
        <h2 className="font-cinzel text-4xl md:text-6xl font-bold text-parchment text-shadow-dark px-2 md:px-4">KONTAKT</h2>
        <div className="h-px w-4 md:w-8 bg-parchment/30"></div>
        <div className="w-2 h-2 rotate-45 bg-parchment/60"></div>
        <div className="h-px w-8 md:w-32 bg-parchment/30"></div>
      </div>
      <p className="font-cinzel text-parchment-dark tracking-widest uppercase text-lg md:text-xl font-bold mb-12">
        Lass uns ein Projekt schmieden!
      </p>
      
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 mb-16 font-body text-parchment text-xl">
        <div className="flex items-center space-x-3">
          <span className="text-gold-dark">✉</span>
          <span>lars.moelleken@mail.de</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-gold-dark">✆</span>
          <span>0176 12345678</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-gold-dark">⚲</span>
          <span>Norddeutschland</span>
        </div>
      </div>
      
      <div className="flex items-center justify-center space-x-6 mb-16">
        <span className="font-cinzel text-parchment font-bold tracking-widest">Folge mir:</span>
        <a href="#" className="text-parchment hover:text-gold transition-colors"><Github size={28} /></a>
        <a href="#" className="text-parchment hover:text-gold transition-colors"><Linkedin size={28} /></a>
        <a href="#" className="text-parchment hover:text-gold transition-colors"><Globe size={28} /></a>
      </div>
    </div>
    
    <div className="border-t border-parchment/10 pt-8 text-center relative z-10">
      <p className="font-body text-parchment-dark text-base">
        © 2026 Lars Moelleken • Germanische Webkunst • Handgemacht & frei
      </p>
    </div>
  </section>
);

const Testimonial = () => (
  <section className="py-24 md:py-32 bg-dirt-texture relative z-10">
    <div className="container-1200 relative">
      <div className="card-parchment !p-6 md:!p-12">
        <div className="relative z-10 text-center">
          <div className="relative inline-block mb-6">
            <span className="absolute -left-4 md:-left-8 -top-4 font-cinzel text-4xl md:text-6xl text-ink/30">"</span>
            <p className="font-body text-ink text-xl md:text-3xl italic leading-relaxed px-4 md:px-8 font-medium">
              „Lars hat unsere Werte verstanden und in eine Website verwandelt, die so echt ist wie wir selbst. Klare Empfehlung!“
            </p>
            <span className="absolute -right-4 md:-right-8 -bottom-4 md:-bottom-8 font-cinzel text-4xl md:text-6xl text-ink/30">"</span>
          </div>
          
          <div className="flex flex-col items-center justify-center mt-8 space-y-4">
            <p className="font-cinzel text-ink/80 tracking-widest text-sm md:text-lg font-bold">
              – Familie Brandt, Waldbauern
            </p>
            <div className="flex items-center space-x-2 text-gold-dark text-xl md:text-2xl drop-shadow-sm">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>
        </div>
        
        {/* Wax Seal */}
        <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 drop-shadow-xl z-20">
          <WaxSeal className="w-16 h-16 md:w-24 md:h-24" />
        </div>
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="bg-dirt selection:bg-gold selection:text-dirt overflow-x-hidden">
      <TornEdgeFilter />
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Testimonial />
      <Contact />
    </div>
  );
}



