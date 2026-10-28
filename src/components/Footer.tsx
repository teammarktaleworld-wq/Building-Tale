import React from 'react';
import { ShieldCheck, FileCheck, CheckCircle2, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--inverse-surface)',
        color: 'var(--inverse-on-surface)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
      }}
    >
      <div className="container">
        
        {/* 6 Directory Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '2rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Col 1 */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '13px', color: 'var(--tertiary-fixed)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              Buy
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '13px', color: 'var(--surface-variant)' }}>
              <li><a href="#buy" style={{ color: 'inherit', textDecoration: 'none' }}>Dubai Luxury Villas</a></li>
              <li><a href="#buy" style={{ color: 'inherit', textDecoration: 'none' }}>Penthouse Collections</a></li>
              <li><a href="#buy" style={{ color: 'inherit', textDecoration: 'none' }}>Waterfront Residences</a></li>
              <li><a href="#buy" style={{ color: 'inherit', textDecoration: 'none' }}>Golf Communities</a></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '13px', color: 'var(--tertiary-fixed)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              Rent
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '13px', color: 'var(--surface-variant)' }}>
              <li><a href="#rent" style={{ color: 'inherit', textDecoration: 'none' }}>Apartments Dubai</a></li>
              <li><a href="#rent" style={{ color: 'inherit', textDecoration: 'none' }}>Furnished Serviced</a></li>
              <li><a href="#rent" style={{ color: 'inherit', textDecoration: 'none' }}>Executive Villas</a></li>
              <li><a href="#rent" style={{ color: 'inherit', textDecoration: 'none' }}>Short-Term Stays</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '13px', color: 'var(--tertiary-fixed)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              Commercial
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '13px', color: 'var(--surface-variant)' }}>
              <li><a href="#commercial" style={{ color: 'inherit', textDecoration: 'none' }}>Grade-A Offices</a></li>
              <li><a href="#commercial" style={{ color: 'inherit', textDecoration: 'none' }}>Retail Flagships</a></li>
              <li><a href="#commercial" style={{ color: 'inherit', textDecoration: 'none' }}>Warehouses &amp; Logistics</a></li>
              <li><a href="#commercial" style={{ color: 'inherit', textDecoration: 'none' }}>Full Commercial Floors</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '13px', color: 'var(--tertiary-fixed)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              UAE Areas
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '13px', color: 'var(--surface-variant)' }}>
              <li><a href="#hero" style={{ color: 'inherit', textDecoration: 'none' }}>Downtown Dubai</a></li>
              <li><a href="#hero" style={{ color: 'inherit', textDecoration: 'none' }}>Dubai Marina</a></li>
              <li><a href="#hero" style={{ color: 'inherit', textDecoration: 'none' }}>Palm Jumeirah</a></li>
              <li><a href="#hero" style={{ color: 'inherit', textDecoration: 'none' }}>Dubai Hills Estate</a></li>
              <li><a href="#hero" style={{ color: 'inherit', textDecoration: 'none' }}>Business Bay</a></li>
            </ul>
          </div>

          {/* Col 5 */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '13px', color: 'var(--tertiary-fixed)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              Calculators
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '13px', color: 'var(--surface-variant)' }}>
              <li><a href="#calculators" style={{ color: 'inherit', textDecoration: 'none' }}>Mortgage Calculator</a></li>
              <li><a href="#calculators" style={{ color: 'inherit', textDecoration: 'none' }}>ROI &amp; Yield Analysis</a></li>
              <li><a href="#calculators" style={{ color: 'inherit', textDecoration: 'none' }}>Rent vs Buy Index</a></li>
              <li><a href="#calculators" style={{ color: 'inherit', textDecoration: 'none' }}>Service Charge Audit</a></li>
            </ul>
          </div>

          {/* Col 6 */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '13px', color: 'var(--tertiary-fixed)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '13px', color: 'var(--surface-variant)' }}>
              <li><a href="#hero" style={{ color: 'inherit', textDecoration: 'none' }}>About Building Tale</a></li>
              <li><a href="#hero" style={{ color: 'inherit', textDecoration: 'none' }}>Regulatory Filings</a></li>
              <li><a href="#hero" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy &amp; Terms</a></li>
              <li><a href="#hero" style={{ color: 'inherit', textDecoration: 'none' }}>Careers &amp; Brokers</a></li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Verification Seals Strip */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
            padding: '1.75rem 0',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Seals */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                backgroundColor: 'rgba(15, 118, 110, 0.25)',
                border: '1px solid var(--primary)',
                color: 'var(--on-primary-container)',
                padding: '4px 8px',
                fontFamily: 'var(--font-display)',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              <ShieldCheck size={14} /> RERA Registered ORN: 29841
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'var(--inverse-on-surface)',
                padding: '4px 8px',
                fontFamily: 'var(--font-display)',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              <FileCheck size={14} /> Trakheesi Permit Licensed
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'var(--inverse-on-surface)',
                padding: '4px 8px',
                fontFamily: 'var(--font-display)',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              <CheckCircle2 size={14} /> DLD &amp; REST Certified
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                backgroundColor: 'rgba(200, 161, 101, 0.2)',
                border: '1px solid var(--tertiary)',
                color: 'var(--tertiary-fixed)',
                padding: '4px 8px',
                fontFamily: 'var(--font-display)',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              <Lock size={14} /> Madmoun Compliance Seal
            </div>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '12px', color: 'var(--surface-variant)', fontFamily: 'var(--font-display)' }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>iOS App</a>
            <span>•</span>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Android APK</a>
            <span>•</span>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
            <span>•</span>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Instagram</a>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '1.5rem',
            fontSize: '12px',
            color: 'var(--surface-variant)',
          }}
        >
          <p>© 2026 Building Tale Real Estate LLC. All rights reserved. Regulated by Dubai Real Estate Regulatory Agency.</p>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Use</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Anti-Money Laundering (AML)</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
