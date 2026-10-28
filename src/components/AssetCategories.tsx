import React from 'react';
import {
  Building,
  Home,
  Crown,
  Trees,
  Briefcase,
  Compass,
  Store,
  Layers,
} from 'lucide-react';
import { ASSET_CATEGORIES } from '../data/mockData';
import type { PropertyCategoryType } from '../types';

interface AssetCategoriesProps {
  onSelectCategory: (category: PropertyCategoryType) => void;
  selectedCategory?: PropertyCategoryType | 'all';
}

export const AssetCategories: React.FC<AssetCategoriesProps> = ({
  onSelectCategory,
  selectedCategory,
}) => {
  const getIcon = (type: PropertyCategoryType) => {
    switch (type) {
      case 'apartment':
        return <Building size={26} />;
      case 'villa':
        return <Home size={26} />;
      case 'penthouse':
        return <Crown size={26} />;
      case 'townhouse':
        return <Trees size={26} />;
      case 'commercial':
        return <Briefcase size={26} />;
      case 'offplan':
        return <Compass size={26} />;
      case 'retail':
        return <Store size={26} />;
      case 'land':
        return <Layers size={26} />;
      default:
        return <Building size={26} />;
    }
  };

  return (
    <section style={{ padding: '4rem 0', backgroundColor: 'var(--surface-bg)' }} id="categories">
      <div className="container">
        
        {/* Section Header */}
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
                color: 'var(--primary)',
                letterSpacing: '0.08em',
                marginBottom: '4px',
              }}
            >
              Architectural Sectors
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                color: 'var(--on-surface)',
                lineHeight: 1.2,
              }}
            >
              Browse by Prime Asset Category
            </h2>
          </div>
          <p
            style={{
              fontSize: '14px',
              color: 'var(--secondary-muted)',
              maxWidth: '460px',
              lineHeight: 1.6,
            }}
          >
            Explore curated residential and commercial property classes structured for high capital appreciation and rental liquidity.
          </p>
        </div>

        {/* 8 Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {ASSET_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.type;
            return (
              <div
                key={cat.id}
                className="category-tile"
                style={{
                  borderColor: isSelected ? 'var(--primary)' : 'var(--border)',
                  backgroundColor: isSelected ? 'var(--surface-low)' : 'var(--surface-card)',
                }}
                onClick={() => {
                  onSelectCategory(cat.type);
                  const el = document.getElementById('featured-residences');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div
                  className="category-icon-box"
                  style={{
                    backgroundColor: isSelected ? 'var(--primary)' : 'var(--surface-container)',
                    color: isSelected ? '#ffffff' : 'var(--primary)',
                  }}
                >
                  {getIcon(cat.type)}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '17px',
                      fontWeight: 700,
                      color: 'var(--on-surface)',
                      marginBottom: '4px',
                    }}
                  >
                    {cat.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '12px',
                      color: 'var(--secondary-muted)',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    {cat.countLabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
