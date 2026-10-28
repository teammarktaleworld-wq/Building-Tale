import React, { useState } from 'react';
import { Search, Sparkles, MapPin, Building, Bed, DollarSign, ShieldCheck } from 'lucide-react';
import type { PropertyPurpose } from '../types';

interface HeroSearchProps {
  onSearch: (filters: {
    purpose: PropertyPurpose;
    location: string;
    type: string;
    beds: string;
    minPrice: string;
    maxPrice: string;
    naturalQuery?: string;
  }) => void;
  activePurpose: PropertyPurpose;
  setActivePurpose: (p: PropertyPurpose) => void;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({
  onSearch,
  activePurpose,
  setActivePurpose,
}) => {
  const [location, setLocation] = useState('Dubai Marina');
  const [propertyType, setPropertyType] = useState('Apartment');
  const [beds, setBeds] = useState('2 Beds');
  const [minPrice, setMinPrice] = useState('1.5M');
  const [maxPrice, setMaxPrice] = useState('6.0M');
  const [aiPrompt, setAiPrompt] = useState('');

  const handleSearchClick = () => {
    onSearch({
      purpose: activePurpose,
      location,
      type: propertyType,
      beds,
      minPrice,
      maxPrice,
      naturalQuery: aiPrompt,
    });
    // Smooth scroll to results
    const el = document.getElementById('featured-residences');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const applyChipFilter = (query: string, loc?: string, type?: string) => {
    setAiPrompt(query);
    if (loc) setLocation(loc);
    if (type) setPropertyType(type);
    onSearch({
      purpose: activePurpose,
      location: loc || location,
      type: type || propertyType,
      beds,
      minPrice,
      maxPrice,
      naturalQuery: query,
    });
    const el = document.getElementById('featured-residences');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" id="hero">
      {/* Cinematic Aerial Backdrop */}
      <div
        className="hero-backdrop"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBnS9dXSzlmQq8YYF3_UkYEW3pu9QAyIsIl2EWp2d0Cdl5Y6dC6WNkqTuuLZdNawBf5KfgoHoOafigp9NQIW8fpq6NnFFiU0tp4SNM_bhWGwXnkfeINxNK_aVL4Z-Z65CySp1kGyCn-xmDY7Jo3EB_3c0fIMOln4G3wvjidJx2dflTfIv-dtNaajU6Q8HNpZW8GBHLuLOBZHlmmUTxVicLP0Kw0hlk9WL5u6lZ1ChrtpkAkaNL_W97v')`,
        }}
      />
      {/* Deep Architectural Scrim */}
      <div className="hero-gradient" />

      <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        {/* Authority Pill Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(8px)',
            color: 'var(--tertiary-fixed)',
            fontFamily: 'var(--font-display)',
            fontSize: '11px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '1.25rem',
          }}
        >
          <ShieldCheck size={16} color="var(--tertiary-fixed)" />
          DLD &amp; Trakheesi Permit Regulated Real Estate Engine
        </div>

        {/* Hero Headline */}
        <h1
          style={{
            color: '#ffffff',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            lineHeight: 1.15,
            maxWidth: '900px',
            marginBottom: '1rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.4)',
          }}
        >
          Find Verified Homes &amp; Prime Investments Across the UAE
        </h1>

        <p
          style={{
            color: 'var(--surface-highest)',
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            maxWidth: '680px',
            lineHeight: 1.6,
            marginBottom: '2.5rem',
            fontWeight: 400,
          }}
        >
          Dubai’s premier data-driven portal for residential and commercial real estate. 100% Trakheesi-permit verified.
        </p>

        {/* Floating Smart Search Card */}
        <div className="search-console">
          
          {/* Top Purpose Tabs */}
          <div className="search-tabs">
            <button
              className={`search-tab-btn ${activePurpose === 'buy' ? 'active' : ''}`}
              onClick={() => setActivePurpose('buy')}
            >
              Buy
            </button>
            <button
              className={`search-tab-btn ${activePurpose === 'rent' ? 'active' : ''}`}
              onClick={() => setActivePurpose('rent')}
            >
              Rent
            </button>
            <button
              className={`search-tab-btn ${activePurpose === 'offplan' ? 'active' : ''}`}
              onClick={() => setActivePurpose('offplan')}
            >
              Off-Plan
            </button>
            <button
              className={`search-tab-btn ${activePurpose === 'commercial' ? 'active' : ''}`}
              onClick={() => setActivePurpose('commercial')}
            >
              Commercial
            </button>
          </div>

          {/* Unified Inputs Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '0.75rem',
              marginBottom: '1rem',
              textAlign: 'left',
            }}
          >
            {/* Location Input */}
            <div
              style={{
                backgroundColor: 'var(--surface-low)',
                padding: '0.65rem 0.85rem',
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <label
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--secondary-muted)',
                  letterSpacing: '0.04em',
                  marginBottom: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <MapPin size={13} color="var(--primary)" /> Community or Tower
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Dubai Marina, Downtown, Palm"
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  fontFamily: 'var(--font-display)',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--on-surface)',
                  width: '100%',
                }}
              />
            </div>

            {/* Property Type Selector */}
            <div
              style={{
                backgroundColor: 'var(--surface-low)',
                padding: '0.65rem 0.85rem',
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <label
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--secondary-muted)',
                  letterSpacing: '0.04em',
                  marginBottom: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <Building size={13} color="var(--primary)" /> Property Type
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  fontFamily: 'var(--font-display)',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--on-surface)',
                  width: '100%',
                  cursor: 'pointer',
                }}
              >
                <option value="All">All Types</option>
                <option value="Apartment">Apartment</option>
                <option value="Signature Villa">Signature Villa</option>
                <option value="Waterfront Penthouse">Waterfront Penthouse</option>
                <option value="Townhouse">Townhouse</option>
                <option value="Commercial">Grade-A Commercial</option>
              </select>
            </div>

            {/* Bedrooms Selector */}
            <div
              style={{
                backgroundColor: 'var(--surface-low)',
                padding: '0.65rem 0.85rem',
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <label
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--secondary-muted)',
                  letterSpacing: '0.04em',
                  marginBottom: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <Bed size={13} color="var(--primary)" /> Bedrooms
              </label>
              <select
                value={beds}
                onChange={(e) => setBeds(e.target.value)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  fontFamily: 'var(--font-display)',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--on-surface)',
                  width: '100%',
                  cursor: 'pointer',
                }}
              >
                <option value="Any">Any Beds</option>
                <option value="1 Bed">1 Bed</option>
                <option value="2 Beds">2 Beds</option>
                <option value="3 Beds">3 Beds</option>
                <option value="4+ Beds">4+ Beds</option>
                <option value="5+ Beds">5+ Beds (Mansions)</option>
              </select>
            </div>

            {/* Budget Range */}
            <div
              style={{
                backgroundColor: 'var(--surface-low)',
                padding: '0.65rem 0.85rem',
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                <label
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--secondary-muted)',
                    letterSpacing: '0.04em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <DollarSign size={13} color="var(--primary)" /> Price Range
                </label>
                <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--tertiary)' }} className="tabular-nums">AED TABULAR</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <input
                  type="text"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  style={{
                    width: '45%',
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--border)',
                    padding: '2px 6px',
                    fontSize: '13px',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    outline: 'none',
                  }}
                />
                <span style={{ color: 'var(--secondary-muted)', fontWeight: 600 }}>-</span>
                <input
                  type="text"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  style={{
                    width: '45%',
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--border)',
                    padding: '2px 6px',
                    fontSize: '13px',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    outline: 'none',
                  }}
                />
              </div>
            </div>
          </div>

          {/* AI Search & Main Submission */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'stretch',
              gap: '0.75rem',
              paddingTop: '0.25rem',
            }}
          >
            {/* Natural language AI prompt bar */}
            <div
              style={{
                flex: '1 1 320px',
                backgroundColor: 'var(--surface-low)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0 0.85rem',
                minHeight: '48px',
              }}
            >
              <Sparkles size={18} color="var(--tertiary)" style={{ flexShrink: 0 }} />
              <input
                type="text"
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                placeholder='Try AI Prompt: "Sea view 2-bed in Dubai Marina under AED 180k/yr with balcony"'
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  fontSize: '13px',
                  fontFamily: 'var(--font-body)',
                  color: 'var(--on-surface)',
                  width: '100%',
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSearchClick();
                }}
              />
            </div>

            {/* Primary Search CTA Button */}
            <button
              onClick={handleSearchClick}
              className="btn btn-primary"
              style={{
                padding: '0 1.75rem',
                minHeight: '48px',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '0.04em',
              }}
            >
              <Search size={18} />
              Search 18,500+ Properties
            </button>
          </div>

          {/* Smart Search Quick Chips */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '0.5rem',
              marginTop: '1rem',
              paddingTop: '0.5rem',
              borderTop: '1px solid var(--border)',
              textAlign: 'left',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'var(--secondary-muted)',
                letterSpacing: '0.04em',
                marginRight: '0.25rem',
              }}
            >
              Smart Search:
            </span>
            <button
              onClick={() => applyChipFilter('Palm Jumeirah beachfront luxury villa', 'Palm Jumeirah', 'Signature Villa')}
              className="btn"
              style={{
                padding: '0.25rem 0.6rem',
                fontSize: '11px',
                backgroundColor: 'var(--surface-container)',
                color: 'var(--on-secondary-container)',
                border: 'none',
              }}
            >
              ✨ Palm Jumeirah Beachfront
            </button>
            <button
              onClick={() => applyChipFilter('Downtown Burj Khalifa view residence', 'Downtown Dubai', 'Apartment')}
              className="btn"
              style={{
                padding: '0.25rem 0.6rem',
                fontSize: '11px',
                backgroundColor: 'var(--surface-container)',
                color: 'var(--on-secondary-container)',
                border: 'none',
              }}
            >
              ✨ Downtown Burj Khalifa View
            </button>
            <button
              onClick={() => applyChipFilter('High yield off-plan 8%+ ROI', 'Business Bay', 'All')}
              className="btn"
              style={{
                padding: '0.25rem 0.6rem',
                fontSize: '11px',
                backgroundColor: 'var(--surface-container)',
                color: 'var(--on-secondary-container)',
                border: 'none',
              }}
            >
              ✨ High-Yield Off-Plan 8%+ ROI
            </button>
            <button
              onClick={() => applyChipFilter('DIFC fitted corporate offices', 'DIFC', 'Commercial')}
              className="btn"
              style={{
                padding: '0.25rem 0.6rem',
                fontSize: '11px',
                backgroundColor: 'var(--surface-container)',
                color: 'var(--on-secondary-container)',
                border: 'none',
              }}
            >
              ✨ DIFC Fitted Offices
            </button>
          </div>

          {/* Popular Location Breadcrumbs */}
          <div
            style={{
              marginTop: '0.65rem',
              fontSize: '12px',
              color: 'var(--secondary-muted)',
              fontFamily: 'var(--font-display)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.4rem',
              alignItems: 'center',
              textAlign: 'left',
            }}
          >
            <strong style={{ color: 'var(--on-surface)' }}>Popular:</strong>
            {['Dubai Marina', 'Downtown Dubai', 'Palm Jumeirah', 'Dubai Hills Estate', 'Jumeirah Village Circle (JVC)', 'Business Bay'].map((loc, idx, arr) => (
              <React.Fragment key={loc}>
                <button
                  onClick={() => {
                    setLocation(loc);
                    onSearch({
                      purpose: activePurpose,
                      location: loc,
                      type: propertyType,
                      beds,
                      minPrice,
                      maxPrice,
                    });
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    font: 'inherit',
                    color: 'var(--secondary-muted)',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                >
                  {loc}
                </button>
                {idx < arr.length - 1 && <span>•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
