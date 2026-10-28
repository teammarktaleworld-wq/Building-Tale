import React from 'react';
import { Star, CheckCircle, ShieldCheck, DollarSign, Users, Scale } from 'lucide-react';

interface GoldenVisaBannerProps {
  onCheckEligibility: () => void;
  onConsultAdvisor: () => void;
}

export const GoldenVisaBanner: React.FC<GoldenVisaBannerProps> = ({
  onCheckEligibility,
  onConsultAdvisor,
}) => {
  return (
    <section
      id="golden-visa"
      style={{
        backgroundColor: 'var(--inverse-surface)',
        color: 'var(--inverse-on-surface)',
        padding: '4.5rem 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      {/* Subtle Constructivist Architectural Watermark */}
      <div
        style={{
          position: 'absolute',
          right: '-50px',
          bottom: '-50px',
          width: '380px',
          height: '380px',
          opacity: 0.04,
          pointerEvents: 'none',
        }}
      >
        <svg viewBox="0 0 100 100" fill="currentColor" width="100%" height="100%">
          <polygon points="50 0, 100 25, 100 75, 50 100, 0 75, 0 25" />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Details */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: 'rgba(200, 161, 101, 0.2)',
                color: 'var(--tertiary-fixed)',
                border: '1px solid var(--tertiary-container)',
                padding: '4px 10px',
                fontFamily: 'var(--font-display)',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '1rem',
              }}
            >
              <Star size={14} color="var(--tertiary-fixed)" />
              Official Residency By Investment Channel
            </div>

            <h2
              style={{
                color: '#ffffff',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                lineHeight: 1.15,
                marginBottom: '1rem',
              }}
            >
              UAE 10-Year Golden Visa via Property Investment
            </h2>

            <p
              style={{
                color: 'var(--surface-highest)',
                fontSize: '15px',
                lineHeight: 1.6,
                marginBottom: '1.75rem',
                maxWidth: '620px',
              }}
            >
              Invest AED 2,000,000+ ($545,000 USD) in UAE real estate to secure a 10-Year Renewable Residency Visa for you, your spouse, children, and domestic staff with zero personal or capital gains taxation.
            </p>

            {/* 3 Pillars */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem',
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <ShieldCheck size={24} color="var(--tertiary-fixed)" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 700, color: '#ffffff' }}>
                    100% Ownership
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--surface-variant)' }}>No local sponsor required</div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <DollarSign size={24} color="var(--tertiary-fixed)" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 700, color: '#ffffff' }}>
                    0% Tax Jurisdiction
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--surface-variant)' }}>Zero personal income tax</div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <Users size={24} color="var(--tertiary-fixed)" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 700, color: '#ffffff' }}>
                    Family Sponsorship
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--surface-variant)' }}>Spouse &amp; dependents</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <button
                onClick={onCheckEligibility}
                className="btn btn-tertiary"
                style={{ height: '48px', padding: '0 1.75rem' }}
              >
                Check Golden Visa Eligibility
              </button>
              <button
                onClick={onConsultAdvisor}
                className="btn btn-outline"
                style={{
                  height: '48px',
                  padding: '0 1.5rem',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  color: '#ffffff',
                }}
              >
                Consult an Investment Advisor
              </button>
            </div>
          </div>

          {/* Right Column: Fast-Track Processing Card */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              padding: '1.75rem',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
              <Scale size={24} color="var(--primary-fixed)" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
                Fast-Track Processing
              </h3>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {[
                'Pre-approved mortgaged properties accepted',
                'Off-plan payment threshold compliance',
                'End-to-end Dubai Land Dept conveyancing',
                'Emirates ID & VIP Medical support included',
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '13px', color: 'var(--surface-highest)' }}>
                  <CheckCircle size={16} color="var(--primary-fixed)" style={{ flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.35)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '0.75rem 1rem',
                fontFamily: 'var(--font-display)',
                fontSize: '12px',
                color: 'var(--tertiary-fixed)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>Average Approval Window:</span>
              <span style={{ fontWeight: 700 }}>7 to 10 Working Days</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
