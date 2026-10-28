import React from 'react';
import { Heart, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import type { Property } from '../types';

interface PropertyCardProps {
  property: Property;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onSelectProperty: (property: Property) => void;
  currency: string;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  isSaved,
  onToggleSave,
  onSelectProperty,
  currency,
}) => {
  // Currency formatter
  const formatPrice = (valAED: number) => {
    let rate = 1;
    let symbol = 'AED';
    if (currency === 'USD') {
      rate = 0.272;
      symbol = '$';
    } else if (currency === 'EUR') {
      rate = 0.25;
      symbol = '€';
    } else if (currency === 'GBP') {
      rate = 0.215;
      symbol = '£';
    }
    const converted = Math.round(valAED * rate);
    return `${symbol} ${converted.toLocaleString('en-US')}`;
  };

  return (
    <div className="property-card">
      {/* Media & Badges */}
      <div className="property-media" onClick={() => onSelectProperty(property)} style={{ cursor: 'pointer' }}>
        <img
          src={property.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'}
          alt={property.title}
          className="property-image"
          loading="lazy"
        />

        {/* Badges Overlay */}
        <div
          style={{
            position: 'absolute',
            top: '0.85rem',
            left: '0.85rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            alignItems: 'flex-start',
            zIndex: 2,
          }}
        >
          {property.verified && (
            <span className="badge badge-verified">
              <ShieldCheck size={13} /> VERIFIED
            </span>
          )}
          {property.tag && (
            <span className={`badge ${property.tag.includes('EXCLUSIVE') ? 'badge-exclusive' : 'badge-featured'}`}>
              {property.tag}
            </span>
          )}
        </div>

        {/* Media Count & Save Heart */}
        <div
          style={{
            position: 'absolute',
            top: '0.85rem',
            right: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            zIndex: 2,
          }}
        >
          <span
            style={{
              backgroundColor: 'rgba(11, 31, 58, 0.85)',
              backdropFilter: 'blur(4px)',
              color: '#ffffff',
              padding: '2px 6px',
              fontFamily: 'var(--font-display)',
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.05em',
            }}
          >
            1/{property.imageCount} PHOTOS
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(property.id);
            }}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
              border: 'none',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: isSaved ? 'var(--primary)' : 'var(--on-surface)',
              transition: 'transform 0.2s ease',
            }}
            title={isSaved ? 'Remove from Saved' : 'Save Property'}
          >
            <Heart size={16} fill={isSaved ? 'var(--primary)' : 'none'} color={isSaved ? 'var(--primary)' : 'currentColor'} />
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
        <div>
          {/* Price Header */}
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '4px' }}>
            <div
              className="tabular-nums"
              style={{
                fontSize: '1.35rem',
                fontWeight: 700,
                color: 'var(--on-surface)',
              }}
            >
              {formatPrice(property.priceAED)}
            </div>
            <div
              className="tabular-nums"
              style={{
                fontSize: '12px',
                color: 'var(--secondary-muted)',
                fontWeight: 500,
              }}
            >
              {currency === 'AED' ? `AED ${property.pricePerSqFtAED} / sq.ft` : ''}
            </div>
          </div>

          {/* Title */}
          <h3
            onClick={() => onSelectProperty(property)}
            style={{
              fontSize: '16px',
              fontWeight: 700,
              color: 'var(--on-surface)',
              marginBottom: '6px',
              lineHeight: 1.35,
              cursor: 'pointer',
              display: '-webkit-box',
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
            title={property.title}
          >
            {property.title}
          </h3>

          {/* Location */}
          <p
            style={{
              fontSize: '12px',
              color: 'var(--secondary-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              marginBottom: '1rem',
            }}
          >
            <MapPin size={14} color="var(--primary)" style={{ flexShrink: 0 }} />
            <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{property.location}</span>
          </p>

          {/* Specs Grid */}
          <div className="specs-grid" style={{ marginBottom: '1rem' }}>
            <div className="specs-cell">
              <div className="tabular-nums" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--on-surface)' }}>
                {property.beds > 0 ? property.beds : 'N/A'}
              </div>
              <div style={{ fontSize: '10px', color: 'var(--secondary-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Beds</div>
            </div>
            <div className="specs-cell">
              <div className="tabular-nums" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--on-surface)' }}>
                {property.baths}
              </div>
              <div style={{ fontSize: '10px', color: 'var(--secondary-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Baths</div>
            </div>
            <div className="specs-cell">
              <div className="tabular-nums" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--on-surface)' }}>
                {property.sqft.toLocaleString()}
              </div>
              <div style={{ fontSize: '10px', color: 'var(--secondary-muted)', textTransform: 'uppercase', fontWeight: 600 }}>sq.ft</div>
            </div>
            <div className="specs-cell">
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {property.furnished}
              </div>
              <div style={{ fontSize: '10px', color: 'var(--secondary-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Furnished</div>
            </div>
          </div>
        </div>

        {/* Footer Area */}
        <div>
          {/* Agent info & action buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '0.5rem',
              borderTop: '1px solid var(--border)',
              marginBottom: '0.5rem',
            }}
          >
            {/* Agent info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  backgroundColor: 'var(--surface-container)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '12px',
                  fontFamily: 'var(--font-display)',
                }}
              >
                {property.agent.initials}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '12px', fontWeight: 700, color: 'var(--on-surface)' }}>
                  {property.agent.name}
                </div>
                <div style={{ fontSize: '10px', color: 'var(--secondary-muted)' }}>BRN #{property.agent.brn}</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {/* WhatsApp direct */}
              <a
                href={property.agent.whatsapp || 'https://wa.me/971500000000'}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: 'var(--whatsapp)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                }}
                title="Chat on WhatsApp"
              >
                <MessageCircle size={16} />
              </a>

              {/* Call */}
              <a
                href={`tel:${property.agent.phone || '+97148002845'}`}
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: 'var(--surface-container)',
                  color: 'var(--on-surface)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                }}
                title="Call Agent"
              >
                <Phone size={15} />
              </a>

              {/* Book */}
              <button
                onClick={() => onSelectProperty(property)}
                className="btn btn-primary"
                style={{
                  padding: '0 0.6rem',
                  height: '32px',
                  fontSize: '11px',
                  fontWeight: 700,
                }}
              >
                Book
              </button>
            </div>
          </div>

          {/* Official Permit Line */}
          <div
            style={{
              fontSize: '10px',
              fontFamily: 'var(--font-display)',
              color: 'var(--secondary-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '4px',
              borderTop: '1px solid var(--border)',
            }}
          >
            <span>Permit No: {property.permitNumber}</span>
            <span style={{ color: 'var(--primary)', fontWeight: 700 }}>DLD Validated</span>
          </div>
        </div>
      </div>
    </div>
  );
};
