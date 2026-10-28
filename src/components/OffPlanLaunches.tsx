import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { MOCK_OFFPLAN_LAUNCHES } from '../data/mockData';
import type { OffPlanLaunch } from '../types';

interface OffPlanLaunchesProps {
  onRegisterInterest: (project: OffPlanLaunch) => void;
  currency: string;
}

export const OffPlanLaunches: React.FC<OffPlanLaunchesProps> = ({
  onRegisterInterest,
  currency,
}) => {
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
    <section id="off-plan" style={{ padding: '4.5rem 0', backgroundColor: 'var(--surface-bg)' }}>
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
              Direct Developer Allocations
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                color: 'var(--on-surface)',
                lineHeight: 1.2,
              }}
            >
              New UAE Off-Plan Launches
            </h2>
          </div>

          <a
            href="#off-plan"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--primary)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            View All 48 Upcoming Master Developments <ArrowRight size={16} />
          </a>
        </div>

        {/* 3 Developer Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {MOCK_OFFPLAN_LAUNCHES.map((launch) => (
            <div
              key={launch.id}
              style={{
                backgroundColor: 'var(--surface-card)',
                border: '1px solid var(--border)',
                padding: '1.5rem',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
              }}
            >
              <div>
                {/* Media frame */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '210px',
                    backgroundColor: 'var(--inverse-surface)',
                    marginBottom: '1.25rem',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={launch.image}
                    alt={launch.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    loading="lazy"
                  />
                  {/* Developer Tag */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'var(--inverse-surface)',
                      color: 'var(--inverse-on-surface)',
                      padding: '4px 8px',
                      fontFamily: 'var(--font-display)',
                      fontSize: '11px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {launch.developer}
                  </div>
                  {/* Handover Date */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      backgroundColor: 'var(--primary)',
                      color: '#ffffff',
                      padding: '4px 8px',
                      fontFamily: 'var(--font-display)',
                      fontSize: '11px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {launch.handover}
                  </div>
                </div>

                {/* Title & Location */}
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--on-surface)',
                    marginBottom: '4px',
                  }}
                >
                  {launch.title}
                </h3>
                <p
                  style={{
                    fontSize: '12px',
                    color: 'var(--secondary-muted)',
                    marginBottom: '1rem',
                  }}
                >
                  {launch.location}
                </p>

                {/* Pricing & Payment Plan Box */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.5rem',
                    backgroundColor: 'var(--surface-low)',
                    border: '1px solid var(--border)',
                    padding: '0.75rem',
                    marginBottom: '1rem',
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '10px',
                        color: 'var(--secondary-muted)',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        display: 'block',
                      }}
                    >
                      Entry Price
                    </span>
                    <span
                      className="tabular-nums"
                      style={{
                        fontSize: '15px',
                        fontWeight: 700,
                        color: 'var(--on-surface)',
                      }}
                    >
                      From {formatPrice(launch.entryPriceAED)}
                    </span>
                  </div>

                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '10px',
                        color: 'var(--secondary-muted)',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        display: 'block',
                      }}
                    >
                      Payment Plan
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '15px',
                        fontWeight: 700,
                        color: 'var(--primary)',
                      }}
                    >
                      {launch.paymentPlan}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--secondary-muted)',
                    lineHeight: 1.5,
                    marginBottom: '1.25rem',
                  }}
                >
                  {launch.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingTop: '0.5rem' }}>
                <button
                  onClick={() => onRegisterInterest(launch)}
                  className="btn btn-primary"
                  style={{
                    flex: 1,
                    height: '42px',
                    fontSize: '12px',
                  }}
                >
                  Register Interest
                </button>
                <button
                  onClick={() => alert(`Downloading VIP Allocation Brochure for ${launch.title}...`)}
                  className="btn btn-outline"
                  style={{
                    height: '42px',
                    padding: '0 0.85rem',
                  }}
                  title="Download VIP Brochure"
                >
                  <Download size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
