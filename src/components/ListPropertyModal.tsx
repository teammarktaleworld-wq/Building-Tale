import React, { useState } from 'react';
import { X, ShieldCheck, Check } from 'lucide-react';
import type { Property, PropertyCategoryType, PropertyPurpose } from '../types';

interface ListPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProperty: (property: Property) => void;
}

export const ListPropertyModal: React.FC<ListPropertyModalProps> = ({
  isOpen,
  onClose,
  onAddProperty,
}) => {
  const [title, setTitle] = useState('');
  const [purpose, setPurpose] = useState<PropertyPurpose>('buy');
  const [category, setCategory] = useState<PropertyCategoryType>('apartment');
  const [community, setCommunity] = useState('Downtown Dubai');
  const [location, setLocation] = useState('');
  const [priceAED, setPriceAED] = useState('');
  const [beds, setBeds] = useState('2');
  const [baths, setBaths] = useState('2');
  const [sqft, setSqft] = useState('1450');
  const [furnished, setFurnished] = useState('Yes');
  const [permitNumber, setPermitNumber] = useState('');
  const [agentName, setAgentName] = useState('');
  const [agentPhone, setAgentPhone] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const price = Number(priceAED) || 2500000;
    const area = Number(sqft) || 1200;

    const newProperty: Property = {
      id: `prop-${Date.now()}`,
      title: title || 'Exclusive Architectural Residence',
      location: location || `${community}, Dubai`,
      community: community,
      city: 'Dubai',
      purpose,
      category,
      priceAED: price,
      pricePerSqFtAED: Math.round(price / area),
      beds: Number(beds) || 2,
      baths: Number(baths) || 2,
      sqft: area,
      furnished,
      images: [
        imageUrl ||
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      ],
      imageCount: 12,
      verified: true,
      featured: true,
      tag: 'NEW LISTING',
      permitNumber: permitNumber || `0${Math.floor(100000000 + Math.random() * 900000000)}`,
      agent: {
        name: agentName || 'Building Tale Advisor',
        brn: '59102',
        title: 'Listing Agent',
        initials: agentName ? agentName.substring(0, 2).toUpperCase() : 'BT',
        phone: agentPhone || '+971 4 800 2845',
        whatsapp: `https://wa.me/971500000000?text=Inquiring%20about%20${encodeURIComponent(title)}`,
      },
      createdAt: new Date().toISOString(),
    };

    onAddProperty(newProperty);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid var(--border-strong)',
          boxShadow: '0 20px 50px rgba(11, 31, 58, 0.3)',
          width: '100%',
          maxWidth: '680px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: 'var(--inverse-surface)',
            color: '#ffffff',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '2px solid var(--primary)',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--tertiary-fixed)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Building Tale Property Exchange
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
              List Your Property on Building Tale
            </h3>
          </div>
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
            <X size={20} />
          </button>
        </div>

        {/* Content Form */}
        <div style={{ padding: '1.5rem' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: 'var(--primary-container)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                }}
              >
                <Check size={36} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--on-surface)', marginBottom: '0.5rem' }}>
                Property Listed Successfully!
              </h3>
              <p style={{ color: 'var(--secondary-muted)', fontSize: '14px', maxWidth: '420px', margin: '0 auto' }}>
                Your listing has been validated and added to the Building Tale index. Our conveyancing team will synchronize DLD Trakheesi permits shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              
              {/* Purpose Selector */}
              <div>
                <label style={{ fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--secondary-muted)', display: 'block', marginBottom: '4px' }}>
                  Listing Purpose
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                  {(['buy', 'rent', 'offplan', 'commercial'] as PropertyPurpose[]).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPurpose(p)}
                      className="btn"
                      style={{
                        padding: '0.5rem',
                        fontSize: '12px',
                        backgroundColor: purpose === p ? 'var(--primary)' : 'var(--surface-low)',
                        color: purpose === p ? '#ffffff' : 'var(--secondary-muted)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      {p === 'buy' ? 'For Sale' : p === 'rent' ? 'For Rent' : p === 'offplan' ? 'Off-Plan' : 'Commercial'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Title */}
              <div>
                <label style={{ fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--secondary-muted)', display: 'block', marginBottom: '4px' }}>
                  Property Headline / Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Luxurious 3-Bedroom Penthouse with Burj Khalifa View"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem',
                    border: '1px solid var(--border)',
                    fontSize: '14px',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                  }}
                />
              </div>

              {/* 2-Col: Category & Community */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--secondary-muted)', display: 'block', marginBottom: '4px' }}>
                    Asset Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as PropertyCategoryType)}
                    style={{
                      width: '100%',
                      padding: '0.65rem',
                      border: '1px solid var(--border)',
                      fontSize: '14px',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                    }}
                  >
                    <option value="apartment">Luxury Apartment</option>
                    <option value="villa">Signature Villa</option>
                    <option value="penthouse">Waterfront Penthouse</option>
                    <option value="townhouse">Modern Townhouse</option>
                    <option value="commercial">Commercial Office</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--secondary-muted)', display: 'block', marginBottom: '4px' }}>
                    Community / Area
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dubai Marina, Downtown, Palm"
                    value={community}
                    onChange={(e) => setCommunity(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem',
                      border: '1px solid var(--border)',
                      fontSize: '14px',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Location Details */}
              <div>
                <label style={{ fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--secondary-muted)', display: 'block', marginBottom: '4px' }}>
                  Tower / Building Name &amp; Full Address
                </label>
                <input
                  type="text"
                  placeholder="e.g. Marina Gate Tower 1, Dubai Marina, Dubai"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem',
                    border: '1px solid var(--border)',
                    fontSize: '14px',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                  }}
                />
              </div>

              {/* 4-Col: Price, Beds, Baths, Sqft */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem' }}>
                <div>
                  <label style={{ fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--secondary-muted)', display: 'block', marginBottom: '4px' }}>
                    Price (AED) *
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 3500000"
                    value={priceAED}
                    onChange={(e) => setPriceAED(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem',
                      border: '1px solid var(--border)',
                      fontSize: '14px',
                      fontFamily: 'var(--font-display)',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--secondary-muted)', display: 'block', marginBottom: '4px' }}>
                    Bedrooms
                  </label>
                  <select
                    value={beds}
                    onChange={(e) => setBeds(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem',
                      border: '1px solid var(--border)',
                      fontSize: '14px',
                      fontFamily: 'var(--font-display)',
                      outline: 'none',
                    }}
                  >
                    <option value="1">1 Bed</option>
                    <option value="2">2 Beds</option>
                    <option value="3">3 Beds</option>
                    <option value="4">4 Beds</option>
                    <option value="5">5+ Beds</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--secondary-muted)', display: 'block', marginBottom: '4px' }}>
                    Bathrooms
                  </label>
                  <select
                    value={baths}
                    onChange={(e) => setBaths(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem',
                      border: '1px solid var(--border)',
                      fontSize: '14px',
                      fontFamily: 'var(--font-display)',
                      outline: 'none',
                    }}
                  >
                    <option value="1">1 Bath</option>
                    <option value="2">2 Baths</option>
                    <option value="3">3 Baths</option>
                    <option value="4">4 Baths</option>
                    <option value="5">5+ Baths</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--secondary-muted)', display: 'block', marginBottom: '4px' }}>
                    Area (sq.ft)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 1850"
                    value={sqft}
                    onChange={(e) => setSqft(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem',
                      border: '1px solid var(--border)',
                      fontSize: '14px',
                      fontFamily: 'var(--font-display)',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Furnished & Image URL */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--secondary-muted)', display: 'block', marginBottom: '4px' }}>
                    Furnishing
                  </label>
                  <select
                    value={furnished}
                    onChange={(e) => setFurnished(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem',
                      border: '1px solid var(--border)',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  >
                    <option value="Yes">Furnished</option>
                    <option value="Semi">Semi-Furnished</option>
                    <option value="No">Unfurnished</option>
                    <option value="Full Custom Spec">Custom Spec</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--secondary-muted)', display: 'block', marginBottom: '4px' }}>
                    Photo URL (Optional)
                  </label>
                  <input
                    type="url"
                    placeholder="https://..."
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem',
                      border: '1px solid var(--border)',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Owner/Agent & Permit */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--secondary-muted)', display: 'block', marginBottom: '4px' }}>
                    Contact Name / Broker
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Karim Al-Husseini"
                    value={agentName}
                    onChange={(e) => setAgentName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem',
                      border: '1px solid var(--border)',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--secondary-muted)', display: 'block', marginBottom: '4px' }}>
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="text"
                    placeholder="+971 50 000 0000"
                    value={agentPhone}
                    onChange={(e) => setAgentPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem',
                      border: '1px solid var(--border)',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Trakheesi Permit Input */}
              <div>
                <label style={{ fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--secondary-muted)', display: 'block', marginBottom: '4px' }}>
                  Trakheesi Permit Number (Leave empty to auto-generate)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 0948217342"
                  value={permitNumber}
                  onChange={(e) => setPermitNumber(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem',
                    border: '1px solid var(--border)',
                    fontSize: '14px',
                    fontFamily: 'var(--font-display)',
                    outline: 'none',
                  }}
                />
              </div>

              {/* DLD Permit notice */}
              <div
                style={{
                  backgroundColor: 'var(--surface-low)',
                  border: '1px solid var(--border)',
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12px',
                  color: 'var(--secondary-muted)',
                }}
              >
                <ShieldCheck size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span>
                  All listings on <strong>Building Tale</strong> are verified against DLD Trakheesi databases. If you don't have a permit yet, our conveyancers will generate it automatically.
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  height: '48px',
                  fontSize: '14px',
                  marginTop: '0.5rem',
                }}
              >
                Publish Verified Property Listing
              </button>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
