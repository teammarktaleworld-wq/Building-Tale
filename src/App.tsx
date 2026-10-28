import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSearch } from './components/HeroSearch';
import { TrustMetricsStrip } from './components/TrustMetricsStrip';
import { AssetCategories } from './components/AssetCategories';
import { FeaturedProperties } from './components/FeaturedProperties';
import { OffPlanLaunches } from './components/OffPlanLaunches';
import { MortgageCalculator } from './components/MortgageCalculator';
import { GoldenVisaBanner } from './components/GoldenVisaBanner';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PreFooterBanner } from './components/PreFooterBanner';
import { Footer } from './components/Footer';
import { ListPropertyModal } from './components/ListPropertyModal';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { GoldenVisaModal } from './components/GoldenVisaModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MOCK_PROPERTIES } from './data/mockData';
import type { Property, PropertyCategoryType, PropertyPurpose, OffPlanLaunch } from './types';

export function App() {
  const [properties, setProperties] = useState<Property[]>(MOCK_PROPERTIES);
  const [savedProperties, setSavedProperties] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('bt_saved_props');
      return saved ? JSON.parse(saved) : ['prop-1'];
    } catch {
      return ['prop-1'];
    }
  });

  const [currency, setCurrency] = useState('AED');
  const [unit, setUnit] = useState('sq.ft');
  const [activeNav, setActiveNav] = useState('buy');
  const [activePurpose, setActivePurpose] = useState<PropertyPurpose>('buy');
  const [selectedCategory, setSelectedCategory] = useState<PropertyCategoryType | 'all'>('all');

  // Search filter states
  const [searchFilter, setSearchFilter] = useState<{
    location?: string;
    type?: string;
    beds?: string;
    minPrice?: string;
    maxPrice?: string;
    naturalQuery?: string;
  }>({});

  // Modals state
  const [isListModalOpen, setIsListModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isGoldenVisaOpen, setIsGoldenVisaOpen] = useState(false);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Sync wishlist to local storage
  const handleToggleSave = (id: string) => {
    setSavedProperties((prev) => {
      const next = prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id];
      try {
        localStorage.setItem('bt_saved_props', JSON.stringify(next));
      } catch {
        // ignore
      }
      showToast(next.includes(id) ? 'Property saved to wishlist' : 'Removed from wishlist');
      return next;
    });
  };

  // Add new property
  const handleAddProperty = (newProp: Property) => {
    setProperties((prev) => [newProp, ...prev]);
    showToast(`Property "${newProp.title}" listed successfully!`);
  };

  // Search trigger from Hero
  const handleSearch = (filters: {
    purpose: PropertyPurpose;
    location: string;
    type: string;
    beds: string;
    minPrice: string;
    maxPrice: string;
    naturalQuery?: string;
  }) => {
    setActivePurpose(filters.purpose);
    setSearchFilter(filters);
    showToast(`Filtering properties in ${filters.location}...`);
  };

  // Category filter trigger
  const handleSelectCategory = (category: PropertyCategoryType) => {
    setSelectedCategory((prev) => (prev === category ? 'all' : category));
    showToast(`Browsing ${category.toUpperCase()} properties`);
  };

  // Filtered properties computation
  const filteredProperties = properties.filter((p) => {
    // Purpose filter
    if (activePurpose && p.purpose !== activePurpose) {
      // allow cross matching if user didn't specifically enforce strictly rent
    }

    // Category filter
    if (selectedCategory !== 'all' && p.category !== selectedCategory) {
      return false;
    }

    // Location search
    if (searchFilter.location && searchFilter.location.trim() !== '') {
      const locMatch =
        p.location.toLowerCase().includes(searchFilter.location.toLowerCase()) ||
        p.community.toLowerCase().includes(searchFilter.location.toLowerCase()) ||
        p.title.toLowerCase().includes(searchFilter.location.toLowerCase());
      if (!locMatch) return false;
    }

    // Natural language query search
    if (searchFilter.naturalQuery && searchFilter.naturalQuery.trim() !== '') {
      const q = searchFilter.naturalQuery.toLowerCase();
      const text = `${p.title} ${p.location} ${p.community} ${p.description || ''}`.toLowerCase();
      // check if any key word appears
      const words = q.split(' ').filter((w) => w.length > 3);
      if (words.length > 0) {
        const matchesAny = words.some((w) => text.includes(w));
        if (!matchesAny) return false;
      }
    }

    return true;
  });

  const handleResetFilters = () => {
    setSearchFilter({});
    setSelectedCategory('all');
    setActivePurpose('buy');
    showToast('Filters reset to default view');
  };

  // Scroll animations observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, [filteredProperties]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            top: '90px',
            right: '20px',
            backgroundColor: 'var(--inverse-surface)',
            color: '#ffffff',
            border: '1px solid var(--primary)',
            padding: '0.75rem 1.25rem',
            fontFamily: 'var(--font-display)',
            fontSize: '13px',
            fontWeight: 600,
            zIndex: 1000,
            boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
          className="animate-fade-in-up"
        >
          <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--primary)' }} />
          {toastMessage}
        </div>
      )}

      {/* Fixed Header */}
      <Navbar
        onOpenListModal={() => setIsListModalOpen(true)}
        savedCount={savedProperties.length}
        currency={currency}
        setCurrency={setCurrency}
        unit={unit}
        setUnit={setUnit}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />

      {/* Main Page Flow */}
      <main style={{ flex: 1 }}>
        {/* Hero & Smart Search Console */}
        <HeroSearch
          onSearch={handleSearch}
          activePurpose={activePurpose}
          setActivePurpose={setActivePurpose}
        />

        {/* Regulatory & Trust Metrics Strip */}
        <TrustMetricsStrip />

        {/* Prime Asset Categories Grid */}
        <AssetCategories
          onSelectCategory={handleSelectCategory}
          selectedCategory={selectedCategory}
        />

        {/* Curated Featured Properties Showcase */}
        <FeaturedProperties
          properties={filteredProperties}
          savedProperties={savedProperties}
          onToggleSave={handleToggleSave}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          currency={currency}
          onResetFilters={handleResetFilters}
        />

        {/* New Off-Plan Launches */}
        <OffPlanLaunches
          onRegisterInterest={(proj: OffPlanLaunch) => {
            showToast(`Interest registered for ${proj.title}. A developer representative will connect via WhatsApp.`);
          }}
          currency={currency}
        />

        {/* Interactive PropTech Mortgage & Yield Calculator */}
        <MortgageCalculator
          onPreApprove={() => {
            showToast('Mortgage pre-approval checklist initiated. Connecting to UAE Central Bank partner lenders...');
          }}
        />

        {/* Golden Visa Investment Advisory Banner */}
        <GoldenVisaBanner
          onCheckEligibility={() => setIsGoldenVisaOpen(true)}
          onConsultAdvisor={() => setIsGoldenVisaOpen(true)}
        />

        {/* Value Pillars & Client Testimonials */}
        <TestimonialsSection />

        {/* Pre-Footer Landlord Lead Banner */}
        <PreFooterBanner
          onOpenListModal={() => setIsListModalOpen(true)}
          onRequestValuation={() => {
            showToast('Instant AI Valuation requested. Generating comparative market report...');
          }}
        />
      </main>

      {/* Multi-Column Institutional Footer */}
      <Footer />

      {/* Floating WhatsApp Real Estate Advisor */}
      <FloatingWhatsApp />

      {/* Modals & Overlays */}
      <ListPropertyModal
        isOpen={isListModalOpen}
        onClose={() => setIsListModalOpen(false)}
        onAddProperty={handleAddProperty}
      />

      <PropertyDetailModal
        property={selectedProperty}
        isOpen={selectedProperty !== null}
        onClose={() => setSelectedProperty(null)}
        isSaved={selectedProperty ? savedProperties.includes(selectedProperty.id) : false}
        onToggleSave={handleToggleSave}
        currency={currency}
      />

      <GoldenVisaModal
        isOpen={isGoldenVisaOpen}
        onClose={() => setIsGoldenVisaOpen(false)}
      />

    </div>
  );
}

export default App;
