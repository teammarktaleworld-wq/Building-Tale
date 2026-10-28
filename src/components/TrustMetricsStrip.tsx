import React from 'react';
import { ShieldCheck, Building2, TrendingUp, Award } from 'lucide-react';
import { TRUST_METRICS } from '../data/mockData';

export const TrustMetricsStrip: React.FC = () => {
  const icons = [
    <ShieldCheck size={24} color="var(--primary)" />,
    <Building2 size={24} color="var(--secondary)" />,
    <TrendingUp size={24} color="var(--tertiary)" />,
    <Award size={24} color="var(--primary)" />,
  ];

  return (
    <section
      style={{
        backgroundColor: 'var(--surface-high)',
        padding: '2.5rem 0',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {TRUST_METRICS.map((metric, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--surface-card)',
                border: '1px solid var(--border)',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                boxShadow: 'var(--shadow-card)',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  backgroundColor: 'var(--surface-low)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  border: '1px solid var(--border)',
                }}
              >
                {icons[idx]}
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '17px',
                    fontWeight: 700,
                    color: 'var(--on-surface)',
                    marginBottom: '4px',
                  }}
                >
                  {metric.title}
                </h4>
                <p
                  style={{
                    fontSize: '12px',
                    color: 'var(--secondary-muted)',
                    lineHeight: 1.45,
                  }}
                >
                  {metric.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
