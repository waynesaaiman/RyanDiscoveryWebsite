
import SEO from '../components/SEO';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About | Discovery Financial Advisor"
        description="Learn more about your trusted Discovery Financial Advisor in South Africa."
        url="https://yourdomain.com/about"
      />
      <main style={{ background: '#fff', color: '#0a1e3a', fontFamily: 'Montserrat, Arial, sans-serif' }}>
        <section style={{ padding: '4.5rem 2rem 2.5rem', maxWidth: '980px', margin: '0 auto' }}>
          <h1 style={{ color: '#0a1e3a', fontSize: '2.4rem', fontWeight: 700, margin:0 }}>Ryan – A Partnership Built on Clarity & Trust</h1>
          <p style={{ marginTop: '1.4rem', fontSize: '1.08rem', lineHeight:1.55, maxWidth:'820px' }}>
            I’m Ryan, a Discovery-aligned financial advisor focused on helping growth-minded South African professionals structure their insurance, life cover and banking intelligently. The goal: protect what you’re building while unlocking measurable, compounding value through integrated rewards and efficiency. This isn’t about pushing products—it’s a disciplined framework for long-term resilience.
          </p>
          <div style={{ marginTop:'2.4rem', display:'grid', gap:'1.4rem', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))' }}>
            {[
              { h:'Why Discovery Alignment Matters', b:'When your cover, banking and behaviour work together you accelerate rewards, reduce leakage and build resilience.' },
              { h:'Advice Without Noise', b:'I translate complexity into plain language and remove redundancy so you stay in control of decisions.' },
              { h:'Ongoing Strategic Review', b:'Annual optimisation keeps benefits relevant as income, assets and life stages evolve.' },
            ].map(card => (
              <div key={card.h} style={{ background:'#f5f7f9', border:'1px solid #e6eaef', borderRadius:'14px', padding:'1.4rem 1.3rem' }}>
                <h3 style={{ margin:'0 0 0.5rem', fontSize:'1rem', fontWeight:700, color:'#0a1e3a' }}>{card.h}</h3>
                <p style={{ margin:0, fontSize:'0.9rem', lineHeight:1.5, color:'#2d3c4c' }}>{card.b}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop:'2.8rem', display:'grid', gap:'2rem', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))' }}>
            <div>
              <h2 style={{ margin:'0 0 0.8rem', fontSize:'1.3rem', fontWeight:700 }}>Core Values</h2>
              <ul style={{ margin:0, padding:0, listStyle:'none', fontSize:'0.92rem', lineHeight:1.55 }}>
                {['Integrity in advice','Personal care & responsiveness','Evidence-based structuring','Long-term partnership mindset'].map(v => (
                  <li key={v} style={{ position:'relative', paddingLeft:'1.1rem', marginBottom:'0.45rem' }}><span style={{ position:'absolute', left:0, top:6, width:6, height:6, background:'#ffd700', borderRadius:'50%' }} />{v}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 style={{ margin:'0 0 0.8rem', fontSize:'1.3rem', fontWeight:700 }}>Advisory Approach</h2>
              <ol style={{ margin:0, padding:'0 0 0 1.1rem', fontSize:'0.92rem', lineHeight:1.55 }}>
                {['Discovery ecosystem mapping','Needs & gap assessment','Collaborative strategy design','Implementation & alignment','Ongoing optimisation'].map(step => (
                  <li key={step} style={{ marginBottom:'0.4rem' }}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
          <div style={{ marginTop:'3rem', background:'#0a1e3a', color:'#fff', padding:'2rem 1.6rem', borderRadius:'16px', position:'relative', overflow:'hidden' }}>
            <div style={{ position:'absolute', inset:0, background:'radial-gradient(circle at 20% 15%, rgba(255,215,0,0.18), transparent 60%)' }} />
            <h2 style={{ margin:0, fontSize:'1.6rem', fontWeight:700, color:'#ffd700' }}>Let’s Build Your Financial Framework</h2>
            <p style={{ margin:'1rem 0 1.6rem', fontSize:'1rem', maxWidth:'680px', lineHeight:1.5, color:'#d9e4ef' }}>Book a complimentary Discovery-aligned review session. No obligation—just clarity.</p>
            <a href="/contact" style={{ background:'#ffd700', color:'#0a1e3a', padding:'0.9rem 1.6rem', borderRadius:'10px', fontWeight:700, fontSize:'0.95rem', textDecoration:'none', display:'inline-block', boxShadow:'0 6px 22px rgba(0,0,0,0.3)' }}>Book Introduction Call</a>
          </div>
        </section>
      </main>
    </>
  );
}
