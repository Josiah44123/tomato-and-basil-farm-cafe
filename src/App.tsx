import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Instagram, Facebook, Mail, Menu, X, ArrowRight } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-warm-bg text-ink overflow-hidden selection:bg-olive selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 py-6 ${isScrolled ? 'bg-warm-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent text-white'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="font-serif text-2xl font-bold tracking-wider uppercase cursor-pointer" onClick={() => scrollToSection('hero')}>
            Tomato & Basil
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center text-sm tracking-widest uppercase font-medium">
            <button onClick={() => scrollToSection('about')} className="hover:text-olive hover:scale-105 transition-all">Our Story</button>
            <button onClick={() => scrollToSection('menu')} className="hover:text-olive hover:scale-105 transition-all">Menu</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-olive hover:scale-105 transition-all">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="border border-current px-5 py-2 rounded-full hover:bg-white hover:text-ink transition-colors">Reserve</button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-warm-bg z-40 flex flex-col items-center justify-center space-y-8 text-2xl font-serif text-olive transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <button onClick={() => scrollToSection('about')} className="hover:scale-110 transition-transform">Our Story</button>
        <button onClick={() => scrollToSection('menu')} className="hover:scale-110 transition-transform">Menu</button>
        <button onClick={() => scrollToSection('experience')} className="hover:scale-110 transition-transform">Experience</button>
        <button onClick={() => scrollToSection('contact')} className="hover:scale-110 transition-transform">Reserve</button>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80" 
            alt="Scenic view of a lake and hills" 
            className="w-full h-full object-cover scale-105 animate-[slowPan_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto flex flex-col items-center mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl mb-6 tracking-tight drop-shadow-lg"
          >
            Tomato & Basil
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-2xl font-light tracking-wide mb-10 max-w-2xl text-warm-white/90"
          >
            A quaint farm cafe perched in the lush hills of Mataasnakahoy.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            onClick={() => scrollToSection('contact')}
            className="bg-olive hover:bg-olive-dark text-white px-8 py-4 rounded-full tracking-widest text-sm uppercase font-semibold transition-all shadow-[0_0_40px_rgba(90,90,64,0.4)] flex items-center gap-2 group"
          >
            Plan Your Visit
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-24 md:py-32 px-6 bg-warm-bg relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn className="order-2 md:order-1 flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4]">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80" 
                alt="Cozy cafe interior" 
                className="w-full h-full object-cover rounded-[32px] shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-olive rounded-full flex items-center justify-center p-8 text-white font-serif text-center text-sm italic shadow-lg hidden md:flex rotate-12">
                "Where time slows down and flavors come alive."
              </div>
            </div>
          </FadeIn>
          
          <div className="order-1 md:order-2 space-y-8">
            <FadeIn>
              <div className="text-sm font-bold tracking-[0.2em] uppercase text-olive mb-4">Our Story</div>
              <h2 className="font-serif text-5xl md:text-6xl leading-tight text-ink">
                A sanctuary of <br/><span className="italic font-light text-terracotta">taste & tranquility</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2} className="space-y-6 text-lg text-ink/80 leading-relaxed font-light">
              <p>
                Nestled overlooking the breathtaking majesty of Taal Lake, Tomato and Basil began as a simple dream: to share the comforting embrace of farm-fresh food in a setting that feels like a gentle escape.
              </p>
              <p>
                Every dish honors the earth it came from. From the sun-ripened tomatoes harvested nearby to the aromatic basil that lines our garden paths, we believe in honest ingredients cooked with patience and love. Here, weekend getaways turn into lasting memories over wood-fired warmth and a perfect cup of coffee.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <button onClick={() => scrollToSection('experience')} className="text-olive font-semibold tracking-wide uppercase text-sm border-b-2 border-olive pb-1 hover:text-olive-dark hover:border-olive-dark transition-colors inline-flex items-center gap-2">
                Discover the ambiance <ArrowRight size={16} />
              </button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-24 md:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <div className="text-sm font-bold tracking-[0.2em] uppercase text-terracotta mb-4">Farm to Table</div>
            <h2 className="font-serif text-5xl md:text-6xl text-ink">Menu Highlights</h2>
            <div className="w-24 h-px bg-olive/30 mx-auto mt-8"></div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Morning Favorites",
                desc: "Freshly baked morning pastries, artisanal sourdough toasts, and hearty farm breakfast skillets featuring local free-range eggs.",
                image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80"
              },
              {
                title: "Wood-Fired Classics",
                desc: "Handcrafted pastas tossed in slow-roasted tomato sauce, rustic pizzas with fresh garden basil, and hearty comforting stews.",
                image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80"
              },
              {
                title: "Farm-Fresh Refreshments",
                desc: "Locally sourced artisanal coffees, vibrant garden herb lemonades, and soothing floral teas blended in-house.",
                image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80"
              }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.2} className="group">
                <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden mb-8">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10 duration-500"></div>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-serif text-2xl font-medium mb-3 group-hover:text-terracotta transition-colors">{item.title}</h3>
                <p className="font-light text-ink/70 leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.6} className="text-center mt-16">
            <button className="px-8 py-3 border border-ink text-ink rounded-full uppercase text-sm tracking-widest font-medium hover:bg-ink hover:text-white transition-colors">
              View Full Menu
            </button>
          </FadeIn>
        </div>
      </section>

      {/* The Experience Gallery */}
      <section id="experience" className="py-24 md:py-32 bg-warm-bg overflow-hidden relative">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-olive/5 rounded-bl-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <FadeIn>
              <h2 className="font-serif text-5xl md:text-6xl text-ink leading-tight">
                The <span className="italic text-olive">Experience</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2} className="max-w-md text-ink/70 font-light text-lg">
              Al fresco dining amidst lush gardens, cozy cottage lighting, and panoramic overlooks. Breathe in the mountain air.
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
            <FadeIn delay={0.1} className="md:col-span-8 row-span-1 rounded-[24px] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?auto=format&fit=crop&q=80" alt="Lake view from cafe" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </FadeIn>
            <FadeIn delay={0.2} className="md:col-span-4 row-span-2 rounded-[24px] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&q=80" alt="Cafe exterior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </FadeIn>
            <FadeIn delay={0.3} className="md:col-span-4 row-span-1 rounded-[24px] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1525610553991-56e11115b862?auto=format&fit=crop&q=80" alt="Fresh tomatoes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </FadeIn>
            <FadeIn delay={0.4} className="md:col-span-4 row-span-1 rounded-[24px] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&q=80" alt="Coffee pouring" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer & Reserve Area */}
      <footer id="contact" className="bg-ink text-warm-white relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
           <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80" alt="texture" className="w-full h-full object-cover mix-blend-overlay grayscale" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10 grid md:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-5xl mb-4 italic">Tomato & Basil</h2>
              <p className="font-light text-warm-white/70 max-w-sm text-lg">Your countryside escape. Nourishing food, soulful views.</p>
            </div>
            
            <div className="space-y-6 form-light text-warm-white/80">
              <div className="flex items-start gap-4">
                <MapPin className="text-terracotta mt-1 shrink-0" size={24} />
                <p>Brgy. Lumang Lipa, Mataasnakahoy,<br/>Batangas, Philippines</p>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-terracotta mt-1 shrink-0" size={24} />
                <p>Wednesday - Sunday<br/>8:00 AM - 8:00 PM<br/><span className="text-warm-white/50 text-sm">(Closed Mon & Tue)</span></p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-terracotta shrink-0" size={24} />
                <p>hello@tomatoandbasil.ph</p>
              </div>
            </div>

            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 rounded-full border border-warm-white/20 flex items-center justify-center hover:bg-olive hover:border-olive transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-warm-white/20 flex items-center justify-center hover:bg-olive hover:border-olive transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="bg-warm-white/5 p-8 md:p-12 rounded-[32px] backdrop-blur-sm border border-warm-white/10">
            <h3 className="font-serif text-3xl mb-8">Reserve a Table</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-warm-white/60">Full Name</label>
                <input type="text" className="w-full bg-transparent border-b border-warm-white/20 pb-3 focus:outline-none focus:border-olive transition-colors backdrop-blur-none" placeholder="Juan Dela Cruz" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-warm-white/60">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-warm-white/20 pb-3 focus:outline-none focus:border-olive transition-colors" placeholder="juan@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-warm-white/60">Phone</label>
                  <input type="tel" className="w-full bg-transparent border-b border-warm-white/20 pb-3 focus:outline-none focus:border-olive transition-colors" placeholder="+63 900 000 0000" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-warm-white/60">Date</label>
                  <input type="date" className="w-full bg-transparent border-b border-warm-white/20 pb-3 focus:outline-none focus:border-olive transition-colors text-warm-white/80" />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-warm-white/60">Guests</label>
                  <select className="w-full bg-transparent border-b border-warm-white/20 pb-3 focus:outline-none focus:border-olive transition-colors text-warm-white/80 appearance-none">
                    <option value="" disabled className="text-ink">Select guests</option>
                    {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n} className="text-ink">{n} {n===1?'Person':'People'}</option>)}
                    <option value="9+" className="text-ink">9+ (Large Group)</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full bg-terracotta hover:bg-[#7a3232] text-white py-4 mt-4 rounded-full uppercase tracking-widest text-sm font-bold transition-colors">
                Request Reservation
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-warm-white/10 text-center py-6 text-sm text-warm-white/40 tracking-wider">
           © {new Date().getFullYear()} Tomato & Basil Farm Cafe. All rights reserved.
        </div>
      </footer>
      
      <style>{`
        @keyframes slowPan {
          0% { transform: scale(1.05) translate(0, 0); }
          100% { transform: scale(1.1) translate(-2%, 2%); }
        }
      `}</style>
    </div>
  );
}
