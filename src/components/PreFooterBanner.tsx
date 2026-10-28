import React from 'react';
import { Building, Check } from 'lucide-react';

interface PreFooterBannerProps {
  onOpenListModal: () => void;
  onRequestValuation: () => void;
}

export const PreFooterBanner: React.FC<PreFooterBannerProps> = ({
  onOpenListModal,
  onRequestValuation,
}) => {
  return (
    <section
      style={{
        backgroundColor: 'var(--surface-high)',
        padding: '4.5rem 0',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="container">
        <div
          style={{
            backgroundColor: 'var(--surface-card)',
            border: '1px solid var(--border)',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-hover)',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          {/* Left Details */}
          <div style={{ maxWidth: '640px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontFamily: 'var(--font-display)',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--tertiary)',
                marginBottom: '0.5rem',
              }}
            >
              <Building size={16} /> Landlord &amp; Owner Services
            </div>

            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: 700,
                color: 'var(--on-surface)',
                lineHeight: 1.2,
                marginBottom: '0.75rem',
              }}
            >
              Sell or Rent Your Dubai Property with Building Tale
            </h2>

            <p
              style={{
                fontSize: '14px',
                color: 'var(--secondary-muted)',
                lineHeight: 1.6,
                marginBottom: '1.25rem',
              }}
            >
              Reach 250,000+ active monthly high-intent buyers and corporate tenants. We handle compliant DLD listing permits, professional HDR architectural photography, and escrow protection.
            </p>

            {/* Checkmark benefits */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.25rem',
                fontSize: '12px',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                color: 'var(--on-surface-variant)',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Check size={16} color="var(--primary)" /> Instant Valuation
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Check size={16} color="var(--primary)" /> Zero Upfront Listing Fees
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Check size={16} color="var(--primary)" /> Same-Day Trakheesi Permit
              </span>
            </div>
          </div>

          {/* Right CTAs */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              width: '100%',
              maxWidth: '300px',
            }}
          >
            <button
              onClick={onOpenListModal}
              className="btn btn-primary"
              style={{ height: '48px', fontSize: '13px', width: '100%' }}
            >
              List Your Property For Free
            </button>
            <button
              onClick={onRequestValuation}
              className="btn btn-outline"
              style={{ height: '48px', fontSize: '13px', width: '100%' }}
            >
              Request Valuation
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
