import React, { useState } from 'react';
import type { Property } from '../types';
import { PropertyCard } from './PropertyCard';

interface FeaturedPropertiesProps {
  properties: Property[];
  savedProperties: string[];
  onToggleSave: (id: string) => void;
  onSelectProperty: (property: Property) => void;
  currency: string;
  onResetFilters?: () => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  properties,
  savedProperties,
  onToggleSave,
  onSelectProperty,
  currency,
  onResetFilters,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'villas' | 'waterfront' | 'roi'>('all');

  const filteredProperties = properties.filter((p) => {
    if (activeFilter === 'villas') return p.category === 'villa';
    if (activeFilter === 'waterfront') {
      return (
        p.location.toLowerCase().includes('marina') ||
        p.location.toLowerCase().includes('palm') ||
        p.location.toLowerCase().includes('waterfront') ||
        p.location.toLowerCase().includes('canal')
      );
    }
    if (activeFilter === 'roi') return (p.yieldPercent || 0) >= 8.0;
    return true;
  });

  return (
    <section
      id="featured-residences"
      style={{
        padding: '4.5rem 0',
        backgroundColor: 'var(--surface-low)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container">
        
        {/* Section Header & Interactive Filter Tabs */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2.5rem',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'var(--tertiary)',
                letterSpacing: '0.08em',
                marginBottom: '4px',
              }}
            >
              Building Tale Verified Index
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                color: 'var(--on-surface)',
                lineHeight: 1.2,
              }}
            >
              Curated Featured Residences
            </h2>
          </div>

          {/* Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '4px',
              backgroundColor: '#ffffff',
              padding: '4px',
              border: '1px solid var(--border-strong)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <button
              onClick={() => setActiveFilter('all')}
              className="btn"
              style={{
                padding: '0.4rem 1rem',
                fontSize: '12px',
                backgroundColor: activeFilter === 'all' ? 'var(--primary)' : 'transparent',
                color: activeFilter === 'all' ? '#ffffff' : 'var(--secondary-muted)',
                border: 'none',
              }}
            >
              All Featured
            </button>
            <button
              onClick={() => setActiveFilter('villas')}
              className="btn"
              style={{
                padding: '0.4rem 1rem',
                fontSize: '12px',
                backgroundColor: activeFilter === 'villas' ? 'var(--primary)' : 'transparent',
                color: activeFilter === 'villas' ? '#ffffff' : 'var(--secondary-muted)',
                border: 'none',
              }}
            >
              Luxury Villas
            </button>
            <button
              onClick={() => setActiveFilter('waterfront')}
              className="btn"
              style={{
                padding: '0.4rem 1rem',
                fontSize: '12px',
                backgroundColor: activeFilter === 'waterfront' ? 'var(--primary)' : 'transparent',
                color: activeFilter === 'waterfront' ? '#ffffff' : 'var(--secondary-muted)',
                border: 'none',
              }}
            >
              Waterfront Living
            </button>
            <button
              onClick={() => setActiveFilter('roi')}
              className="btn"
              style={{
                padding: '0.4rem 1rem',
                fontSize: '12px',
                backgroundColor: activeFilter === 'roi' ? 'var(--primary)' : 'transparent',
                color: activeFilter === 'roi' ? '#ffffff' : 'var(--secondary-muted)',
                border: 'none',
              }}
            >
              High ROI (8%+)
            </button>
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                isSaved={savedProperties.includes(property.id)}
                onToggleSave={onToggleSave}
                onSelectProperty={onSelectProperty}
                currency={currency}
              />
            ))}
          </div>
        ) : (
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--border)',
              padding: '3rem 1.5rem',
              textAlign: 'center',
            }}
          >
            <h3 style={{ fontSize: '18px', marginBottom: '0.5rem', color: 'var(--on-surface)' }}>
              No properties matched your specific filter
            </h3>
            <p style={{ color: 'var(--secondary-muted)', fontSize: '14px', marginBottom: '1.25rem' }}>
              Try adjusting your price range, location, or select "All Featured".
            </p>
            {onResetFilters && (
              <button onClick={onResetFilters} className="btn btn-primary">
                Reset All Filters
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
