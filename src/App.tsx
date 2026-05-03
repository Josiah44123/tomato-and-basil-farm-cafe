import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Instagram, Facebook, Mail, Menu, X, ArrowRight } from 'lucide-react';
import { InteractiveGallery } from './components/InteractiveGallery';

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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OypTLwVOBPeRKEhu2G4CsPzrK7gcwK.png" 
            alt="Tomato and Basil Farm Cafe exterior at night" 
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
      <section id="about" className="py-20 md:py-28 px-6 bg-warm-bg relative">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-sm font-bold tracking-[0.2em] uppercase text-olive mb-3">Our Story</div>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight text-ink mb-12">
              A sanctuary of <br/><span className="italic font-light text-terracotta">taste & tranquility</span>
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-12 md:gap-14 items-center">
            <FadeIn className="order-2 md:order-1 space-y-5 text-base md:text-lg text-ink/80 leading-relaxed font-light">
              <p>
                Nestled overlooking the breathtaking majesty of Taal Lake, Tomato and Basil began as a simple dream: to share the comforting embrace of farm-fresh food in a setting that feels like a gentle escape.
              </p>
              <p>
                Every dish honors the earth it came from. From the sun-ripened tomatoes harvested nearby to the aromatic basil that lines our garden paths, we believe in honest ingredients cooked with patience and love. Here, weekend getaways turn into lasting memories over wood-fired warmth and a perfect cup of coffee.
              </p>
              <FadeIn delay={0.2}>
                <button onClick={() => scrollToSection('experience')} className="text-olive font-semibold tracking-wide uppercase text-sm border-b-2 border-olive pb-1 hover:text-olive-dark hover:border-olive-dark transition-colors inline-flex items-center gap-2 mt-2">
                  Discover the ambiance <ArrowRight size={16} />
                </button>
              </FadeIn>
            </FadeIn>
            
            <FadeIn className="order-1 md:order-2 flex justify-center">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-1ysG1HNVas32NUSDsRSrdhL2OWIOMc.jpeg" 
                alt="Pasta carbonara, pizza margherita, and fried chicken with flowers" 
                className="w-full max-w-md object-cover rounded-[24px] shadow-2xl"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Interactive Gallery - Menu & Gallery Combined */}
      <InteractiveGallery />

      {/* Footer & Reserve Area */}
      <footer id="contact" className="bg-ink text-warm-white relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
           <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LhpxHzPwqU892eVO0QM9PrGz9UvRKy.png" alt="texture" className="w-full h-full object-cover mix-blend-overlay grayscale" />
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

            <div className="space-y-3">
              <p className="text-xs font-bold tracking-widest uppercase text-warm-white/60 mb-4">Follow Us</p>
              <div className="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group px-6 py-3 rounded-full border-2 border-terracotta bg-terracotta hover:bg-transparent text-white hover:text-terracotta font-semibold tracking-wide text-sm uppercase transition-all flex items-center gap-2">
                  <Instagram size={18} />
                  Instagram
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group px-6 py-3 rounded-full border-2 border-olive bg-olive hover:bg-transparent text-white hover:text-olive font-semibold tracking-wide text-sm uppercase transition-all flex items-center gap-2">
                  <Facebook size={18} />
                  Facebook
                </a>
              </div>
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
        
        <div className="border-t border-warm-white/10 py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <FadeIn className="mb-8">
              <h3 className="font-serif text-3xl text-warm-white mb-2">Visit Us</h3>
              <p className="text-warm-white/70">Find us nestled in the hills of Mataasnakahoy overlooking Taal Lake</p>
            </FadeIn>
            <div className="rounded-[24px] overflow-hidden shadow-lg h-96 md:h-[500px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.9754316584766!2d121.08523!3d14.1214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd91d4d5d5d5d5%3A0x5d5d5d5d5d5d5d5d!2sMataasnakahoy%2C%20Batangas!5e0!3m2!1sen!2sph!4v1234567890" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
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
