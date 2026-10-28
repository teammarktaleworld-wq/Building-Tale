import React from 'react';
import { ShieldCheck, LineChart, Scale, Star } from 'lucide-react';
import { MOCK_TESTIMONIALS } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="insights" style={{ padding: '4.5rem 0', backgroundColor: 'var(--surface-bg)' }}>
      <div className="container">
        
        {/* Value Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Pillar 1 */}
          <div
            style={{
              padding: '1.75rem',
              backgroundColor: 'var(--surface-card)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'var(--primary-fixed)',
                color: 'var(--on-primary-fixed)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
              }}
            >
              <ShieldCheck size={28} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--on-surface)', marginBottom: '0.5rem' }}>
              Anti-Fake Listing Guarantee
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--secondary-muted)', lineHeight: 1.6 }}>
              Every listing published on Building Tale must possess an active Trakheesi Permit, title deed confirmation, and written owner authorization. Zero phantom inventory or stale prices.
            </p>
          </div>

          {/* Pillar 2 */}
          <div
            style={{
              padding: '1.75rem',
              backgroundColor: 'var(--surface-card)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'var(--surface-container)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
              }}
            >
              <LineChart size={28} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--on-surface)', marginBottom: '0.5rem' }}>
              Transparent Cadastral Data
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--secondary-muted)', lineHeight: 1.6 }}>
              Direct integration with Dubai REST and DLD historical transaction ledgers empowers buyers to analyze true closing prices and historical capital growth before submitting binding offers.
            </p>
          </div>

          {/* Pillar 3 */}
          <div
            style={{
              padding: '1.75rem',
              backgroundColor: 'var(--surface-card)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'var(--tertiary-fixed)',
                color: 'var(--on-tertiary-fixed)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
              }}
            >
              <Scale size={28} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--on-surface)', marginBottom: '0.5rem' }}>
              Dedicated In-House Conveyancing
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--secondary-muted)', lineHeight: 1.6 }}>
              Our licensed legal conveyancers manage Form F (Unified Sales Contract), developer NOC issuance, escrow settlements, and trustee office transfers seamlessly from offer to title handover.
            </p>
          </div>
        </div>

        {/* Testimonials Band */}
        <div
          style={{
            backgroundColor: 'var(--surface-low)',
            border: '1px solid var(--border)',
            padding: '2.5rem 2rem',
          }}
        >
          <div style={{ marginBottom: '2rem' }}>
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
              Global Client Trust
            </div>
            <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: 'var(--on-surface)' }}>
              Verified Investor Testimonials
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {MOCK_TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: 'var(--surface-card)',
                  border: '1px solid var(--border)',
                  padding: '1.5rem',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  {/* Star Rating */}
                  <div style={{ display: 'flex', gap: '3px', color: 'var(--tertiary)', marginBottom: '1rem' }}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="var(--tertiary)" />
                    ))}
                  </div>

                  <p
                    style={{
                      fontSize: '13px',
                      color: 'var(--on-surface)',
                      lineHeight: 1.6,
                      fontStyle: 'italic',
                      marginBottom: '1.25rem',
                    }}
                  >
                    "{item.quote}"
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--border)',
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      backgroundColor: 'var(--surface-container)',
                      color: 'var(--primary)',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '13px',
                    }}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 700, color: 'var(--on-surface)' }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--secondary-muted)' }}>
                      {item.role} • {item.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
