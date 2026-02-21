import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Copy, Mail, Github, Linkedin, Globe, Code2, ExternalLink, Terminal, Database, Cpu, Star, Zap, Sparkles, ChevronRight } from 'lucide-react';

const App = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { setLoaded(true); }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('official.khushwant.1@gmail.com');
    alert('Email copied!');
  };

  const projects = [
    {
      id: 1, title: "The Doctor's Automation", category: "Operational Efficiency",
      metric: "Zero Missed Patients",
      description: "The clinic was losing ~30% of appointments because the front desk couldn't handle the call volume. I built a digital receptionist that handles scheduling, rescheduling, and SMS reminders automatically. The phone stopped ringing, but the calendar stayed full.",
      stack: ["Python", "Flask", "PostgreSQL", "Twilio"], year: "2025",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      link: "https://cleo.help/login", status: "LIVE", color: "#84cc16",
    },
    {
      id: 2, title: "Mountain Revenue Engine", category: "Direct Sales Platform",
      metric: "\u20b912L/Year Recovered",
      description: "Hotels in the Himalayas were bleeding 20% revenue to OTA commissions. I built a direct-booking engine that handles payments, syncs inventory in real-time, and keeps 100% of the profit with the owner.",
      stack: ["React", "Node.js", "Stripe Connect", "MongoDB"], year: "2024",
      image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      link: "https://khushwant.netlify.app/#", status: "IN DEV", color: "#f97316",
    },
    {
      id: 3, title: "Internship AI Matcher", category: "Recommendation System",
      metric: "500+ Perfect Matches",
      description: "Students were drowning in generic job listings. I built an engine that reads profiles using cosine similarity algorithms, connecting candidates to roles based on skills, not keywords. It's Tinder for jobs, but it works.",
      stack: ["Python", "Scikit-Learn", "FastAPI", "React"], year: "2024",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      link: "https://intern-recommend.netlify.app/", status: "LIVE", color: "#a855f7",
    }
  ];

  const tickerItems = "FULL STACK DEV \u2022 PROBLEM SOLVER \u2022 REVENUE ENGINEER \u2022 REACT \u2022 PYTHON \u2022 NODE.JS \u2022 MONGODB \u2022 FLASK \u2022 ";

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        * { font-family: 'Space Grotesk', sans-serif; }
        .font-mono { font-family: 'Space Mono', monospace !important; }

        .neo-press { transition: all 0.15s ease; }
        .neo-press:hover { transform: translate(4px, 4px); }
        .neo-card-hover { transition: all 0.2s ease; }
        .neo-card-hover:hover { transform: translate(-3px, -3px); }

        @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 18s linear infinite; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .anim-up { animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .anim-in { animation: fadeIn 0.8s ease forwards; opacity: 0; }
        .d1 { animation-delay: 0.1s; } .d2 { animation-delay: 0.2s; } .d3 { animation-delay: 0.3s; }
        .d4 { animation-delay: 0.4s; } .d5 { animation-delay: 0.5s; } .d6 { animation-delay: 0.6s; }
        .d7 { animation-delay: 0.7s; }

        ::selection { background: #84cc16; color: #0a0a0a; }
        .glitch-hover:hover { text-shadow: 3px 3px 0 #f97316, -3px -3px 0 #a855f7; }

        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #84cc16; border: 2px solid #0a0a0a; }
        ::-webkit-scrollbar-thumb:hover { background: #f97316; }
      `}</style>

      {/* ========== TOP BAR — full width, left-aligned brand ========== */}
      <nav className={`fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b-4 border-[#84cc16] ${loaded ? 'anim-up' : 'opacity-0'}`}>
        <div className="flex items-center justify-between px-4 md:px-8 lg:px-12 py-3">
          {/* Left — brand */}
          <div className="font-mono text-sm md:text-base font-bold flex items-center gap-2">
            <div className="w-3 h-3 bg-[#84cc16] rotate-45"></div>
            <span className="text-[#84cc16] hidden sm:inline">KHUSHWANT SINGH</span>
            <span className="text-[#84cc16] sm:hidden">KS</span>
          </div>
          {/* Right — links */}
          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden sm:flex gap-4 md:gap-6 text-xs font-mono font-bold uppercase tracking-wider">
              <a href="#work" className="hover:text-[#84cc16] transition-colors">Work</a>
              <a href="#expertise" className="hover:text-[#f97316] transition-colors">Skills</a>
              <a href="#contact" className="hover:text-[#a855f7] transition-colors">Contact</a>
            </div>
            <a href="mailto:official.khushwant.1@gmail.com"
               className="bg-[#84cc16] text-black px-4 md:px-5 py-2 text-[10px] md:text-xs font-mono font-bold uppercase border-3 border-black hover:bg-[#f97316] transition-colors neo-press"
               style={{ boxShadow: '3px 3px 0 #000' }}>
              HIRE ME
            </a>
          </div>
        </div>
      </nav>

      {/* ========== HERO — asymmetric, full-width ========== */}
      <header className="relative pt-20 md:pt-24 min-h-screen">
        {/* Top decorative border */}
        <div className="absolute top-16 left-0 w-full h-[4px] bg-[#84cc16]/20"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-6rem)]">

          {/* LEFT COLUMN — text, takes 7 cols on desktop, full-bleed left edge */}
          <div className="lg:col-span-7 flex flex-col justify-center px-5 md:px-10 lg:px-16 xl:px-20 py-12 md:py-16 lg:py-0 relative">
            
            {/* Vertical accent line on the far left */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-1 bg-[#84cc16]"></div>
            
            {/* Status badge — left aligned */}
            <div className={`inline-flex self-start items-center gap-2 mb-6 px-4 py-2 bg-[#1a1a1a] border-4 border-[#84cc16] font-mono text-[10px] md:text-xs font-bold text-[#84cc16] uppercase tracking-widest ${loaded ? 'anim-up' : ''}`}
                 style={{ boxShadow: '4px 4px 0 #84cc16' }}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full bg-[#84cc16] opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 bg-[#84cc16]"></span>
              </span>
              AVAILABLE WINTER 2026
            </div>

            {/* Heading — massive, left aligned, tight */}
            <h1 className={`text-[3.2rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8.5rem] font-black leading-[0.85] tracking-tighter mb-8 ${loaded ? 'anim-up d1' : ''}`}>
              <span className="block text-white" style={{ WebkitTextStroke: '2px #84cc16' }}>I SOLVE</span>
              <span className="block text-[#f97316]">EXPENSIVE</span>
              <span className="block" style={{ WebkitTextStroke: '2px #a855f7', color: 'transparent' }}>PROBLEMS.</span>
            </h1>

            {/* Description — left, with offset border */}
            <div className={`max-w-xl mb-8 ${loaded ? 'anim-up d2' : ''}`}>
              <p className="text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed border-l-4 border-[#84cc16] pl-4 md:pl-6">
                Full Stack Developer. I don't write code — I build
                <span className="text-[#84cc16] font-bold"> revenue-generating engines</span> for businesses that can't afford to fail.
              </p>
            </div>

            {/* CTA row — left aligned, stacked on mobile */}
            <div className={`flex flex-wrap gap-3 md:gap-4 items-center mb-8 ${loaded ? 'anim-up d3' : ''}`}>
              <a href="#work" className="group flex items-center gap-3 bg-[#84cc16] text-black px-5 md:px-7 py-3 md:py-3.5 font-mono font-bold text-xs md:text-sm uppercase tracking-wider border-4 border-black neo-press"
                 style={{ boxShadow: '5px 5px 0 #000' }}>
                SEE MY WORK <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://github.com/TooKhush/" className="w-11 h-11 md:w-12 md:h-12 bg-[#1a1a1a] border-4 border-[#f97316] flex items-center justify-center hover:bg-[#f97316] hover:text-black transition-all neo-press" style={{ boxShadow: '3px 3px 0 #f97316' }}>
                <Github className="w-4 h-4 md:w-5 md:h-5"/>
              </a>
              <a href="https://www.linkedin.com/in/khushwant-singh-developer/" className="w-11 h-11 md:w-12 md:h-12 bg-[#1a1a1a] border-4 border-[#a855f7] flex items-center justify-center hover:bg-[#a855f7] hover:text-black transition-all neo-press" style={{ boxShadow: '3px 3px 0 #a855f7' }}>
                <Linkedin className="w-4 h-4 md:w-5 md:h-5"/>
              </a>
              <a href="mailto:official.khushwant.1@gmail.com" className="w-11 h-11 md:w-12 md:h-12 bg-[#1a1a1a] border-4 border-[#84cc16] flex items-center justify-center hover:bg-[#84cc16] hover:text-black transition-all neo-press" style={{ boxShadow: '3px 3px 0 #84cc16' }}>
                <Mail className="w-4 h-4 md:w-5 md:h-5"/>
              </a>
            </div>

            {/* Inline stats — horizontal row, left aligned */}
            <div className={`flex flex-wrap gap-6 md:gap-10 font-mono text-xs uppercase tracking-wider ${loaded ? 'anim-up d4' : ''}`}>
              <div><span className="text-2xl md:text-3xl font-black text-[#84cc16] block">500+</span><span className="text-gray-500">Crowd Managed</span></div>
              <div><span className="text-2xl md:text-3xl font-black text-[#f97316] block">100%</span><span className="text-gray-500">Client Retention</span></div>
              <div><span className="text-2xl md:text-3xl font-black text-[#a855f7] block">12hr</span><span className="text-gray-500">Response Time</span></div>
            </div>
          </div>

          {/* RIGHT COLUMN — photo + stickers, 5 cols, edge-to-edge right */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end bg-[#111] border-l-0 lg:border-l-4 border-[#84cc16]">
            
            {/* Dot pattern background for right column */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'radial-gradient(circle, #84cc16 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>

            <div className={`relative p-6 md:p-10 lg:p-12 ${loaded ? 'anim-up d2' : ''}`}>
              {/* Photo — offset, not centered */}
              <div className="relative">
                <div className="w-56 h-64 sm:w-64 sm:h-72 md:w-72 md:h-80 lg:w-80 lg:h-[22rem] xl:w-[22rem] xl:h-[26rem] border-4 border-[#84cc16] bg-[#1a1a1a] overflow-hidden"
                     style={{ boxShadow: '10px 10px 0 #84cc16' }}>
                  <img src="/my-photo.png" alt="Khushwant Singh"
                       className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  {/* Corner brackets */}
                  <div className="absolute top-2 left-2 w-5 h-5 border-t-4 border-l-4 border-[#f97316]"></div>
                  <div className="absolute top-2 right-2 w-5 h-5 border-t-4 border-r-4 border-[#f97316]"></div>
                  <div className="absolute bottom-2 left-2 w-5 h-5 border-b-4 border-l-4 border-[#f97316]"></div>
                  <div className="absolute bottom-2 right-2 w-5 h-5 border-b-4 border-r-4 border-[#f97316]"></div>
                </div>

                {/* Sticker — DEV label, offset bottom-right */}
                <div className="absolute -bottom-4 -right-4 bg-[#f97316] text-black font-mono font-bold text-xs px-4 py-2 border-4 border-black z-10"
                     style={{ boxShadow: '3px 3px 0 #000', transform: 'rotate(3deg)' }}>
                  <Star className="w-3 h-3 inline mr-1" />DEVELOPER
                </div>

                {/* Sticker — top-left, overlapping */}
                <div className="absolute -top-5 -left-5 bg-[#a855f7] text-black font-mono font-bold text-[10px] px-3 py-1.5 border-4 border-black z-10"
                     style={{ boxShadow: '3px 3px 0 #000', transform: 'rotate(-4deg)' }}>
                  WINTER 2026
                </div>

                {/* Sticker — right side */}
                <div className="absolute top-1/4 -right-6 bg-[#84cc16] text-black font-mono font-bold text-[10px] px-2 py-1.5 border-3 border-black z-10 hidden xl:block"
                     style={{ boxShadow: '2px 2px 0 #000', transform: 'rotate(90deg)' }}>
                  <Zap className="w-3 h-3 inline" /> OPEN TO WORK
                </div>
              </div>

              {/* Name card — offset left under photo */}
              <div className="mt-6 -ml-4 md:-ml-8">
                <div className="inline-block bg-[#0a0a0a] border-4 border-white px-5 md:px-6 py-2.5 md:py-3"
                     style={{ boxShadow: '5px 5px 0 #a855f7' }}>
                  <h2 className="text-lg md:text-xl font-black text-white tracking-tight">KHUSHWANT SINGH</h2>
                  <p className="text-[10px] md:text-xs text-[#84cc16] font-mono font-bold">// FULL_STACK_DEV</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ========== MARQUEE — full bleed ========== */}
      <div className="border-y-4 border-[#84cc16] bg-[#84cc16] py-2.5 md:py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-black font-mono font-bold text-xs md:text-sm tracking-widest mx-4">{tickerItems}</span>
          ))}
        </div>
      </div>

      {/* ========== PROJECTS — full width, stacked cards, asymmetric ========== */}
      <section id="work" className="py-12 md:py-20">
        
        {/* Section header — left bleed */}
        <div className="px-5 md:px-10 lg:px-16 xl:px-20 mb-10 md:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] md:text-xs text-[#f97316] font-bold uppercase tracking-widest mb-2">// Selected Work</div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter glitch-hover">
              CASE STUDIES<span className="text-[#f97316]">.</span>
            </h2>
          </div>
          <div className="bg-[#a855f7] text-black font-mono font-bold text-[10px] px-3 py-1.5 border-4 border-black self-start md:self-auto"
               style={{ boxShadow: '3px 3px 0 #000', transform: 'rotate(2deg)' }}>
            <Sparkles className="w-3 h-3 inline mr-1" />REAL OUTCOMES
          </div>
        </div>

        {/* Project cards — each full-width, alternating layout */}
        <div className="flex flex-col gap-0">
          {projects.map((project, index) => (
            <div key={project.id}
                 className={`border-t-4 group cursor-pointer transition-colors duration-300 hover:bg-[#111]`}
                 style={{ borderColor: project.color }}
                 onClick={() => setActiveProject(index)}>
              
              <div className={`grid grid-cols-1 lg:grid-cols-12 ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                
                {/* Image side — 5 cols */}
                <div className={`lg:col-span-5 relative overflow-hidden aspect-[16/10] lg:aspect-auto lg:min-h-[400px] ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent opacity-60 z-10"></div>
                  <img src={project.image} alt={project.title}
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  {/* Number overlay */}
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 font-mono font-bold text-6xl md:text-8xl z-20 opacity-20"
                       style={{ color: project.color, WebkitTextStroke: `2px ${project.color}` }}>
                    0{project.id}
                  </div>
                  {/* Status badge */}
                  <div className={`absolute top-4 right-4 md:top-6 md:right-6 z-20 px-3 py-1 border-3 border-black font-mono text-[10px] font-bold ${project.status === 'LIVE' ? 'bg-[#84cc16]' : 'bg-[#f97316]'} text-black`}
                       style={{ boxShadow: '2px 2px 0 #000' }}>
                    {project.status}
                  </div>
                </div>

                {/* Content side — 7 cols */}
                <div className={`lg:col-span-7 px-5 md:px-10 lg:px-14 xl:px-16 py-8 md:py-10 lg:py-14 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  
                  <div className="flex items-start justify-between gap-4 mb-3 md:mb-4">
                    <div className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest px-2 py-1 border-2 border-black"
                         style={{ backgroundColor: project.color, color: '#000' }}>
                      {project.category}
                    </div>
                    <span className="font-mono text-xs md:text-sm font-bold" style={{ color: project.color }}>{project.year}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3 md:mb-4 group-hover:pl-2 transition-all">
                    {project.title}
                  </h3>

                  <div className="font-mono text-sm md:text-base font-bold mb-4 md:mb-5" style={{ color: project.color }}>
                    {project.metric}
                  </div>

                  <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-5 md:mb-6 max-w-2xl">
                    {project.description}
                  </p>

                  {/* Tech + link row */}
                  <div className="flex flex-wrap items-center gap-2 md:gap-3">
                    {project.stack.map((tech) => (
                      <span key={tech} className="text-[10px] md:text-xs font-mono font-bold text-black px-2 md:px-3 py-1 border-2 border-black"
                            style={{ backgroundColor: project.color }}>
                        {tech}
                      </span>
                    ))}
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                       className="ml-auto flex items-center gap-1.5 text-xs font-mono font-bold px-4 py-2 border-4 border-black text-black neo-press"
                       style={{ backgroundColor: project.color, boxShadow: '3px 3px 0 #000' }}>
                      VIEW <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Bottom border */}
          <div className="h-1 bg-[#a855f7]"></div>
        </div>
      </section>

      {/* ========== ORANGE MARQUEE ========== */}
      <div className="border-y-4 border-[#f97316] bg-[#f97316] py-2.5 md:py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex" style={{ animationDirection: 'reverse', animationDuration: '22s' }}>
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-black font-mono font-bold text-xs md:text-sm tracking-widest mx-4">
              BUILD FAST \u2022 SHIP FASTER \u2022 BREAK NOTHING \u2022 SCALE EVERYTHING \u2022 AUTOMATE THE BORING \u2022{' '}
            </span>
          ))}
        </div>
      </div>

      {/* ========== EXPERTISE — bento grid, varied sizes, full width ========== */}
      <section id="expertise" className="py-12 md:py-20">
        
        <div className="px-5 md:px-10 lg:px-16 xl:px-20 mb-10 md:mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8">
              <div className="font-mono text-[10px] md:text-xs text-[#a855f7] font-bold uppercase tracking-widest mb-2">// What I Bring</div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter glitch-hover">
                THE TOOLKIT<span className="text-[#a855f7]">.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="text-sm md:text-base text-gray-500 font-medium max-w-md lg:ml-auto">
                Tools chosen for <span className="text-[#84cc16] font-bold">speed</span>, <span className="text-[#f97316] font-bold">scale</span>, and <span className="text-[#a855f7] font-bold">stability</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Bento grid — varied card sizes */}
        <div className="px-5 md:px-10 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-5">
            
            {/* Card 1 — large, spans 3 cols */}
            <div className="sm:col-span-2 lg:col-span-3 bg-[#1a1a1a] border-4 border-[#84cc16] p-6 md:p-8 group neo-card-hover relative overflow-hidden"
                 style={{ boxShadow: '6px 6px 0 #84cc16' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#84cc16]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <Code2 className="w-10 h-10 md:w-12 md:h-12 text-[#84cc16] mb-5 md:mb-6 group-hover:rotate-12 transition-transform" />
              <h3 className="text-xl md:text-2xl font-black text-white mb-2">Frontend Logic</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">React, Tailwind, Framer Motion. I build interfaces that convert visitors into paying customers.</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Tailwind', 'Framer Motion', 'Next.js'].map(t => (
                  <span key={t} className="text-[10px] font-mono font-bold text-[#84cc16] border-2 border-[#84cc16] px-2 py-0.5">{t}</span>
                ))}
              </div>
            </div>

            {/* Card 2 — medium, spans 3 cols */}
            <div className="sm:col-span-2 lg:col-span-3 bg-[#1a1a1a] border-4 border-[#f97316] p-6 md:p-8 group neo-card-hover relative overflow-hidden"
                 style={{ boxShadow: '6px 6px 0 #f97316' }}>
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-[#f97316]/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              <Terminal className="w-10 h-10 md:w-12 md:h-12 text-[#f97316] mb-5 md:mb-6 group-hover:rotate-12 transition-transform" />
              <h3 className="text-xl md:text-2xl font-black text-white mb-2">Backend Systems</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">Node.js, Python (Flask/FastAPI). APIs designed to handle Black Friday traffic without crashing.</p>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'Flask', 'FastAPI'].map(t => (
                  <span key={t} className="text-[10px] font-mono font-bold text-[#f97316] border-2 border-[#f97316] px-2 py-0.5">{t}</span>
                ))}
              </div>
            </div>

            {/* Card 3 — spans 2 cols on lg */}
            <div className="lg:col-span-2 bg-[#1a1a1a] border-4 border-[#a855f7] p-5 md:p-6 group neo-card-hover"
                 style={{ boxShadow: '5px 5px 0 #a855f7' }}>
              <Database className="w-8 h-8 md:w-10 md:h-10 text-[#a855f7] mb-4 group-hover:rotate-12 transition-transform" />
              <h3 className="text-lg md:text-xl font-black text-white mb-2">Data Architecture</h3>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">MongoDB, SQL. Optimized schemas — a slow database is a lost customer.</p>
            </div>

            {/* Card 4 — spans 2 cols on lg */}
            <div className="lg:col-span-2 bg-[#1a1a1a] border-4 border-[#84cc16] p-5 md:p-6 group neo-card-hover"
                 style={{ boxShadow: '5px 5px 0 #84cc16' }}>
              <Cpu className="w-8 h-8 md:w-10 md:h-10 text-[#84cc16] mb-4 group-hover:rotate-12 transition-transform" />
              <h3 className="text-lg md:text-xl font-black text-white mb-2">Smart Automations</h3>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">Scikit-Learn, Pandas. Why hire staff when code can do the work?</p>
            </div>

            {/* Card 5 — accent card, 2 cols, different style */}
            <div className="lg:col-span-2 bg-[#84cc16] border-4 border-black p-5 md:p-6 group neo-press flex flex-col justify-between"
                 style={{ boxShadow: '5px 5px 0 #000' }}>
              <div>
                <Zap className="w-8 h-8 md:w-10 md:h-10 text-black mb-4" />
                <h3 className="text-lg md:text-xl font-black text-black mb-2">Let's Build</h3>
                <p className="text-xs md:text-sm text-black/70 leading-relaxed">Have a project? I ship fast and iterate faster.</p>
              </div>
              <a href="#contact" className="flex items-center gap-1 font-mono font-bold text-xs text-black mt-4 group-hover:gap-2 transition-all">
                GET IN TOUCH <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PURPLE MARQUEE ========== */}
      <div className="border-y-4 border-[#a855f7] bg-[#a855f7] py-2.5 md:py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex" style={{ animationDuration: '25s' }}>
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-black font-mono font-bold text-xs md:text-sm tracking-widest mx-4">
              YOUR VISION + MY CODE = UNSTOPPABLE \u2022 ACCEPTING 1 NEW PARTNER \u2022 LET'S BUILD SOMETHING LEGENDARY \u2022{' '}
            </span>
          ))}
        </div>
      </div>

      {/* ========== CONTACT — split layout, left text, right form area ========== */}
      <section id="contact" className="py-12 md:py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left — big text, 7 cols */}
          <div className="lg:col-span-7 px-5 md:px-10 lg:px-16 xl:px-20 py-10 md:py-16 relative">
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-1 bg-[#f97316]"></div>
            
            <div className="font-mono text-[10px] md:text-xs text-[#f97316] font-bold uppercase tracking-widest mb-4">// Let's Talk</div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-4 glitch-hover">
              HAVE A<br/>VISION<span className="text-[#f97316]">?</span>
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter mb-8"
                style={{ WebkitTextStroke: '2px #f97316', color: 'transparent' }}>
              I HAVE THE ENGINE.
            </h3>
            
            <p className="text-sm md:text-base text-gray-400 max-w-lg mb-10 leading-relaxed">
              I am currently selecting <span className="text-[#f97316] font-bold">1 new partner</span> for Winter 2026. 
              If you want to stop losing revenue to manual inefficiencies, let's build something real.
            </p>

            {/* CTA Buttons — left aligned, stacked on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a href="mailto:official.khushwant.1@gmail.com" 
                 className="bg-[#84cc16] text-black px-6 md:px-8 py-3.5 md:py-4 font-mono font-bold text-sm md:text-base tracking-wider border-4 border-black neo-press flex items-center gap-2"
                 style={{ boxShadow: '6px 6px 0 #000' }}>
                START A CONVERSATION <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <button onClick={copyEmail}
                      className="bg-[#1a1a1a] text-white px-6 md:px-8 py-3.5 md:py-4 font-mono font-bold text-sm md:text-base tracking-wider border-4 border-[#f97316] neo-press flex items-center gap-2"
                      style={{ boxShadow: '6px 6px 0 #f97316' }}>
                <Copy className="w-4 h-4 md:w-5 md:h-5"/> COPY EMAIL
              </button>
            </div>
          </div>

          {/* Right — decorative panel, 5 cols */}
          <div className="lg:col-span-5 bg-[#111] border-l-0 lg:border-l-4 border-[#f97316] flex flex-col justify-center items-center px-8 md:px-12 py-10 md:py-16 relative overflow-hidden">
            
            {/* Dot grid bg */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)',
              backgroundSize: '18px 18px'
            }}></div>

            <div className="relative z-10 text-center lg:text-left w-full max-w-sm">    
              {/* Big email display */}
              <div className="bg-[#0a0a0a] border-4 border-[#f97316] p-5 md:p-6 mb-6"
                   style={{ boxShadow: '6px 6px 0 #f97316' }}>
                <div className="font-mono text-[10px] text-gray-500 mb-2 uppercase tracking-widest">// Email</div>
                <div className="font-mono text-xs md:text-sm text-[#f97316] font-bold break-all">official.khushwant.1@gmail.com</div>
              </div>

              {/* Social links vertical stack */}
              <div className="flex flex-col gap-3">
                {[
                  { label: "GITHUB", href: "https://github.com/TooKhush/", icon: Github, color: "#84cc16" },
                  { label: "LINKEDIN", href: "https://www.linkedin.com/in/khushwant-singh-developer/", icon: Linkedin, color: "#f97316" },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-3 bg-[#1a1a1a] border-4 px-4 py-3 font-mono text-xs font-bold neo-card-hover group"
                       style={{ borderColor: s.color, boxShadow: `4px 4px 0 ${s.color}`, color: s.color }}>
                      <Icon className="w-4 h-4" />
                      <span className="text-white group-hover:text-current transition-colors">{s.label}</span>
                      <ArrowUpRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  );
                })}
              </div>

              {/* Sticker elements */}
              <div className="absolute -top-4 -right-4 bg-[#f97316] text-black font-mono font-bold text-[10px] px-3 py-1.5 border-4 border-black hidden lg:block"
                   style={{ boxShadow: '3px 3px 0 #000', transform: 'rotate(5deg)' }}>
                <Zap className="w-3 h-3 inline mr-1" />URGENT
              </div>
              <div className="absolute -bottom-3 -left-3 bg-[#84cc16] text-black font-mono font-bold text-[10px] px-3 py-1.5 border-4 border-black hidden lg:block"
                   style={{ boxShadow: '3px 3px 0 #000', transform: 'rotate(-3deg)' }}>
                <Star className="w-3 h-3 inline mr-1" />1 SPOT LEFT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER — full width, asymmetric ========== */}
      <footer className="border-t-4 border-[#84cc16] bg-[#0d0d0d]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          
          {/* Left — brand */}
          <div className="md:col-span-4 px-5 md:px-10 lg:px-16 xl:px-20 py-6 md:py-8 flex items-center gap-2 border-b-4 md:border-b-0 md:border-r-4 border-[#84cc16]/20">
            <div className="w-3 h-3 bg-[#84cc16] animate-pulse"></div>
            <span className="font-mono text-xs md:text-sm font-bold text-[#84cc16]">SYSTEMS OPERATIONAL</span>
          </div>

          {/* Middle — links */}
          <div className="md:col-span-4 px-5 md:px-8 py-6 md:py-8 flex items-center justify-start md:justify-center gap-2 md:gap-3 flex-wrap border-b-4 md:border-b-0 md:border-r-4 border-[#84cc16]/20">
            {[
              { label: "GITHUB", href: "https://github.com/TooKhush/", color: "#84cc16" },
              { label: "LINKEDIN", href: "https://www.linkedin.com/in/khushwant-singh-developer/", color: "#f97316" },
              { label: "TWITTER", href: "https://x.com/Kushwnt/", color: "#a855f7" },
            ].map((l) => (
              <a key={l.label} href={l.href}
                 className="font-mono text-[10px] md:text-xs font-bold px-3 py-1 border-2 text-black hover:-translate-y-0.5 transition-transform"
                 style={{ backgroundColor: l.color, borderColor: '#000' }}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Right — copyright */}
          <div className="md:col-span-4 px-5 md:px-8 py-6 md:py-8 flex items-center justify-start md:justify-end">
            <span className="font-mono text-[10px] md:text-xs text-gray-600">&copy; 2026 KHUSHWANT SINGH</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;