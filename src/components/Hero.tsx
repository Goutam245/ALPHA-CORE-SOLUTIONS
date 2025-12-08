import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBg from '@/assets/hero-bg.png';

const Hero = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container-premium text-center">
        {/* Pre-headline */}
        <div
          className={`flex items-center justify-center gap-2 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <Shield className="w-5 h-5 text-primary" />
          <span className="text-sm md:text-base font-medium text-primary tracking-wide uppercase">
            {t('hero.preheadline')}
          </span>
          <Shield className="w-5 h-5 text-primary" />
        </div>

        {/* Main Headline */}
        <h1 className={`font-display text-hero font-bold mb-6 ${isRTL ? 'font-arabic' : ''}`}>
          <span
            className={`block text-foreground transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            {t('hero.headline1')}
          </span>
          <span
            className={`block gradient-text transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            {t('hero.headline2')}
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } ${isRTL ? 'font-arabic' : ''}`}
          style={{ transitionDelay: '800ms' }}
        >
          {t('hero.subheadline')}
        </p>

        {/* Description */}
        <p
          className={`text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } ${isRTL ? 'font-arabic' : ''}`}
          style={{ transitionDelay: '900ms' }}
        >
          {t('hero.description')}
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <a
            href="#services"
            className="btn-premium text-primary-foreground flex items-center gap-2 group"
          >
            <span className="relative z-10">{t('hero.cta.primary')}</span>
            <ArrowRight className={`w-5 h-5 relative z-10 transition-transform duration-300 group-hover:${isRTL ? '-translate-x-1' : 'translate-x-1'}`} />
          </a>
          <a
            href="#contact"
            className="btn-outline-premium flex items-center gap-2"
          >
            {t('hero.cta.secondary')}
          </a>
        </div>

        {/* Trust Badge */}
        <div
          className={`flex items-center justify-center gap-3 text-sm text-muted-foreground transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } ${isRTL ? 'font-arabic' : ''}`}
          style={{ transitionDelay: '1200ms' }}
        >
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>{t('hero.trust')}</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '1400ms' }}
      >
        <a
          href="#trust"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
