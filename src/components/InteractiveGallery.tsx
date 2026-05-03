import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rkS0vAYKg7s7U0DyV2HEIn0SLGVL1k.png",
    alt: "Wood-fired Margherita pizza with lake view",
    title: "Wood-Fired Classics",
    description: "Handcrafted pastas, rustic pizzas with fresh garden basil, and hearty stews from our wood-fired ovens."
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OOyqvcjh5hqivFbtPKdrLV3eCGC7zR.png",
    alt: "Berry pancake with whipped cream",
    title: "Morning Favorites",
    description: "Freshly baked pastries, artisanal sourdough, and hearty breakfast skillets with local free-range eggs."
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LhpxHzPwqU892eVO0QM9PrGz9UvRKy.png",
    alt: "Fried chicken, pasta, and fresh basil salad spread",
    title: "Culinary Variety",
    description: "A diverse selection showcasing our kitchen&apos;s versatility and commitment to farm-fresh ingredients."
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5kFWjRctIen0TBqpHTORm863SkaiPj.png",
    alt: "Pasta with meatballs and basil",
    title: "Garden-Inspired",
    description: "Fresh salads with just-harvested tomatoes, basil, and seasonal greens prepared simply and authentically."
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CqLSP0GubWsGckwhyHZAczJJVVhdaL.png",
    alt: "Braised meat stew with rice",
    title: "Comfort Classics",
    description: "Hearty, soul-warming dishes that celebrate slow-cooked tradition and authentic flavor."
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ndRUEjcdFcSA73QSvCuWJeFEy1uLN2.png",
    alt: "Margarita pizza with fresh basil",
    title: "Signature Dishes",
    description: "Our most beloved creations, perfected over time with the finest seasonal ingredients."
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-M4VjeBIXbM09b8KLK6LY4nAuzmoQdU.png",
    alt: "Grilled steak with roasted vegetables",
    title: "Farm-Fresh Refreshments",
    description: "Artisanal coffees, vibrant garden herb lemonades, and soothing floral teas blended in-house."
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e6qfnCOuyipCmlWEUYjrKYuSjalLnu.jpeg",
    alt: "Wood-fired Margherita pizza",
    title: "Sweet Endings",
    description: "Artisanal desserts balancing indulgence with freshness—berry tarts and homemade treasures."
  }
];

export function InteractiveGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStart - touchEnd > 50) {
      handleNext();
    }
    if (touchEnd - touchStart > 50) {
      handlePrevious();
    }
  };

  const currentImage = galleryImages[currentIndex];

  return (
    <>
      {/* Main Interactive Section */}
      <section id="experience" className="py-20 md:py-28 px-6 bg-warm-bg relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-olive/5 rounded-bl-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-12">
            <h2 className="font-serif text-5xl md:text-6xl leading-tight text-ink mb-4">
              Our <span className="italic text-olive">Menu & Gallery</span>
            </h2>
            <p className="text-base md:text-lg text-ink/70 font-light leading-relaxed max-w-2xl">
              Every dish tells a story. Explore our culinary creations and the moments they create.
            </p>
          </FadeIn>

          {/* Desktop Layout: Text left, Gallery right */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Text Content */}
            <FadeIn className="space-y-8 hidden md:block">
              <div>
                <h3 className="font-serif text-3xl text-ink mb-3">{currentImage.title}</h3>
                <p className="font-light text-ink/70 leading-relaxed text-base">
                  {currentImage.description}
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-4 pt-8 border-t border-ink/10">
                <button
                  onClick={handlePrevious}
                  className="p-3 rounded-full border border-ink/20 text-ink hover:bg-ink hover:text-warm-white transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <div className="flex-1">
                  <div className="flex gap-2">
                    {galleryImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1 transition-all ${
                          idx === currentIndex ? 'bg-olive w-8' : 'bg-ink/20 w-2 hover:bg-ink/40'
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  className="p-3 rounded-full border border-ink/20 text-ink hover:bg-ink hover:text-warm-white transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 text-olive font-semibold tracking-wide uppercase text-sm border-b-2 border-olive pb-1 hover:text-olive-dark hover:border-olive-dark transition-colors"
              >
                <Maximize2 size={16} />
                View Full Gallery
              </button>
            </FadeIn>

            {/* Right: Gallery Display */}
            <FadeIn>
              <div
                className="relative rounded-[24px] overflow-hidden bg-warm-white shadow-lg aspect-[3/4] md:aspect-auto md:h-[500px] cursor-grab active:cursor-grabbing"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="w-full h-full object-cover"
                />
                
                {/* Mobile Navigation Overlay */}
                <div className="absolute inset-0 flex md:hidden items-end justify-between p-4 bg-gradient-to-t from-black/40 to-transparent">
                  <button
                    onClick={handlePrevious}
                    className="p-2 rounded-full bg-white/90 text-ink hover:bg-white transition-all"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <div className="text-white font-light text-sm">
                    {currentIndex + 1} / {galleryImages.length}
                  </div>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-full bg-white/90 text-ink hover:bg-white transition-all"
                    aria-label="Next"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Mobile Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent md:hidden">
                  <h3 className="font-serif text-lg text-white mb-1">{currentImage.title}</h3>
                  <p className="font-light text-white/80 text-xs line-clamp-2">{currentImage.description}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Fullscreen Gallery Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="max-w-6xl w-full max-h-screen overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="font-serif text-4xl text-warm-white mb-2">{currentImage.title}</h2>
                <p className="font-light text-warm-white/70 max-w-xl">{currentImage.description}</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-3 hover:bg-warm-white/10 rounded-full transition-colors"
                aria-label="Close gallery"
              >
                <X size={28} className="text-warm-white" />
              </button>
            </div>

            {/* Main Image */}
            <div className="relative bg-black rounded-[20px] overflow-hidden mb-6 aspect-video">
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-4 gap-3 max-h-32 overflow-y-auto pb-6">
              {galleryImages.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative rounded-lg overflow-hidden aspect-square transition-all ${
                    idx === currentIndex ? 'ring-2 ring-olive scale-105' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Bottom Navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={handlePrevious}
                className="p-3 rounded-full border border-warm-white/20 text-warm-white hover:bg-warm-white hover:text-ink transition-all"
                aria-label="Previous"
              >
                <ChevronLeft size={28} />
              </button>
              <span className="text-warm-white/70 font-light">
                {currentIndex + 1} of {galleryImages.length}
              </span>
              <button
                onClick={handleNext}
                className="p-3 rounded-full border border-warm-white/20 text-warm-white hover:bg-warm-white hover:text-ink transition-all"
                aria-label="Next"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
