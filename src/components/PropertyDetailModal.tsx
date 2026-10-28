import React, { useState } from 'react';
import { X, MapPin, ShieldCheck, Heart, MessageCircle, Phone, Check, ArrowRight } from 'lucide-react';
import type { Property } from '../types';

interface PropertyDetailModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  currency: string;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  isOpen,
  onClose,
  isSaved,
  onToggleSave,
  currency,
}) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryDate, setInquiryDate] = useState('');
  const [booked, setBooked] = useState(false);

  if (!isOpen || !property) return null;

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

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
    setTimeout(() => {
      setBooked(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid var(--border-strong)',
          boxShadow: '0 25px 60px rgba(11, 31, 58, 0.35)',
          width: '100%',
          maxWidth: '880px',
          maxHeight: '92vh',
          overflowY: 'auto',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div
          style={{
            backgroundColor: 'var(--inverse-surface)',
            color: '#ffffff',
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '2px solid var(--primary)',
            position: 'sticky',
            top: 0,
            zIndex: 30,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="badge badge-verified">
              <ShieldCheck size={14} /> DLD TRAKHEESI VERIFIED
            </span>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-display)', color: 'var(--tertiary-fixed)' }}>
              Permit #{property.permitNumber}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={() => onToggleSave(property.id)}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: isSaved ? 'var(--primary-fixed)' : '#ffffff',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              title="Save Property"
            >
              <Heart size={16} fill={isSaved ? 'var(--primary-fixed)' : 'none'} />
            </button>
            <button
              onClick={onClose}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                padding: '4px',
              }}
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Media Gallery */}
        <div style={{ position: 'relative', width: '100%', height: '360px', backgroundColor: 'var(--inverse-surface)' }}>
          <img
            src={property.images[activeImageIdx] || property.images[0]}
            alt={property.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />

          {/* Gallery Thumbnails Overlay */}
          {property.images.length > 1 && (
            <div
              style={{
                position: 'absolute',
                bottom: '12px',
                left: '12px',
                display: 'flex',
                gap: '6px',
                zIndex: 10,
              }}
            >
              {property.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  style={{
                    width: '48px',
                    height: '36px',
                    border: idx === activeImageIdx ? '2px solid var(--primary-fixed)' : '1px solid rgba(255,255,255,0.6)',
                    padding: 0,
                    cursor: 'pointer',
                    overflow: 'hidden',
                  }}
                >
                  <img src={img} alt={`Thumb ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div style={{ padding: '1.75rem' }}>
          
          {/* Top Title & Price Section */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ maxWidth: '580px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '4px' }}>
                <span className="badge badge-secondary">{property.category.toUpperCase()}</span>
                {property.tag && <span className="badge badge-exclusive">{property.tag}</span>}
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--on-surface)', lineHeight: 1.25, marginBottom: '6px' }}>
                {property.title}
              </h2>
              <p style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: 'var(--secondary-muted)' }}>
                <MapPin size={15} color="var(--primary)" /> {property.location}
              </p>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div className="tabular-nums" style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', lineHeight: 1.1 }}>
                {formatPrice(property.priceAED)}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--secondary-muted)', marginTop: '2px' }}>
                AED {property.pricePerSqFtAED} / sq.ft
              </div>
            </div>
          </div>

          {/* 4-Specs Hairline Grid */}
          <div className="specs-grid" style={{ marginBottom: '1.75rem' }}>
            <div className="specs-cell">
              <div className="tabular-nums" style={{ fontSize: '16px', fontWeight: 700, color: 'var(--on-surface)' }}>
                {property.beds > 0 ? property.beds : 'N/A'}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--secondary-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Bedrooms</div>
            </div>
            <div className="specs-cell">
              <div className="tabular-nums" style={{ fontSize: '16px', fontWeight: 700, color: 'var(--on-surface)' }}>
                {property.baths}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--secondary-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Bathrooms</div>
            </div>
            <div className="specs-cell">
              <div className="tabular-nums" style={{ fontSize: '16px', fontWeight: 700, color: 'var(--on-surface)' }}>
                {property.sqft.toLocaleString()}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--secondary-muted)', textTransform: 'uppercase', fontWeight: 700 }}>sq.ft Total</div>
            </div>
            <div className="specs-cell">
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--primary)' }}>
                {property.furnished}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--secondary-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Furnishing</div>
            </div>
          </div>

          {/* Description Narrative */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '14px', textTransform: 'uppercase', color: 'var(--secondary-muted)', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
              Architectural Overview
            </h4>
            <p style={{ fontSize: '14px', color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>
              {property.description ||
                'This verified prime residence represents an exceptional standard of architectural modernism in Dubai. Designed with floor-to-ceiling panoramic fenestration, premium bespoke finishes, acoustic insulation, and full regulatory title clearance with the Dubai Land Department.'}
            </p>
          </div>

          {/* Amenities Badges */}
          {property.amenities && (
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '14px', textTransform: 'uppercase', color: 'var(--secondary-muted)', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
                Curated Amenities &amp; Features
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {property.amenities.map((amenity, idx) => (
                  <span
                    key={idx}
                    style={{
                      backgroundColor: 'var(--surface-low)',
                      border: '1px solid var(--border)',
                      padding: '4px 10px',
                      fontSize: '12px',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      color: 'var(--on-surface)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <Check size={14} color="var(--primary)" /> {amenity}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Booking & Broker Contact Section */}
          <div
            style={{
              backgroundColor: 'var(--surface-low)',
              border: '1px solid var(--border)',
              padding: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    backgroundColor: 'var(--surface-container)',
                    color: 'var(--primary)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {property.agent.initials}
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 700, color: 'var(--on-surface)' }}>
                    {property.agent.name}
                  </h4>
                  <div style={{ fontSize: '12px', color: 'var(--secondary-muted)' }}>
                    BRN #{property.agent.brn} • {property.agent.title}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a
                  href={property.agent.whatsapp || 'https://wa.me/971500000000'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ height: '40px', padding: '0 1rem', fontSize: '12px' }}
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
                <a
                  href={`tel:${property.agent.phone || '+97148002845'}`}
                  className="btn btn-outline"
                  style={{ height: '40px', padding: '0 1rem', fontSize: '12px' }}
                >
                  <Phone size={15} /> Call
                </a>
              </div>
            </div>

            {/* Inquire / Schedule Viewing Form */}
            {booked ? (
              <div
                style={{
                  backgroundColor: 'var(--primary-container)',
                  color: '#ffffff',
                  padding: '1rem',
                  textAlign: 'center',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                }}
              >
                Viewing Request Confirmed! Our advisor will contact you within 15 minutes.
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.65rem' }}>
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={inquiryName}
                  onChange={(e) => setInquiryName(e.target.value)}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--border)',
                    padding: '0.6rem',
                    fontSize: '13px',
                    outline: 'none',
                  }}
                />
                <input
                  type="tel"
                  required
                  placeholder="Your Phone / WhatsApp *"
                  value={inquiryPhone}
                  onChange={(e) => setInquiryPhone(e.target.value)}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--border)',
                    padding: '0.6rem',
                    fontSize: '13px',
                    outline: 'none',
                  }}
                />
                <input
                  type="date"
                  value={inquiryDate}
                  onChange={(e) => setInquiryDate(e.target.value)}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--border)',
                    padding: '0.6rem',
                    fontSize: '13px',
                    outline: 'none',
                  }}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ height: '40px', fontSize: '12px' }}
                >
                  Schedule Private Viewing <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
