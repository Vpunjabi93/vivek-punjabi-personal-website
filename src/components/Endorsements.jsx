import React from 'react';

const ENDORSEMENTS = [
  {
    id: 'garima-bhatia',
    badge: 'DIRECT MANAGER // JUNE 17, 2026',
    name: 'Garima Bhatia',
    role: 'Associate Director Marketing @ ZAPS Group',
    relationship: 'Managed Vivek directly · Verified LinkedIn Recommendation',
    profileUrl: 'https://www.linkedin.com/in/garima-bhatia-741787b6/',
    highlight: 'Explored AI everyday & leveraged sales roots for sharper buyer empathy',
    quote:
      'Vivek is a brilliant person to have in your team. He is smart, helpful and driven to explore something new each day. He is an absolute team player, doesn\'t shy away from going an extra mile. In the last year of our association, he explored AI everyday and introduced workflows that improved business outcomes by a mile. His sales background helps him understand consumer persona better. I highly recommend having Vivek in your team.',
  },
  {
    id: 'nidhi-singh',
    badge: 'CROSS-FUNCTIONAL PEER // MAY 14, 2026',
    name: 'Nidhi Singh',
    role: 'Lead Product Marketing Specialist (ExEd) @ TimesPro, Bennett & Coleman Co. Ltd.',
    relationship: 'Worked together on the same Executive Education team · LinkedIn',
    profileUrl: 'https://www.linkedin.com/in/nidhi-singh19/',
    highlight: 'Strategic thinking, market opportunity ID & AI-driven GTM execution',
    quote:
      'I had the pleasure of working with Vivek at TimesPro, where he consistently stood out for his strategic thinking and strong understanding of product marketing. He has a sharp eye for identifying market opportunities and leveraging AI-driven tools and insights to create smarter, more impactful marketing strategies. His ability to adapt to evolving trends and integrate innovation into execution truly makes him stand out. What sets Vivek apart is his collaborative nature, problem-solving mindset, and willingness to experiment with new ideas. I highly recommend him for any opportunity in product marketing, AI-led growth, and innovation-focused roles.',
  },
];

const Endorsements = () => {
  return (
    <section
      id="endorsements"
      style={{
        maxWidth: '1400px',
        margin: '0 auto',
        borderLeft: '1px solid var(--grid-rule)',
        borderRight: '1px solid var(--grid-rule)',
        background: 'var(--surface)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Editorial Header Row */}
      <div
        style={{
          padding: '0.65rem 2rem',
          borderBottom: '1px solid var(--grid-rule)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--on-surface-variant)',
          background: 'var(--surface-container-low)',
        }}
      >
        <span style={{ color: 'var(--on-surface)', fontWeight: 700 }}>
          PEER &amp; MANAGER ENDORSEMENTS
        </span>
        <span>LINKEDIN VERIFIED RECOMMENDATIONS</span>
        <span>EXTERNAL VALIDATION</span>
      </div>

      <div style={{ padding: 'clamp(2.25rem, 4.5vw, 3.5rem) 2rem', borderBottom: '1px solid var(--grid-rule)' }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--accent-vermilion)',
            marginBottom: '0.6rem',
            fontWeight: 700,
          }}
        >
          // THIRD-PARTY PROOF
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.1rem, 4vw, 3.25rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 1.06,
            margin: 0,
            color: 'var(--on-surface)',
          }}
        >
          What Leaders &amp; Teammates <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Say On Record.</span>
        </h2>
      </div>

      {/* 2-Column Endorsements Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: 0,
          background: 'var(--surface-paper-bright)',
        }}
      >
        {ENDORSEMENTS.map((item, idx) => (
          <blockquote
            key={item.id}
            className={idx === 0 ? 'responsive-col-border' : undefined}
            style={{
              margin: 0,
              padding: '2.5rem 2.25rem',
              borderRight: idx === 0 ? '1px solid var(--grid-rule)' : 'none',
              borderBottom: '1px solid var(--grid-rule)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.75rem',
              background: 'var(--surface-paper-bright)',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.09em',
                  color: 'var(--accent-vermilion)',
                  fontWeight: 700,
                  marginBottom: '1.1rem',
                }}
              >
                <span>{item.badge}</span>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  padding: '0.45rem 0.75rem',
                  background: 'var(--surface-container-low)',
                  borderLeft: '3px solid var(--accent-vermilion)',
                  color: 'var(--on-surface)',
                  fontWeight: 600,
                  marginBottom: '1.25rem',
                }}
              >
                KEY SIGNAL: {item.highlight}
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.08rem',
                  lineHeight: 1.68,
                  color: 'var(--on-surface)',
                  margin: 0,
                }}
              >
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>

            <footer
              style={{
                paddingTop: '1.1rem',
                borderTop: '1px solid var(--grid-rule)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap',
                gap: '0.75rem',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: 'var(--on-surface)',
                  }}
                >
                  {item.name}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.84rem',
                    color: 'var(--on-surface-variant)',
                    marginTop: '0.15rem',
                  }}
                >
                  {item.role}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.05em',
                    color: 'var(--ink-muted)',
                    marginTop: '0.35rem',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.relationship}
                </div>
              </div>

              <a
                href={item.profileUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-vermilion)',
                  fontWeight: 700,
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--accent-vermilion)',
                  paddingBottom: '1px',
                }}
              >
                Verify on LinkedIn ↗
              </a>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Endorsements;
