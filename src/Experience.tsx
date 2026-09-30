import {useCallback, useEffect, useMemo, useRef, useState, type ReactNode} from 'react';
import {AnimatePresence, motion, useReducedMotion, useScroll, useSpring} from 'motion/react';
import {Command, Flame, Volume2, VolumeX} from 'lucide-react';

export const SECTIONS = [
  {id: 'about', label: 'Über mich', hint: 'Wer ist voku?'},
  {id: 'experience', label: 'Berufsweg', hint: 'Von Linux-Betrieb zur Architektur'},
  {id: 'projects', label: 'Projekte', hint: 'Open Source & Agent Engineering'},
  {id: 'skills', label: 'Fähigkeiten', hint: 'Stack & Schwerpunkte'},
  {id: 'education', label: 'Ausbildung', hint: 'Fundament'},
  {id: 'contact', label: 'Kontakt', hint: 'Lass uns sprechen'},
] as const;

const LINKS = [
  {label: 'GitHub · voku', href: 'https://github.com/voku'},
  {label: 'LinkedIn', href: 'https://www.linkedin.com/in/larsmoelleken/'},
  {label: 'Blog · suckup.de', href: 'https://suckup.de/'},
  {label: 'E-Mail schreiben', href: 'mailto:lars@moelleken.org'},
] as const;

const useCoarsePointer = () =>
  useMemo(() => typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches, []);

/** Smooth scroll that uses the View Transitions API when available. */
export const goTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block: 'start'});
  history.replaceState(null, '', `#${id}`);
};

/* ------------------------------------------------------------------ */
/* Ember particles: a canvas of rising sparks that react to the cursor */
/* ------------------------------------------------------------------ */
export const Embers = ({className = '', count = 70}: Readonly<{className?: string; count?: number}>) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || reduce) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;
    const mouse = {x: -999, y: -999};
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const spawn = (initial: boolean) => ({
      x: Math.random() * w,
      y: initial ? Math.random() * h : h + 10,
      r: 1 + Math.random() * 1.6,
      vy: 0.25 + Math.random() * 0.9,
      sway: Math.random() * Math.PI * 2,
      life: Math.random(),
    });
    resize();
    const parts = Array.from({length: count}, () => spawn(true));

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    io.observe(canvas);
    window.addEventListener('pointermove', onMove, {passive: true});
    window.addEventListener('resize', resize);

    const tick = (t: number) => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        p.y -= p.vy;
        p.x += Math.sin(t / 900 + p.sway) * 0.4;
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 130 * 130) {
          const f = (1 - Math.sqrt(d2) / 130) * 2.2;
          p.x += (dx / (Math.sqrt(d2) + 1)) * f;
          p.y += (dy / (Math.sqrt(d2) + 1)) * f;
        }
        const fade = Math.min(1, p.y / (h * 0.5));
        const flicker = 0.6 + 0.4 * Math.sin(t / 160 + p.sway * 7);
        const a = Math.max(0, fade) * flicker;
        ctx.fillStyle = `rgba(255,200,120,${a * 0.85})`;
        ctx.fillRect(p.x, p.y, p.r, p.r);
        if (p.y < -10) parts[i] = spawn(false);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('resize', resize);
    };
  }, [count, reduce]);

  return <canvas ref={ref} aria-hidden="true" className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} />;
};

/* ------------------------------------------------------------------ */
/* Scroll progress bar + rune-marked section rail                      */
/* ------------------------------------------------------------------ */
export const ScrollProgress = () => {
  const {scrollYProgress} = useScroll();
  const scaleX = useSpring(scrollYProgress, {stiffness: 120, damping: 28, mass: 0.3});
  return <motion.div aria-hidden="true" className="scroll-progress" style={{scaleX}} />;
};

export const useActiveSection = () => {
  const [active, setActive] = useState<string>('');
  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      {rootMargin: '-45% 0px -50% 0px'},
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
};

export const SectionRail = ({active}: Readonly<{active: string}>) => (
  <nav aria-label="Abschnitte" className="section-rail">
    {SECTIONS.map((s) => (
      <button key={s.id} type="button" onClick={() => goTo(s.id)} data-active={active === s.id} aria-label={s.label} className="rail-dot">
        <span className="rail-label">{s.label}</span>
      </button>
    ))}
  </nav>
);

/* ------------------------------------------------------------------ */
/* Reveal + Tilt                                                       */
/* ------------------------------------------------------------------ */
export const Reveal = ({children, delay = 0, className = ''}: Readonly<{children: ReactNode; delay?: number; className?: string}>) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : {opacity: 0, y: 40, filter: 'blur(6px)'}}
      whileInView={{opacity: 1, y: 0, filter: 'blur(0px)'}}
      viewport={{once: true, margin: '-80px'}}
      transition={{duration: 0.8, delay, ease: [0.22, 1, 0.36, 1]}}
    >
      {children}
    </motion.div>
  );
};

