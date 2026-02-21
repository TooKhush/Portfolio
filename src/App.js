import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Copy, Mail, Github, Linkedin, Globe, Code2, ExternalLink, Terminal, Database, Cpu, Star, Zap, Sparkles } from 'lucide-react';

const App = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('official.khushwant.1@gmail.com');
    alert('Email copied to clipboard!');
  };

  const projects = [
    {
      id: 1,
      title: "The Doctor's Automation",
      category: "Operational Efficiency",
      metric: "Zero Missed Patients",
      description: "The clinic was losing ~30% of appointments because the front desk couldn't handle the call volume. I didn't just build a 'booking app'; I built a digital receptionist. It handles scheduling, rescheduling, and SMS reminders automatically. The result? The phone stopped ringing, but the calendar stayed full.",
      stack: ["Python", "Flask", "PostgreSQL", "Twilio"],
      year: "2025",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      link: "https://cleo.help/login",
      status: "LIVE",
      color: "#84cc16",
    },
    {
      id: 2,
      title: "Mountain Revenue Engine",
      category: "Direct Sales Platform",
      metric: "₹12L/Year Recovered",
      description: "Hotels in the Himalayas were bleeding 20% of their revenue to OTA commissions (Airbnb/Booking.com). I built them an escape route. This custom direct-booking engine handles payments, syncs inventory in real-time, and most importantly, keeps 100% of the profit with the owner.",
      stack: ["React", "Node.js", "Stripe Connect", "MongoDB"],
      year: "2024",
      image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      link: "https://khushwant.netlify.app/#",
      status: "IN DEVELOPMENT",
      color: "#f97316",
    },
    {
      id: 3,
      title: "Internship AI Matcher",
      category: "Recommendation System",
      metric: "500+ Perfect Matches",
      description: "Students were drowning in generic job listings. I built an engine that actually 'reads' their profiles. Using cosine similarity algorithms, it connects candidates to roles based on skills, not just keywords. It's Tinder for jobs, but it actually works.",
      stack: ["Python", "Scikit-Learn", "FastAPI", "React"],
      year: "2024",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      link: "https://intern-recommend.netlify.app/",
      status: "LIVE",
      color: "#a855f7",
    }
  ];

  const tickerText = "FULL STACK DEVELOPER \u2022 PROBLEM SOLVER \u2022 REVENUE ENGINEER \u2022 AUTOMATION EXPERT \u2022 REACT \u2022 PYTHON \u2022 NODE.JS \u2022 MONGODB \u2022 ";

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans overflow-x-hidden">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        
        * { font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif; }
        .font-mono { font-family: 'Space Mono', monospace !important; }
        
        .neo-border { border: 4px solid #e5e5e5; }
        .neo-border-lime { border: 4px solid #84cc16; }
        .neo-border-orange { border: 4px solid #f97316; }
        .neo-border-purple { border: 4px solid #a855f7; }
        
        .neo-shadow { box-shadow: 8px 8px 0px #84cc16; }
        .neo-shadow-orange { box-shadow: 8px 8px 0px #f97316; }
        .neo-shadow-purple { box-shadow: 8px 8px 0px #a855f7; }
        
        .neo-shadow-sm { box-shadow: 4px 4px 0px #84cc16; }
        .neo-shadow-sm-orange { box-shadow: 4px 4px 0px #f97316; }
        .neo-shadow-sm-purple { box-shadow: 4px 4px 0px #a855f7; }
        
        .neo-press { transition: all 0.15s ease; }
        .neo-press:hover { transform: translate(4px, 4px); box-shadow: 0px 0px 0px #84cc16 !important; }
        .neo-press-orange { transition: all 0.15s ease; }
        .neo-press-orange:hover { transform: translate(4px, 4px); box-shadow: 0px 0px 0px #f97316 !important; }
        .neo-press-purple { transition: all 0.15s ease; }
        .neo-press-purple:hover { transform: translate(4px, 4px); box-shadow: 0px 0px 0px #a855f7 !important; }
        
        .neo-card-hover { transition: all 0.2s ease; }
        .neo-card-hover:hover { transform: translate(-4px, -4px); box-shadow: 12px 12px 0px currentColor !important; }
        
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 20s linear infinite; }
        
        .sticker-tilt { transform: rotate(-3deg); }
        .sticker-tilt-right { transform: rotate(3deg); }
        .sticker-tilt-more { transform: rotate(-6deg); }
        .sticker-tilt-right-more { transform: rotate(6deg); }
        
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-up { animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-fade-in { animation: fadeIn 0.8s ease forwards; opacity: 0; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        
        ::selection { background: #84cc16; color: #0a0a0a; }
        
        .glitch-hover:hover { text-shadow: 3px 3px 0px #f97316, -3px -3px 0px #a855f7; }
        
        .dot-grid {
          background-image: radial-gradient(circle, rgba(132,204,22,0.15) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        
        ::-webkit-scrollbar { width: 12px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; border-left: 4px solid #84cc16; }
        ::-webkit-scrollbar-thumb { background: #84cc16; border: 2px solid #0a0a0a; }
        ::-webkit-scrollbar-thumb:hover { background: #f97316; }
      `}</style>

      {/* NAVIGATION */}
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#1a1a1a] neo-border-lime neo-shadow-sm px-4 md:px-8 py-3 flex items-center gap-4 md:gap-8 neo-press ${loaded ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="font-mono text-sm md:text-base font-bold tracking-tight flex items-center gap-2">
          <div className="w-3 h-3 bg-[#84cc16] rotate-45"></div>
          <span className="hidden sm:inline text-[#84cc16]">KHUSHWANT</span>
          <span className="sm:hidden text-[#84cc16]">KS</span>
        </div>
        <div className="h-6 w-[4px] bg-[#84cc16]"></div>
        <div className="flex gap-3 md:gap-6 text-xs font-mono font-bold uppercase tracking-wider">
          <a href="#work" className="hover:text-[#84cc16] transition-colors border-b-2 border-transparent hover:border-[#84cc16] pb-0.5">Work</a>
          <a href="#expertise" className="hover:text-[#f97316] transition-colors border-b-2 border-transparent hover:border-[#f97316] pb-0.5">Skills</a>
          <a href="#contact" className="hover:text-[#a855f7] transition-colors border-b-2 border-transparent hover:border-[#a855f7] pb-0.5">Contact</a>
        </div>
        <div className="h-6 w-[4px] bg-[#84cc16]"></div>
        <a href="mailto:official.khushwant.1@gmail.com" 
           className="bg-[#84cc16] text-black px-4 md:px-6 py-2 text-xs font-mono font-bold uppercase tracking-wider border-4 border-black hover:bg-[#f97316] transition-colors"
           style={{ boxShadow: '4px 4px 0px #000', transition: 'all 0.15s ease' }}
           onMouseEnter={(e) => { e.target.style.transform = 'translate(2px, 2px)'; e.target.style.boxShadow = '2px 2px 0px #000'; }}
           onMouseLeave={(e) => { e.target.style.transform = 'translate(0, 0)'; e.target.style.boxShadow = '4px 4px 0px #000'; }}>
          HIRE ME
        </a>
      </nav>

      {/* HERO SECTION */}
      <header className="relative z-10 pt-28 pb-8 md:pt-36 md:pb-16 px-4 md:px-6 max-w-7xl mx-auto">
        
        {/* Floating sticker decorations */}
        <div className={`absolute top-20 right-8 md:right-16 sticker-tilt-right-more ${loaded ? 'animate-fade-in delay-600' : 'opacity-0'}`}>
          <div className="bg-[#f97316] text-black font-mono font-bold text-[10px] md:text-xs px-3 md:px-4 py-1.5 md:py-2 border-4 border-black" style={{ boxShadow: '4px 4px 0px #000' }}>
            <Zap className="w-3 h-3 inline mr-1" />OPEN TO WORK
          </div>
        </div>
        <div className={`absolute top-48 right-4 md:right-32 sticker-tilt ${loaded ? 'animate-fade-in delay-500' : 'opacity-0'} hidden md:block`}>
          <div className="bg-[#a855f7] text-black font-mono font-bold text-[10px] px-3 py-1.5 border-4 border-black" style={{ boxShadow: '3px 3px 0px #000' }}>
            WINTER 2026
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 md:gap-16">
          
          <div className="flex-1">
            <div className={`inline-flex items-center gap-2 mb-6 md:mb-8 px-4 py-2.5 bg-[#1a1a1a] border-4 border-[#84cc16] font-mono text-xs font-bold text-[#84cc16] uppercase tracking-widest ${loaded ? 'animate-fade-up' : ''}`}
                 style={{ boxShadow: '4px 4px 0px #84cc16' }}>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full bg-[#84cc16] opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 bg-[#84cc16]"></span>
              </span>
              <span className="hidden sm:inline">AVAILABLE FOR WINTER 2026</span>
              <span className="sm:hidden">AVAILABLE NOW</span>
            </div>
            
            <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] font-black leading-[0.85] tracking-tighter mb-6 md:mb-10 glitch-hover transition-all ${loaded ? 'animate-fade-up delay-100' : ''}`}>
              <span className="text-white" style={{ WebkitTextStroke: '2px #84cc16' }}>I SOLVE</span> <br />
              <span className="text-[#f97316]">EXPENSIVE</span> <br />
              <span style={{ WebkitTextStroke: '2px #a855f7', color: 'transparent' }}>PROBLEMS.</span>
            </h1>
            
            <div className={`bg-[#1a1a1a] border-4 border-white/20 p-4 md:p-6 mb-8 md:mb-12 max-w-2xl ${loaded ? 'animate-fade-up delay-200' : ''}`} style={{ boxShadow: '6px 6px 0px rgba(132,204,22,0.3)' }}>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
                Full Stack Developer. I don't just write code; I build <span className="text-[#84cc16] font-bold underline decoration-4 decoration-[#84cc16] underline-offset-4">revenue-generating engines</span> for businesses that can't afford to fail.
              </p>
            </div>
            
            <div className={`flex flex-col sm:flex-row gap-4 md:gap-6 items-start ${loaded ? 'animate-fade-up delay-300' : ''}`}>
              <a href="#work" className="group flex items-center gap-3 md:gap-4 bg-[#84cc16] text-black px-6 py-4 font-mono font-bold text-sm uppercase tracking-wider border-4 border-black neo-press"
                 style={{ boxShadow: '6px 6px 0px #000' }}>
                <span>SEE MY IMPACT</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex gap-3 items-center">
                <a href="https://github.com/TooKhush/" className="w-12 h-12 bg-[#1a1a1a] border-4 border-[#f97316] flex items-center justify-center hover:bg-[#f97316] hover:text-black transition-all neo-press-orange" style={{ boxShadow: '4px 4px 0px #f97316' }}>
                  <Github className="w-5 h-5"/>
                </a>
                <a href="https://www.linkedin.com/in/khushwant-singh-developer/" className="w-12 h-12 bg-[#1a1a1a] border-4 border-[#a855f7] flex items-center justify-center hover:bg-[#a855f7] hover:text-black transition-all neo-press-purple" style={{ boxShadow: '4px 4px 0px #a855f7' }}>
                  <Linkedin className="w-5 h-5"/>
                </a>
                <a href="mailto:official.khushwant.1@gmail.com" className="w-12 h-12 bg-[#1a1a1a] border-4 border-[#84cc16] flex items-center justify-center hover:bg-[#84cc16] hover:text-black transition-all neo-press" style={{ boxShadow: '4px 4px 0px #84cc16' }}>
                  <Mail className="w-5 h-5"/>
                </a>
              </div>
            </div>
          </div>

          {/* Photo with brutal frame */}
          <div className={`flex-shrink-0 ${loaded ? 'animate-fade-up delay-200' : ''}`}>
            <div className="relative group">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-[#84cc16] bg-[#1a1a1a] overflow-hidden neo-card-hover"
                   style={{ boxShadow: '8px 8px 0px #84cc16', color: '#84cc16' }}>
                <img src="/my-photo.png" alt="Khushwant Singh" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                <div className="absolute top-2 left-2 w-4 h-4 border-t-4 border-l-4 border-[#f97316]"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t-4 border-r-4 border-[#f97316]"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-4 border-l-4 border-[#f97316]"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-4 border-r-4 border-[#f97316]"></div>
              </div>
              <div className="absolute -bottom-3 -right-3 bg-[#f97316] text-black font-mono font-bold text-xs px-4 py-2 border-4 border-black sticker-tilt-right z-10" style={{ boxShadow: '3px 3px 0px #000' }}>
                <Star className="w-3 h-3 inline mr-1" />DEV
              </div>
              <div className="mt-8 text-center">
                <div className="inline-block bg-[#1a1a1a] border-4 border-white px-6 py-3" style={{ boxShadow: '4px 4px 0px #a855f7' }}>
                  <h2 className="text-xl md:text-2xl font-black text-white tracking-tight">KHUSHWANT SINGH</h2>
                  <p className="text-xs text-[#84cc16] font-mono font-bold mt-1">// FULL_STACK_DEV</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MARQUEE TICKER - Lime */}
      <div className={`border-y-4 border-[#84cc16] bg-[#84cc16] py-3 md:py-4 overflow-hidden ${loaded ? 'animate-fade-up delay-500' : ''}`}>
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-black font-mono font-bold text-sm md:text-base tracking-widest mx-4">
              {tickerText}
            </span>
          ))}
        </div>
      </div>

      {/* STATS SECTION */}
      <div className={`max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 ${loaded ? 'animate-fade-up delay-500' : ''}`}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { value: "500+", label: "Crowd Managed", color: "#84cc16" },
            { value: "100%", label: "Client Retention", color: "#f97316" },
            { value: "12 HR", label: "Response Time", color: "#a855f7" },
            { value: "2", label: "Business Scaled", color: "#84cc16" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#1a1a1a] border-4 p-4 md:p-6 neo-card-hover"
              style={{ borderColor: stat.color, boxShadow: `6px 6px 0px ${stat.color}`, color: stat.color }}>
              <div className="text-2xl sm:text-3xl md:text-5xl font-black mb-1 md:mb-2" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <section id="work" className="py-12 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 relative">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter glitch-hover">
              CASE <span className="text-[#f97316]">STUDIES</span>
            </h2>
            <div className="w-full h-1 bg-[#f97316] mt-2"></div>
          </div>
          <div className="bg-[#a855f7] text-black font-mono font-bold text-[10px] md:text-xs px-4 py-2 border-4 border-black sticker-tilt-right" style={{ boxShadow: '3px 3px 0px #000' }}>
            <Sparkles className="w-3 h-3 inline mr-1" />ENGINEERING OUTCOMES
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 md:gap-10">
          <div className="lg:col-span-5 flex flex-col gap-3">
            {projects.map((project, index) => (
              <div key={project.id} onClick={() => setActiveProject(index)}
                className={`p-4 md:p-6 border-4 cursor-pointer group transition-all duration-200 bg-[#1a1a1a] ${activeProject === index ? '' : 'opacity-60 hover:opacity-100'}`}
                style={{ 
                  borderColor: activeProject === index ? project.color : '#333',
                  boxShadow: activeProject === index ? `6px 6px 0px ${project.color}` : '0px 0px 0px transparent',
                  transform: activeProject === index ? 'translate(-2px, -2px)' : 'translate(0, 0)',
                  transition: 'all 0.2s ease'
                }}>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white">{project.title}</h3>
                  <span className="font-mono text-xs font-bold" style={{ color: project.color }}>0{project.id}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs md:text-sm font-mono font-bold" style={{ color: project.color }}>{project.metric}</span>
                  <ArrowUpRight className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-200 ${activeProject === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ color: project.color }} />
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 relative">
            <div className="lg:sticky lg:top-28 bg-[#1a1a1a] border-4 overflow-hidden transition-all duration-500"
              style={{ borderColor: projects[activeProject].color, boxShadow: `8px 8px 0px ${projects[activeProject].color}` }}>
              
              <div className="bg-[#0d0d0d] px-3 md:px-5 py-2 md:py-3 flex items-center gap-3 border-b-4" style={{ borderColor: projects[activeProject].color }}>
                <div className="flex gap-2">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-red-500 border-2 border-black"></div>
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-yellow-500 border-2 border-black"></div>
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-green-500 border-2 border-black"></div>
                </div>
                <div className="ml-2 md:ml-4 px-3 py-1 bg-black border-2 border-gray-600 font-mono text-[10px] md:text-xs text-gray-400 flex items-center gap-2 flex-1 max-w-[250px]">
                  <Globe className="w-3 h-3" /><span className="truncate">localhost:3000</span>
                </div>
                <div className={`ml-auto px-2 py-0.5 border-2 border-black font-mono text-[9px] md:text-[10px] font-bold ${projects[activeProject].status === "LIVE" ? 'bg-[#84cc16] text-black' : 'bg-[#f97316] text-black'}`}>
                  {projects[activeProject].status}
                </div>
              </div>

              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-70 z-10"></div>
                <img src={projects[activeProject].image} alt={projects[activeProject].title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out scale-105 hover:scale-110" key={activeProject} />
              </div>

              <div className="p-5 md:p-8 relative z-20 -mt-10 md:-mt-16">
                <div className="inline-block px-3 md:px-4 py-1.5 border-4 border-black font-mono text-[10px] md:text-xs font-bold mb-4 md:mb-6"
                  style={{ backgroundColor: projects[activeProject].color, color: '#000' }}>
                  {projects[activeProject].category.toUpperCase()}
                </div>
                <div className="border-l-4 pl-4 md:pl-6 mb-6 md:mb-8" style={{ borderColor: projects[activeProject].color }}>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">{projects[activeProject].description}</p>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                  {projects[activeProject].stack.map((tech) => (
                    <span key={tech} className="text-[10px] md:text-xs font-mono font-bold text-black px-2 md:px-3 py-1 md:py-1.5 border-2 border-black"
                      style={{ backgroundColor: projects[activeProject].color }}>{tech}</span>
                  ))}
                </div>
                <div className="pt-4 md:pt-6 border-t-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
                  style={{ borderColor: projects[activeProject].color + '40' }}>
                  <span className="font-mono text-[10px] md:text-xs font-bold text-gray-500">
                    YEAR: <span style={{ color: projects[activeProject].color }}>{projects[activeProject].year}</span>
                  </span>
                  <a href={projects[activeProject].link} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs md:text-sm font-mono font-bold text-black px-4 py-2 border-4 border-black neo-press transition-all"
                    style={{ backgroundColor: projects[activeProject].color, boxShadow: '4px 4px 0px #000' }}>
                    VISIT SITE <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE TICKER - Orange */}
      <div className="border-y-4 border-[#f97316] bg-[#f97316] py-3 md:py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex" style={{ animationDirection: 'reverse', animationDuration: '25s' }}>
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-black font-mono font-bold text-sm md:text-base tracking-widest mx-4">
              BUILD FAST \u2022 SHIP FASTER \u2022 BREAK NOTHING \u2022 SCALE EVERYTHING \u2022 AUTOMATE THE BORING \u2022 ENGINEER THE IMPOSSIBLE \u2022{' '}
            </span>
          ))}
        </div>
      </div>

      {/* EXPERTISE GRID */}
      <section id="expertise" className="py-12 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="mb-10 md:mb-16 relative">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter glitch-hover">
            THE <span className="text-[#a855f7]">TOOLKIT</span>
          </h2>
          <div className="w-full h-1 bg-[#a855f7] mt-2"></div>
          <p className="text-gray-400 max-w-2xl text-sm md:text-lg mt-4 md:mt-6 font-medium">
            I don't chase trends. I choose tools that provide <span className="text-[#84cc16] font-bold">speed</span>, <span className="text-[#f97316] font-bold">scalability</span>, and <span className="text-[#a855f7] font-bold">stability</span> for your business.
          </p>
          <div className="absolute -top-2 right-0 md:right-10 bg-[#84cc16] text-black font-mono font-bold text-[10px] px-3 py-1.5 border-4 border-black sticker-tilt-right hidden md:block" style={{ boxShadow: '3px 3px 0px #000' }}>
            WEAPONS OF CHOICE
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { icon: Code2, title: "Frontend Logic", desc: "React, Tailwind, Framer Motion. I build interfaces that convert visitors into paying customers.", color: "#84cc16" },
            { icon: Terminal, title: "Backend Systems", desc: "Node.js, Python (Flask/FastAPI). APIs designed to handle Black Friday traffic without crashing.", color: "#f97316" },
            { icon: Database, title: "Data Architecture", desc: "MongoDB, SQL. Optimized schemas because a slow database is a lost customer.", color: "#a855f7" },
            { icon: Cpu, title: "Smart Automations", desc: "Scikit-Learn, Pandas. Why hire more staff when code can do the work for you?", color: "#84cc16" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-[#1a1a1a] border-4 p-6 md:p-8 group neo-card-hover"
                style={{ borderColor: item.color, boxShadow: `6px 6px 0px ${item.color}`, color: item.color }}>
                <div className="w-12 h-12 md:w-14 md:h-14 border-4 border-current flex items-center justify-center mb-4 md:mb-6 group-hover:bg-current transition-colors">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-lg md:text-xl font-black text-white mb-2 md:mb-3">{item.title}</h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-medium">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* MARQUEE TICKER - Purple */}
      <div className="border-y-4 border-[#a855f7] bg-[#a855f7] py-3 md:py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex" style={{ animationDuration: '30s' }}>
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-black font-mono font-bold text-sm md:text-base tracking-widest mx-4">
              LET'S BUILD SOMETHING LEGENDARY \u2022 YOUR VISION + MY CODE = UNSTOPPABLE \u2022 CURRENTLY ACCEPTING 1 NEW PARTNER \u2022{' '}
            </span>
          ))}
        </div>
      </div>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 md:py-32 px-4 md:px-6 max-w-7xl mx-auto text-center relative overflow-hidden dot-grid">
        <div className="absolute top-8 left-8 bg-[#f97316] text-black font-mono font-bold text-[10px] px-3 py-1.5 border-4 border-black sticker-tilt hidden md:block" style={{ boxShadow: '3px 3px 0px #000' }}>
          <Zap className="w-3 h-3 inline mr-1" />URGENT
        </div>
        <div className="absolute bottom-16 right-8 bg-[#84cc16] text-black font-mono font-bold text-[10px] px-3 py-1.5 border-4 border-black sticker-tilt-right hidden md:block" style={{ boxShadow: '3px 3px 0px #000' }}>
          <Star className="w-3 h-3 inline mr-1" />1 SPOT LEFT
        </div>
        
        <div className="relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-8xl font-black text-white tracking-tighter mb-4 md:mb-6 glitch-hover">HAVE A VISION?</h2>
          <h2 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter mb-6 md:mb-10" style={{ WebkitTextStroke: '3px #f97316', color: 'transparent' }}>I HAVE THE ENGINE.</h2>
          
          <div className="inline-block bg-[#1a1a1a] border-4 border-[#a855f7] p-4 md:p-6 mb-8 md:mb-12 max-w-2xl mx-auto" style={{ boxShadow: '6px 6px 0px #a855f7' }}>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 font-medium">
              I am currently selecting <span className="text-[#f97316] font-bold">1 new partner</span> for Winter 2026. 
              If you want to stop losing revenue to manual inefficiencies, let's build.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 px-4">
            <a href="mailto:official.khushwant.1@gmail.com" 
              className="bg-[#84cc16] text-black px-8 md:px-12 py-4 md:py-5 font-mono font-bold text-base md:text-lg tracking-wider border-4 border-black neo-press flex items-center justify-center gap-2 md:gap-3"
              style={{ boxShadow: '8px 8px 0px #000' }}>
              START A CONVERSATION <ArrowRight className="w-5 h-5" />
            </a>
            <button onClick={copyEmail} 
              className="bg-[#1a1a1a] text-white px-8 md:px-12 py-4 md:py-5 font-mono font-bold text-base md:text-lg tracking-wider border-4 border-[#f97316] neo-press-orange flex items-center justify-center gap-2 md:gap-3"
              style={{ boxShadow: '8px 8px 0px #f97316' }}>
              <Copy className="w-5 h-5"/> COPY EMAIL
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-4 border-[#84cc16] py-6 md:py-10 px-4 md:px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-sm font-bold flex items-center gap-2">
            <div className="w-3 h-3 bg-[#84cc16] animate-pulse"></div>
            <span className="text-[#84cc16]">SYSTEMS OPERATIONAL</span>
          </div>
          <div className="flex gap-3 md:gap-4">
            {[
              { label: "GITHUB", href: "https://github.com/TooKhush/", color: "#84cc16" },
              { label: "LINKEDIN", href: "https://www.linkedin.com/in/khushwant-singh-developer/", color: "#f97316" },
              { label: "TWITTER", href: "https://x.com/Kushwnt/", color: "#a855f7" },
            ].map((link) => (
              <a key={link.label} href={link.href}
                className="font-mono text-xs font-bold px-3 py-1.5 border-2 text-black transition-all hover:translate-y-[-2px]"
                style={{ backgroundColor: link.color, borderColor: '#000' }}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="font-mono text-xs text-gray-600">&copy; 2026 KHUSHWANT SINGH</div>
        </div>
      </footer>

    </div>
  );
};

export default App;
