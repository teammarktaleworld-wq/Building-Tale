import React, { useState } from 'react';
import { X, Check, Star, ShieldCheck } from 'lucide-react';

interface GoldenVisaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoldenVisaModal: React.FC<GoldenVisaModalProps> = ({ isOpen, onClose }) => {
  const [budget, setBudget] = useState('AED 2.0M - 5.0M');
  const [propertyStatus, setPropertyStatus] = useState('Ready Property');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eligible, setEligible] = useState<boolean | null>(null);

  if (!isOpen) return null;

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setEligible(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid var(--border-strong)',
          boxShadow: '0 25px 60px rgba(11, 31, 58, 0.35)',
          width: '100%',
          maxWidth: '560px',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            backgroundColor: 'var(--inverse-surface)',
            color: '#ffffff',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '2px solid var(--tertiary)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Star size={18} color="var(--tertiary-fixed)" />
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
              UAE 10-Year Golden Visa Pre-Assessment
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

        <div style={{ padding: '1.75rem' }}>
          {eligible ? (
            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  backgroundColor: 'var(--primary-container)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem auto',
                }}
              >
                <Check size={32} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--on-surface)', marginBottom: '0.5rem' }}>
                Preliminary Pre-Approval Match
              </h3>
              <p style={{ color: 'var(--secondary-muted)', fontSize: '13px', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Based on your planned investment threshold of <strong>{budget}</strong> in <strong>{propertyStatus}</strong>, you qualify for the UAE 10-Year Renewable Golden Visa. Our dedicated Dubai Land Department conveyancer has received your file and will contact you via WhatsApp shortly.
              </p>
              <button onClick={onClose} className="btn btn-primary" style={{ width: '100%' }}>
                Close Pre-Assessment
              </button>
            </div>
          ) : (
            <form onSubmit={handleCheck} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--secondary-muted)', display: 'block', marginBottom: '4px' }}>
                  Target Real Estate Investment Size
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem',
                    border: '1px solid var(--border)',
                    fontSize: '14px',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    outline: 'none',
                  }}
                >
                  <option value="AED 2.0M - 5.0M">AED 2,000,000 - 5,000,000 (Qualifies for 10-Yr Visa)</option>
                  <option value="AED 5.0M - 15.0M">AED 5,000,000 - 15,000,000 (Ultra Prime)</option>
                  <option value="AED 15.0M+">AED 15,000,000+ (Mansion / Penthouse Portfolio)</option>
                  <option value="Under AED 2.0M">Under AED 2,000,000 (Standard 2-Yr Residency)</option>
                </select>
              </div>

              <div>
                <label style={{ fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--secondary-muted)', display: 'block', marginBottom: '4px' }}>
                  Property Acquisition Structure
                </label>
                <select
                  value={propertyStatus}
                  onChange={(e) => setPropertyStatus(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem',
                    border: '1px solid var(--border)',
                    fontSize: '14px',
                    fontFamily: 'var(--font-display)',
                    outline: 'none',
                  }}
                >
                  <option value="Ready Property">Ready Property (Title Deed in Hand)</option>
                  <option value="Off-Plan Staged">Off-Plan Developer Launch (Payment Staged)</option>
                  <option value="Mortgaged Property">Mortgaged Property (UAE Bank Pre-Approved)</option>
                  <option value="Commercial Asset">Grade-A Commercial Property</option>
                </select>
              </div>

              <div>
                <label style={{ fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--secondary-muted)', display: 'block', marginBottom: '4px' }}>
                  Applicant Full Legal Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Julia Schmidt"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem',
                    border: '1px solid var(--border)',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={{ fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--secondary-muted)', display: 'block', marginBottom: '4px' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@investor.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 000 0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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

              <div
                style={{
                  backgroundColor: 'var(--surface-low)',
                  border: '1px solid var(--border)',
                  padding: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12px',
                  color: 'var(--secondary-muted)',
                }}
              >
                <ShieldCheck size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span>
                  Building Tale guarantees strict confidentiality under UAE Federal Decree Law No. 45/2021 regarding Personal Data Protection.
                </span>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ height: '48px', fontSize: '13px', marginTop: '0.5rem' }}
              >
                Evaluate Visa Eligibility &amp; Request Callback
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
