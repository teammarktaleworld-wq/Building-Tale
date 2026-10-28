import React, { useState } from 'react';
import { Calculator, TrendingUp, ArrowUpRight } from 'lucide-react';
import { YIELD_INDEX_DATA } from '../data/mockData';

interface MortgageCalculatorProps {
  onPreApprove: () => void;
}

export const MortgageCalculator: React.FC<MortgageCalculatorProps> = ({ onPreApprove }) => {
  const [propertyPrice, setPropertyPrice] = useState(2500000);
  const [tenureYears, setTenureYears] = useState(25);
  const downPaymentPercent = 0.2; // 20% UAE Central Bank standard for expats/residents
  const annualInterestRate = 0.0425; // 4.25% fixed

  const downPayment = propertyPrice * downPaymentPercent;
  const loanAmount = propertyPrice - downPayment;
  const monthlyRate = annualInterestRate / 12;
  const totalMonths = tenureYears * 12;

  const monthlyPayment =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);

  return (
    <section id="calculators" style={{ padding: '4.5rem 0', backgroundColor: 'var(--surface-low)', borderBottom: '1px solid var(--border)' }}>
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
              Institutional PropTech Calculators
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                color: 'var(--on-surface)',
                lineHeight: 1.2,
              }}
            >
              Mortgage &amp; Rental Yield Modeling
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
            Calculate UAE bank mortgage pre-qualifications and benchmark gross vs net yields across premier Dubai investment corridors.
          </p>
        </div>

        {/* 2-Column PropTech Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {/* Mortgage Estimator Card */}
          <div
            style={{
              backgroundColor: 'var(--surface-card)',
              border: '1px solid var(--border)',
              padding: '1.75rem',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {/* Card Title */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--border)',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Calculator size={22} color="var(--primary)" />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--on-surface)' }}>
                    UAE Mortgage Estimator
                  </h3>
                </div>
                <span
                  style={{
                    backgroundColor: 'var(--surface-container)',
                    color: 'var(--secondary-muted)',
                    padding: '2px 8px',
                    fontFamily: 'var(--font-display)',
                    fontSize: '10px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                  }}
                >
                  Central Bank Compliant
                </span>
              </div>

              {/* Slider Input */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                  <label style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 700, color: 'var(--on-surface)' }}>
                    Property Purchase Value
                  </label>
                  <span
                    className="tabular-nums"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'var(--primary)',
                    }}
                  >
                    AED {propertyPrice.toLocaleString('en-US')}
                  </span>
                </div>
                <input
                  type="range"
                  min={800000}
                  max={20000000}
                  step={50000}
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(Number(e.target.value))}
                />
              </div>

              {/* 3 Parameter Boxes */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.75rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ backgroundColor: 'var(--surface-low)', padding: '0.75rem', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '10px', color: 'var(--secondary-muted)', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '2px' }}>
                    Down Payment (20%)
                  </span>
                  <span className="tabular-nums" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--on-surface)' }}>
                    AED {Math.round(downPayment).toLocaleString('en-US')}
                  </span>
                </div>

                <div style={{ backgroundColor: 'var(--surface-low)', padding: '0.75rem', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '10px', color: 'var(--secondary-muted)', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '2px' }}>
                    Tenure
                  </span>
                  <select
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      fontFamily: 'var(--font-display)',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: 'var(--on-surface)',
                      width: '100%',
                      cursor: 'pointer',
                    }}
                  >
                    <option value={15}>15 Years</option>
                    <option value={20}>20 Years</option>
                    <option value={25}>25 Years</option>
                  </select>
                </div>

                <div style={{ backgroundColor: 'var(--surface-low)', padding: '0.75rem', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '10px', color: 'var(--secondary-muted)', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '2px' }}>
                    Interest Rate
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--on-surface)', display: 'block' }}>
                    4.25% Fixed
                  </span>
                </div>
              </div>
            </div>

            {/* Calculated Monthly Installment Output Strip */}
            <div
              style={{
                backgroundColor: 'var(--surface-container)',
                border: '1px solid var(--border-strong)',
                padding: '1.25rem',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--secondary-muted)',
                    display: 'block',
                  }}
                >
                  Estimated Monthly Payment
                </span>
                <div
                  className="tabular-nums"
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: 'var(--primary)',
                    lineHeight: 1.1,
                    marginTop: '2px',
                  }}
                >
                  AED {Math.round(monthlyPayment).toLocaleString('en-US')}{' '}
                  <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--secondary-muted)' }}>/ month</span>
                </div>
              </div>

              <button
                onClick={onPreApprove}
                className="btn btn-secondary"
                style={{ height: '42px', fontSize: '12px' }}
              >
                Get Pre-Approved
              </button>
            </div>
          </div>

          {/* Rental Yield & ROI Index Card */}
          <div
            style={{
              backgroundColor: 'var(--surface-card)',
              border: '1px solid var(--border)',
              padding: '1.75rem',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--border)',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <TrendingUp size={22} color="var(--tertiary)" />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--on-surface)' }}>
                    Dubai Yield Index
                  </h3>
                </div>
                <span
                  style={{
                    backgroundColor: 'var(--primary-fixed)',
                    color: 'var(--on-primary-fixed)',
                    padding: '2px 8px',
                    fontFamily: 'var(--font-display)',
                    fontSize: '10px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                  }}
                >
                  Q1 Live Benchmark
                </span>
              </div>

              {/* Yield Comparison Bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {YIELD_INDEX_DATA.map((item, idx) => (
                  <div key={idx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 700, color: 'var(--on-surface)' }}>
                        {item.location}
                      </span>
                      <span className="tabular-nums" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--primary)' }}>
                        {item.netYield}% Avg Net Yield
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div
                      style={{
                        width: '100%',
                        height: '10px',
                        backgroundColor: 'var(--surface-container)',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          width: `${item.netYield * 10}%`,
                          height: '100%',
                          backgroundColor: 'var(--primary)',
                          transition: 'width 0.8s ease',
                        }}
                      />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--secondary-muted)', marginTop: '4px' }}>
                      <span>Occupancy: {item.occupancy}</span>
                      <span>Avg Rent: {item.avgRent}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom link */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border)',
                marginTop: '1rem',
              }}
            >
              <span style={{ fontSize: '12px', color: 'var(--secondary-muted)' }}>
                Looking for tax-free yield optimization?
              </span>
              <a
                href="#calculators"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Generating Building Tale Institutional UAE Real Estate Yield Report (PDF)...');
                }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                Download Yield Report <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
