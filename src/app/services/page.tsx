
import SEO from '../components/SEO';

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services | Discovery Financial Advisor"
        description="Explore our services: short-term insurance, life cover, and Discovery Bank products in South Africa."
        url="https://yourdomain.com/services"
      />
      <main style={{ background: '#f5f5f5', color: '#0a1e3a', fontFamily: 'Montserrat, Arial, sans-serif' }}>
        <section style={{ padding: '4.5rem 2rem 2rem', maxWidth: '1050px', margin: '0 auto' }}>
          <h1 style={{ color: '#0a1e3a', fontSize: '2.4rem', fontWeight: 700, margin: 0 }}>Strategic Advice That Compounds Value</h1>
          <p style={{ marginTop: '1.2rem', fontSize: '1.1rem', maxWidth: '760px', lineHeight: 1.55 }}>
            Every solution is aligned with Discovery’s integrated ecosystem so you maximise protection, liquidity, tax efficiency and rewards simultaneously.
          </p>
          <div style={{ marginTop: '2.5rem', display: 'grid', gap: '1.6rem', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}>
            {[
              {
                title: 'Short‑Term Insurance Optimisation',
                bullets: [
                  'Asset & vehicle portfolio analysis',
                  'Smart excess structuring',
                  'Claims preparedness & gap review',
                  'Reward tier alignment',
                ],
                accent: '#ffd700'
              },
              {
                title: 'Life & Risk Cover Architecture',
                bullets: [
                  'Layered benefit structuring',
                  'Income protection calibration',
                  'Estate liquidity planning',
                  'Premium optimisation'
                ],
                accent: '#0a1e3a'
              },
              {
                title: 'Discovery Bank & Rewards Leverage',
                bullets: [
                  'Spend & reward mapping',
                  'Vitality Money progression',
                  'Card & product selection strategy',
                  'Integrated discount acceleration'
                ],
                accent: '#132d55'
              }
            ].map(card => (
              <div key={card.title} style={{ background: '#fff', borderRadius: '14px', padding: '1.6rem 1.5rem 1.4rem', boxShadow: '0 4px 18px rgba(0,0,0,0.06)', border: '1px solid #e5e8ec', display:'flex', flexDirection:'column' }}>
                <h2 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: card.accent }}>{card.title}</h2>
                <ul style={{ margin: '1rem 0 0', padding: 0, listStyle: 'none', fontSize: '0.9rem', lineHeight: 1.5, flexGrow:1 }}>
                  {card.bullets.map(b => (
                    <li key={b} style={{ position: 'relative', paddingLeft: '1.1rem', marginBottom: '0.45rem' }}>
                      <span style={{ position: 'absolute', left: 0, top: 3, width: 6, height: 6, background: card.accent, borderRadius: '50%' }} />
                      {b}
                    </li>
                  ))}
                </ul>
                <a href="/contact" style={{ marginTop: '1.2rem', fontSize: '0.75rem', letterSpacing: '0.07em', textTransform: 'uppercase', fontWeight: 700, color: '#0a1e3a', textDecoration: 'none', display:'inline-flex', alignItems:'center', gap:'0.4rem' }}>Book Assessment →</a>
              </div>
            ))}
          </div>
        </section>
        <section style={{ background:'#0a1e3a', color:'#fff', padding:'3.5rem 2rem', marginTop:'2rem' }}>
          <div style={{ maxWidth:'1050px', margin:'0 auto', display:'grid', gap:'2.2rem', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))' }}>
            <div>
              <h2 style={{ margin:0, fontSize:'1.8rem', fontWeight:700, color:'#ffd700' }}>What You Gain</h2>
              <p style={{ margin:'1rem 0 1.4rem', fontSize:'1rem', lineHeight:1.5, color:'#e2e6ec' }}>A disciplined, data-informed approach to risk and reward accumulation – without the overwhelm.</p>
              <ul style={{ margin:0, padding:0, listStyle:'none', fontSize:'0.9rem', display:'grid', gap:'0.55rem' }}>
                {['Integrated financial overview','Eliminated duplication & leakage','Reward tier acceleration','Improved claim readiness','Peace of mind & clarity'].map(i => (
                  <li key={i} style={{ position:'relative', paddingLeft:'1.2rem' }}><span style={{ position:'absolute', left:0, top:6, width:7, height:7, background:'#ffd700', borderRadius:'50%' }} />{i}</li>
                ))}
              </ul>
            </div>
            <div style={{ background:'#132d55', padding:'1.6rem 1.5rem', borderRadius:'14px', border:'1px solid #1f436f', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
              <h3 style={{ margin:'0 0 0.9rem', fontSize:'1.05rem', color:'#ffd700' }}>Process Snapshot</h3>
              <ol style={{ margin:0, padding:'0 0 0 1.1rem', fontSize:'0.85rem', lineHeight:1.5 }}>
                {['Discovery integration audit','Needs analysis & risk layering','Recommendation workshop','Implementation & optimisation','Annual strategic review'].map(step => (<li key={step} style={{ marginBottom:'0.4rem' }}>{step}</li>))}
              </ol>
              <a href="/contact" style={{ marginTop:'1rem', alignSelf:'flex-start', background:'#ffd700', color:'#0a1e3a', padding:'0.75rem 1.2rem', borderRadius:'8px', fontWeight:700, fontSize:'0.85rem', textDecoration:'none', boxShadow:'0 4px 14px rgba(0,0,0,0.25)' }}>Start Now</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