/** 3D tilt with a moving specular glare — pure CSS variables, no re-render. */
export const Tilt = ({children, className = ''}: Readonly<{children: ReactNode; className?: string}>) => {
  const ref = useRef<HTMLDivElement>(null);
  const coarse = useCoarsePointer();
  const onMove = useCallback((e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty('--rx', `${(0.5 - py) * 9}deg`);
    el.style.setProperty('--ry', `${(px - 0.5) * 11}deg`);
    el.style.setProperty('--gx', `${px * 100}%`);
    el.style.setProperty('--gy', `${py * 100}%`);
  }, []);
  const reset = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  }, []);
  return (
    <div className={`tilt-wrap ${className}`} onPointerMove={coarse ? undefined : onMove} onPointerLeave={reset}>
      <div ref={ref} className="tilt">
        {children}
        <span className="tilt-glare" aria-hidden="true" />
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Ambient soundscape (Web Audio, synthesized, opt-in)                 */
/* ------------------------------------------------------------------ */
export const SoundToggle = () => {
  const [on, setOn] = useState(false);
  const audio = useRef<{ctx: AudioContext; gain: GainNode} | null>(null);

  const start = () => {
    const ctx = new AudioContext();
    const gain = ctx.createGain();
    gain.gain.value = 0;
    // Crackling fire: filtered noise with random amplitude bursts.
    const len = ctx.sampleRate * 2;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02; // brown noise = wind / low roar
      d[i] = last * 3.5 + (Math.random() > 0.9993 ? (Math.random() - 0.5) * 1.6 : 0); // sparse crackles
    }
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.loop = true;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 1400;
    src.connect(lp).connect(gain).connect(ctx.destination);
    src.start();
    gain.gain.linearRampToValueAtTime(0.35, ctx.currentTime + 2);
    audio.current = {ctx, gain};
  };

  const toggle = async () => {
    if (!on) {
      if (!audio.current) start();
      await audio.current?.ctx.resume();
      audio.current?.gain.gain.linearRampToValueAtTime(0.35, audio.current.ctx.currentTime + 1);
    } else if (audio.current) {
      audio.current.gain.gain.linearRampToValueAtTime(0, audio.current.ctx.currentTime + 0.6);
    }
    setOn(!on);
  };

  useEffect(() => () => void audio.current?.ctx.close(), []);

  return (
    <button type="button" onClick={toggle} aria-pressed={on} aria-label={on ? 'Lagerfeuer-Sound aus' : 'Lagerfeuer-Sound an'} title="Lagerfeuer-Atmosphäre" className="fab">
      {on ? <Volume2 size={18} /> : <VolumeX size={18} />}
      <Flame size={14} className={on ? 'text-gold' : 'opacity-50'} />
    </button>
  );
};

/* ------------------------------------------------------------------ */
/* Command palette (⌘K / Ctrl+K)                                       */
/* ------------------------------------------------------------------ */
export const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const [idx, setIdx] = useState(0);

  const items = useMemo(
    () => [
      ...SECTIONS.map((s) => ({key: s.id, label: s.label, hint: s.hint, run: () => goTo(s.id)})),
      ...LINKS.map((l) => ({key: l.href, label: l.label, hint: 'extern', run: () => window.open(l.href, l.href.startsWith('mailto') ? '_self' : '_blank', 'noreferrer')})),
    ],
    [],
  );
  const results = items.filter((i) => `${i.label} ${i.hint}`.toLowerCase().includes(q.toLowerCase()));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  useEffect(() => {
    if (open) {
      setQ('');
      setIdx(0);
    }
  }, [open]);

  const choose = (i: number) => {
    results[i]?.run();
    setOpen(false);
  };

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="fab" aria-label="Schnellnavigation öffnen (Strg+K)" title="Strg/⌘ + K">
        <Command size={18} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div className="palette-backdrop" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} onClick={() => setOpen(false)}>
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Schnellnavigation"
              className="palette"
              initial={{y: -20, scale: 0.97, opacity: 0}}
              animate={{y: 0, scale: 1, opacity: 1}}
              exit={{y: -10, scale: 0.98, opacity: 0}}
              onClick={(e) => e.stopPropagation()}
            >
              <input
                autoFocus
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setIdx(0);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setIdx((i) => Math.min(i + 1, results.length - 1));
                  } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setIdx((i) => Math.max(i - 1, 0));
                  } else if (e.key === 'Enter') choose(idx);
                }}
                placeholder="Wohin soll die Reise gehen?"
                className="palette-input"
              />
              <ul>
                {results.map((r, i) => (
                  <li key={r.key}>
                    <button type="button" data-active={i === idx} onMouseEnter={() => setIdx(i)} onClick={() => choose(i)} className="palette-item">
                      <span>{r.label}</span>
                      <span className="opacity-60">{r.hint}</span>
                    </button>
                  </li>
                ))}
                {results.length === 0 && <li className="p-4 text-center opacity-60">Nichts gefunden.</li>}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ------------------------------------------------------------------ */
/* Intro curtain: fire-lit title card that lifts away                  */
/* ------------------------------------------------------------------ */
export const Intro = () => {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(() => {
    try {
      return !reduce && !sessionStorage.getItem('intro-seen');
    } catch {
      return !reduce;
    }
  });
  useEffect(() => {
    if (!show) return;
    document.documentElement.style.overflow = 'hidden';
    const t = setTimeout(() => {
      setShow(false);
      try {
        sessionStorage.setItem('intro-seen', '1');
      } catch {
        /* storage unavailable */
      }
    }, 2200);
    return () => {
      clearTimeout(t);
      document.documentElement.style.overflow = '';
    };
  }, [show]);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="intro"
          exit={{clipPath: 'inset(0 0 100% 0)'}}
          initial={{clipPath: 'inset(0 0 0% 0)'}}
          transition={{duration: 1, ease: [0.76, 0, 0.24, 1]}}
          onClick={() => setShow(false)}
          aria-hidden="true"
        >
          <Embers count={50} />
          <motion.p initial={{opacity: 0, letterSpacing: '0.6em'}} animate={{opacity: 1, letterSpacing: '0.3em'}} transition={{duration: 1.6}} className="font-runic text-parchment/70 text-2xl md:text-4xl">
            ᛚᚨᚱᛊ ᛗᛟᛈᛚᛚᛖᚲᛖᚾ
          </motion.p>
          <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.6, duration: 1}} className="mt-4 font-cinzel text-xs tracking-[0.4em] text-gold-dark">
            BETRITT DAS DORF
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
