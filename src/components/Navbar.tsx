import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Plus } from 'lucide-react';

interface NavbarProps {
  onOpenListModal: () => void;
  savedCount: number;
  currency: string;
  setCurrency: (c: string) => void;
  unit: string;
  setUnit: (u: string) => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenListModal,
  savedCount,
  currency,
  setCurrency,
  unit,
  setUnit,
  activeNav,
  setActiveNav,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'EN' | 'AR'>('EN');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'buy', label: 'Buy' },
    { id: 'rent', label: 'Rent' },
    { id: 'off-plan', label: 'Off-Plan' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'new-projects', label: 'New Projects' },
    { id: 'calculators', label: 'Calculators' },
    { id: 'insights', label: 'Insights' },
  ];

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
        
        {/* Brand Logo & Name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveNav('buy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', color: 'inherit' }}
          >
            {/* Custom Architectural Building Tale Monogram Logo */}
            <div
              style={{
                width: '38px',
                height: '38px',
                backgroundColor: 'var(--primary)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '18px',
                letterSpacing: '-0.05em',
                fontFamily: 'var(--font-display)',
                border: '1px solid var(--border-strong)',
              }}
            >
              BT
            </div>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '18px',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  color: 'var(--on-surface)',
                  textTransform: 'uppercase',
                  display: 'block',
                  lineHeight: 1.1,
                }}
              >
                Building Tale
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '9px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: 'var(--primary)',
                  textTransform: 'uppercase',
                  display: 'block',
                }}
              >
                PropTech & Verified Assets
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hide-tablet" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeNav === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveNav(item.id);
                  const el = document.getElementById(item.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Global Utilities & CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          
          {/* Language, Currency, Metric Switcher Bar */}
          <div
            className="hide-mobile"
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'var(--surface-low)',
              border: '1px solid var(--border-strong)',
              height: '38px',
            }}
          >
            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === 'EN' ? 'AR' : 'EN')}
              style={{
                background: 'transparent',
                border: 'none',
                borderRight: '1px solid var(--border)',
                padding: '0 0.75rem',
                height: '100%',
                fontSize: '12px',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                cursor: 'pointer',
                color: 'var(--on-surface)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
              title="Toggle Language"
            >
              <span style={{ fontWeight: lang === 'EN' ? 700 : 400, color: lang === 'EN' ? 'var(--primary)' : 'inherit' }}>EN</span>
              <span style={{ color: 'var(--border-strong)' }}>|</span>
              <span style={{ fontWeight: lang === 'AR' ? 700 : 400, color: lang === 'AR' ? 'var(--primary)' : 'inherit' }}>العربية</span>
            </button>

            {/* Currency selector */}
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                borderRight: '1px solid var(--border)',
                padding: '0 0.5rem',
                height: '100%',
                fontSize: '12px',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                color: 'var(--on-surface-variant)',
                cursor: 'pointer',
                outline: 'none',
              }}
            >
              <option value="AED">AED</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>

            {/* Unit selector */}
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                padding: '0 0.5rem',
                height: '100%',
                fontSize: '12px',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                color: 'var(--on-surface-variant)',
                cursor: 'pointer',
                outline: 'none',
              }}
            >
              <option value="sq.ft">sq.ft</option>
              <option value="sq.m">sq.m</option>
            </select>
          </div>

          {/* Saved wishlist count */}
          <button
            style={{
              position: 'relative',
              background: 'transparent',
              border: '1px solid var(--border)',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--on-surface)',
              transition: 'border-color 0.2s',
            }}
            title="Saved Properties"
            onClick={() => {
              const el = document.getElementById('featured-residences');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Heart size={18} fill={savedCount > 0 ? 'var(--primary)' : 'none'} color={savedCount > 0 ? 'var(--primary)' : 'currentColor'} />
            {savedCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  backgroundColor: 'var(--primary)',
                  color: '#ffffff',
                  fontSize: '10px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-display)',
                  width: '16px',
                  height: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: 1,
                }}
              >
                {savedCount}
              </span>
            )}
          </button>

          {/* List Your Property CTA */}
          <button
            onClick={onOpenListModal}
            className="btn btn-outline"
            style={{
              height: '38px',
              padding: '0 1rem',
              fontSize: '12px',
              borderColor: 'var(--tertiary-container)',
              color: 'var(--tertiary-container)',
              fontWeight: 700,
            }}
          >
            <Plus size={16} />
            <span className="hide-mobile">List Your Property</span>
            <span style={{ display: 'none' }} className="show-mobile-inline">List</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'transparent',
              border: '1px solid var(--border-strong)',
              width: '38px',
              height: '38px',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            className="show-tablet-flex"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            backgroundColor: '#ffffff',
            borderBottom: '2px solid var(--primary)',
            boxShadow: '0 10px 25px rgba(11,31,58,0.15)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            zIndex: 99,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '16px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  color: activeNav === item.id ? 'var(--primary)' : 'var(--on-surface)',
                  textDecoration: 'none',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid var(--border)',
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveNav(item.id);
                  setMobileMenuOpen(false);
                  const el = document.getElementById(item.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', paddingTop: '0.5rem' }}>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenListModal(); }}
              className="btn btn-primary"
              style={{ width: '100%', height: '44px' }}
            >
              <Plus size={16} /> List Your Property
            </button>
          </div>
        </div>
      )}

      {/* Responsive Inline CSS rules for navbar helper */}
      <style>{`
        @media (max-width: 1024px) {
          .show-tablet-flex { display: flex !important; }
        }
        @media (max-width: 640px) {
          .show-mobile-inline { display: inline !important; }
        }
      `}</style>
    </header>
  );
};
