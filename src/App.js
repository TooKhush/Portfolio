import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Copy, Mail, Github, Linkedin, Globe, Code2, ExternalLink, Terminal, Database, Cpu } from 'lucide-react';

const App = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [navPosition, setNavPosition] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - navPosition.x,
      y: e.clientY - navPosition.y
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setNavPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

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
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" ,
      link: "https://cleo.help/login",
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
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans selection:bg-white selection:text-black overflow-x-hidden">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.015]" 
           style={{ 
             backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
             backgroundSize: '80px 80px',
             filter: 'blur(0.5px)'
           }}>
      </div>

      {/* Floating Draggable Navigation */}
      <nav 
        className={`fixed z-50 bg-zinc-900/80 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl transition-all duration-200 ${isDragging ? 'cursor-grabbing scale-105' : 'cursor-grab'}`}
        style={{
          left: `${navPosition.x}px`,
          top: `${navPosition.y}px`,
        }}
        onMouseDown={handleMouseDown}
      >
        <div className="px-6 py-4 flex items-center gap-6">
          <div className="text-sm font-bold tracking-tight flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-sm"></div>
            <span className="hidden sm:inline">KHUSHWANT SINGH</span>
            <span className="sm:hidden">KS</span>
          </div>
          
          <div className="h-6 w-px bg-white/10"></div>
          
          <div className="flex gap-4 text-xs font-medium text-gray-400">
            <a href="#work" className="hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>
              Work
            </a>
            <a href="#expertise" className="hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>
              Expertise
            </a>
          </div>
          
          <div className="h-6 w-px bg-white/10"></div>
          
          <a 
            href="mailto:official.khushwant.1@gmail.com" 
            className="bg-white text-black px-4 py-1.5 text-xs font-bold hover:bg-gray-200 transition-all rounded"
            onClick={(e) => e.stopPropagation()}
          >
            HIRE ME
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 pt-32 pb-16 md:pt-40 md:pb-32 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 md:gap-16">
          
          {/* Left Side - Text Content */}
          <div className="flex-1">
            <div className={`inline-flex items-center gap-2 mb-6 md:mb-8 px-3 md:px-4 py-2 border border-white/10 rounded-full text-xs font-mono text-green-400 bg-green-900/10 uppercase tracking-widest ${loaded ? 'animate-fade-up' : ''}`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="hidden sm:inline">Available for Winter 2026</span>
              <span className="sm:hidden">Available Now</span>
            </div>
            
            <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] font-black leading-[0.9] tracking-tight mb-6 md:mb-10 ${loaded ? 'animate-fade-up delay-100' : ''}`}>
              <span className="text-white">I SOLVE</span> <br />
              <span className="text-white">EXPENSIVE</span> <br />
              <span className="text-gray-600">PROBLEMS.</span>
            </h1>
            
            <p className={`text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-8 md:mb-12 font-normal ${loaded ? 'animate-fade-up delay-200' : ''}`}>
              Full Stack Developer. I don't just write code; I build revenue-generating engines for businesses that can't afford to fail.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-6 md:gap-8 items-start ${loaded ? 'animate-fade-up delay-300' : ''}`}>
              <a href="#work" className="flex items-center gap-3 md:gap-4 group cursor-pointer">
                <div className="w-12 h-12 md:w-14 md:h-14 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 group-hover:scale-110">
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span className="font-mono text-xs md:text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">See My Impact</span>
              </a>
              
              <div className="flex gap-4 md:gap-6 items-center pl-0 sm:pl-8 sm:border-l border-white/10 h-12 md:h-14">
                <a href="#" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all"><Github className="w-5 h-5 md:w-6 md:h-6"/></a>
                <a href="#" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all"><Linkedin className="w-5 h-5 md:w-6 md:h-6"/></a>
                <a href="mailto:official.khushwant.1@gmail.com" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all"><Mail className="w-5 h-5 md:w-6 md:h-6"/></a>
              </div>
            </div>
          </div>

          {/* Right Side - Photo beside the text */}
          <div className={`flex-shrink-0 ${loaded ? 'animate-fade-up delay-200' : ''}`}>
            <div className="relative group">
              {/* Glow effect behind photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Photo container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
                {/* Replace this src with your actual photo */}
                <img 
                  src="/my-photo.png"
                  alt="Khushwant Singh"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              </div>
              
              {/* Name label under photo */}
              <div className="mt-6 text-center">
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">KHUSHWANT SINGH</h2>
                <p className="text-xs text-gray-500 font-mono mt-1">Full Stack Developer</p>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Stats Ticker */}
      <div className={`border-y border-white/5 bg-zinc-950 overflow-hidden ${loaded ? 'animate-fade-up delay-500' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="group">
            <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-1 md:mb-2 group-hover:text-green-400 transition-colors">500+</div>
            <div className="text-[10px] sm:text-xs text-gray-500 font-mono uppercase tracking-widest">Crowd managed </div>
          </div>
          <div className="group">
            <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-1 md:mb-2 group-hover:text-blue-400 transition-colors">100%</div>
            <div className="text-[10px] sm:text-xs text-gray-500 font-mono uppercase tracking-widest">Client Retention</div>
          </div>
          <div className="group">
            <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-1 md:mb-2 group-hover:text-purple-400 transition-colors">12 Hour</div>
            <div className="text-[10px] sm:text-xs text-gray-500 font-mono uppercase tracking-widest">Response Time</div>
          </div>
          <div className="group">
            <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-1 md:mb-2 group-hover:text-yellow-400 transition-colors">2</div>
            <div className="text-[10px] sm:text-xs text-gray-500 font-mono uppercase tracking-widest">Business Scaled</div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section id="work" className="py-16 md:py-32 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-4">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter">CASE STUDIES</h2>
          <span className="text-gray-500 font-mono text-xs border border-white/10 px-3 md:px-4 py-2 rounded-full">ENGINEERING OUTCOMES</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-16">
          {/* List Side */}
          <div className="lg:col-span-5 flex flex-col">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={`py-6 md:py-10 border-t border-white/10 cursor-pointer group transition-all duration-300 ${activeProject === index ? 'opacity-100' : 'opacity-40 hover:opacity-80'}`}
              >
                <div className="flex justify-between items-baseline mb-2 md:mb-3">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:pl-2 md:group-hover:pl-4 transition-all duration-300">{project.title}</h3>
                  <span className="font-mono text-xs text-gray-500 ml-2">0{project.id}</span>
                </div>
                <div className="flex justify-between items-center group-hover:pl-2 md:group-hover:pl-4 transition-all duration-300 delay-75">
                  <span className="text-xs md:text-sm font-mono text-green-400">{project.metric}</span>
                  <ArrowUpRight className={`w-4 h-4 md:w-5 md:h-5 text-white transition-transform duration-300 ${activeProject === index ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} />
                </div>
              </div>
            ))}
            <div className="border-t border-white/10"></div>
          </div>

          {/* Preview Side */}
          <div className="lg:col-span-7 relative">
            <div className="lg:sticky lg:top-32 bg-zinc-950 rounded-lg md:rounded-xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500">
              
              {/* Browser Header */}
              <div className="bg-zinc-900 px-3 md:px-4 py-2 md:py-3 flex items-center gap-2 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="ml-2 md:ml-4 px-2 md:px-3 py-1 bg-black/50 rounded-md text-[9px] md:text-[10px] font-mono text-gray-500 flex items-center gap-1 md:gap-2 w-full max-w-[150px] md:max-w-[200px]">
                  <Globe className="w-2 h-2 md:w-3 md:h-3" />
                  <span className="truncate">localhost:3000</span>
                </div>
              </div>

              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-60 z-10"></div>
                <img 
                  src={projects[activeProject].image} 
                  alt={projects[activeProject].title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out scale-105"
                  key={activeProject}
                />
              </div>

              {/* Project Details */}
              <div className="p-6 md:p-10 relative z-20 -mt-12 md:-mt-20">
                <div className="inline-block px-2 md:px-3 py-1 bg-white text-black rounded text-[10px] md:text-xs font-bold font-mono mb-4 md:mb-6">
                  {projects[activeProject].category.toUpperCase()}
                </div>
                
                <p className="text-sm md:text-lg text-gray-300 leading-relaxed mb-6 md:mb-8 border-l-2 border-white/20 pl-4 md:pl-6">
                  {projects[activeProject].description}
                </p>
                
                <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                  {projects[activeProject].stack.map((tech) => (
                    <span key={tech} className="text-[10px] md:text-xs font-mono text-gray-400 bg-white/5 px-2 md:px-3 py-1 md:py-1.5 rounded-full border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 md:pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <span className="font-mono text-[10px] md:text-xs text-gray-600">DEPLOYED_STATUS: <span className="text-green-500">LIVE</span></span>
                  <button className="flex items-center gap-2 text-xs md:text-sm font-bold text-white hover:text-green-400 transition-colors">
                    VISIT SITE <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section id="expertise" className="py-16 md:py-32 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4 md:mb-6">THE TOOLKIT</h2>
            <p className="text-gray-400 max-w-2xl text-sm md:text-lg">I don't chase trends. I choose tools that provide speed, scalability, and stability for your business.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            <div className="bg-zinc-900 p-6 md:p-10 hover:bg-zinc-800 transition-all duration-300 group">
              <Code2 className="w-8 h-8 md:w-10 md:h-10 text-gray-600 mb-6 md:mb-8 group-hover:text-green-400 transition-colors" />
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Frontend Logic</h3>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                React, Tailwind, Framer Motion. I build interfaces that convert visitors into paying customers.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 md:p-10 hover:bg-zinc-800 transition-all duration-300 group">
              <Terminal className="w-8 h-8 md:w-10 md:h-10 text-gray-600 mb-6 md:mb-8 group-hover:text-blue-400 transition-colors" />
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Backend Systems</h3>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                Node.js, Python (Flask/FastAPI). APIs designed to handle Black Friday traffic without crashing.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 md:p-10 hover:bg-zinc-800 transition-all duration-300 group">
              <Database className="w-8 h-8 md:w-10 md:h-10 text-gray-600 mb-6 md:mb-8 group-hover:text-purple-400 transition-colors" />
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Data Architecture</h3>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                MongoDB, SQL. Optimized schemas because a slow database is a lost customer.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 md:p-10 hover:bg-zinc-800 transition-all duration-300 group">
              <Cpu className="w-8 h-8 md:w-10 md:h-10 text-gray-600 mb-6 md:mb-8 group-hover:text-yellow-400 transition-colors" />
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Smart Automations</h3>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                Scikit-Learn, Pandas. Why hire more staff when code can do the work for you?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 md:py-40 px-4 md:px-6 max-w-7xl mx-auto text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-5xl md:text-8xl font-bold text-white tracking-tighter mb-6 md:mb-8">
            HAVE A VISION? <br />
            <span className="text-gray-700">I HAVE THE ENGINE.</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-400 mb-10 md:mb-16 max-w-2xl mx-auto px-4">
            I am currently selecting 1 new partner for Winter 2026. 
            If you want to stop losing revenue to manual inefficiencies, let's build.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 px-4">
            <a href="mailto:official.khushwant.1@gmail.com" className="group relative px-6 md:px-10 py-4 md:py-5 bg-white text-black font-bold text-base md:text-lg overflow-hidden rounded-sm transition-transform active:scale-95">
              <div className="absolute inset-0 w-full h-full bg-gray-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative flex items-center justify-center gap-2 md:gap-3">
                START A CONVERSATION <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </span>
            </a>
            <button onClick={copyEmail} className="px-6 md:px-10 py-4 md:py-5 border border-white/20 text-white font-bold text-base md:text-lg hover:bg-white/5 transition-colors rounded-sm flex items-center justify-center gap-2 md:gap-3">
              <Copy className="w-4 h-4 md:w-5 md:h-5"/> COPY EMAIL
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 md:py-12 px-4 md:px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-500 gap-4">
          <div className="font-mono flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            SYSTEMS OPERATIONAL
          </div>
          <div className="flex gap-4 md:gap-8 font-mono text-xs">
            <a href="#" className="hover:text-white transition-colors">GITHUB</a>
            <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
            <a href="#" className="hover:text-white transition-colors">TWITTER</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;