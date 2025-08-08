
import Link from 'next/link';
import Image from 'next/image';
import SEO from '../components/SEO';
import HeroImage from '../components/HeroImage';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Discovery Financial Advisor | Home"
        description="South Africa financial advisor specialising in Discovery insurance, life cover, and Discovery Bank products."
        url="https://yourdomain.com/home"
      />
      <main style={{ background: '#0a1e3a', color: '#fff', minHeight: '100%', fontFamily: 'Montserrat, Arial, sans-serif' }}>
        {/* Hero Section */}
        <section style={{ padding: '5rem 2rem 3rem', maxWidth: '1200px', margin: '0 auto' }}>
          <HeroImage />
          <div style={{ maxWidth:'600px', margin:'0 auto', textAlign:'center' }}>
            <div style={{ display: 'inline-block', background:'#132d55', padding:'0.4rem 0.8rem', borderRadius: '999px', fontSize: '0.75rem', letterSpacing: '0.05em', fontWeight:600, marginBottom:'1rem', color:'#ffd700' }}>DISCOVERY ALIGNED ADVICE</div>
            <h1 style={{ color: '#ffd700', fontSize: '3rem', lineHeight:1.1, fontWeight: 700, margin:'0 0 1.2rem' }}>Hi, I’m Ryan – Discovery Financial Advisor</h1>
            <p style={{ margin: '0 0 2rem', fontSize: '1.18rem', color: '#e2e6ec', maxWidth: '520px', textAlign:'center' }}>
              I help South African professionals structure their insurance, life cover, and banking for maximum protection, rewards, and peace of mind. Quotes are always free.
            </p>
            <div style={{ display:'flex', gap:'1.2rem', justifyContent:'center', margin:'2rem 0' }}>
              <Link href="/contact" style={{ background: '#ffd700', color: '#0a1e3a', padding: '1.1rem 2rem', borderRadius: '12px', fontWeight: 700, textDecoration: 'none', fontSize: '1.15rem', boxShadow:'0 4px 14px rgba(0,0,0,0.18)' }}>Get a Free Quote</Link>
              <Link href="/services" style={{ background: '#132d55', color: '#fff', padding: '1.1rem 2rem', borderRadius: '12px', fontWeight:600, textDecoration: 'none', fontSize: '1.15rem', border:'1px solid #1f436f' }}>Explore Services</Link>
            </div>
            <ul style={{ margin:'2.5rem auto 0', padding:0, listStyle:'none', display:'grid', gap:'0.8rem', fontSize:'1rem', color:'#cbd5e1', maxWidth:'520px', textAlign:'left' }}>
              <li>✓ <strong style={{color:'#ffd700'}}>Vitality Benefits:</strong> Earn rewards for healthy living, fitness, and smart financial choices</li>
              <li>✓ <strong style={{color:'#ffd700'}}>Bank Reward Alignment:</strong> Maximise cashback, travel, and lifestyle benefits</li>
              <li>✓ <strong style={{color:'#ffd700'}}>Risk & Asset Protection:</strong> Strategy review for your unique needs</li>
              <li>✓ <strong style={{color:'#ffd700'}}>Free Quote:</strong> No obligation, tailored to your goals</li>
            </ul>
            <div style={{ margin:'2.8rem auto 0', display:'flex', gap:'2.2rem', justifyContent:'center', flexWrap:'wrap', alignItems:'center' }}>
              <div style={{ fontSize:'1rem', color:'#9fb4cc', textAlign:'center' }}>
                <strong style={{ color:'#ffd700', fontSize:'1.4rem' }}>150+</strong><br/>Clients Guided
              </div>
              <div style={{ fontSize:'1rem', color:'#9fb4cc', textAlign:'center' }}>
                <strong style={{ color:'#ffd700', fontSize:'1.4rem' }}>R50m+</strong><br/>Cover Facilitated
              </div>
              <div style={{ fontSize:'1rem', color:'#9fb4cc', textAlign:'center' }}>
                <strong style={{ color:'#ffd700', fontSize:'1.4rem' }}>98%</strong><br/>Retention Rate
              </div>
            </div>
          </div>
          <div style={{ position:'relative', minHeight:'420px' }}>
            <div style={{ position:'absolute', inset:0, borderRadius:'24px', overflow:'hidden', boxShadow:'0 10px 40px rgba(0,0,0,0.35)', background:'#132d55', display:'flex', flexDirection:'column', justifyContent:'flex-end' }}>
              <Image src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=900&q=70" alt="Ryan – Discovery Financial Advisor" fill style={{ objectFit:'cover', filter:'brightness(0.9)' }} />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(10,30,58,0.05) 0%, rgba(10,30,58,0.75) 85%)' }} />
              <div style={{ position:'relative', padding:'1.2rem 1.4rem', color:'#fff' }}>
                <p style={{ margin:0, fontSize:'0.8rem', letterSpacing:'0.07em', textTransform:'uppercase', color:'#ffd700' }}>Ryan • Discovery Financial Advisor</p>
                <p style={{ margin:'0.45rem 0 0', fontSize:'0.95rem', fontWeight:600, maxWidth:'300px' }}>Personal, structured guidance for cover, rewards & long-term resilience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Tiles */}
        <section style={{ background:'#0e2648', padding:'3.5rem 2rem', marginTop:'1rem' }}>
          <div style={{ maxWidth:'1200px', margin:'0 auto', display:'grid', gap:'1.5rem', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))' }}>
            {[
              { title:'Short‑Term Insurance', copy:'Optimised asset & vehicle protection with tailored excess and benefit structures.' },
              { title:'Life & Risk Cover', copy:'Future‑proof your family with structured benefit layering & premium efficiency.' },
              { title:'Discovery Bank Strategy', copy:'Unlock boosted rewards through integrated product structuring.' },
              { title:'Benefit Optimisation', copy:'Annual policy & reward review to keep you on track and ahead.' },
            ].map(card => (
              <div key={card.title} style={{ background:'#132d55', border:'1px solid #1f436f', borderRadius:'14px', padding:'1.4rem 1.3rem', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                <h3 style={{ margin:'0 0 0.6rem', fontSize:'1.05rem', color:'#ffd700' }}>{card.title}</h3>
                <p style={{ margin:0, fontSize:'0.9rem', lineHeight:1.4, color:'#cbd5e1' }}>{card.copy}</p>
                <Link href="/services" style={{ marginTop:'1rem', fontSize:'0.75rem', letterSpacing:'0.06em', textTransform:'uppercase', color:'#fff', textDecoration:'none', fontWeight:600 }}>Learn More →</Link>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Band */}
        <section style={{ background:'#082041', padding:'2.2rem 2rem', borderTop:'1px solid #132d55', borderBottom:'1px solid #132d55' }}>
          <div style={{ maxWidth:'1100px', margin:'0 auto', display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:'1.2rem' }}>
            <p style={{ margin:0, fontSize:'0.85rem', letterSpacing:'0.05em', color:'#c1d2e4' }}>TRUSTED BY PROFESSIONALS IN</p>
            <div style={{ display:'flex', gap:'1.8rem', flexWrap:'wrap', fontSize:'0.85rem', color:'#89a9c6' }}>
              <span>Healthcare</span><span>Engineering</span><span>Tech</span><span>Legal</span><span>Finance</span>
            </div>
          </div>
        </section>

        {/* Call to Action Strip */}
        <section style={{ padding:'4rem 2rem', background:'linear-gradient(135deg,#132d55,#0a1e3a)', textAlign:'center' }}>
          <div style={{ maxWidth:'760px', margin:'0 auto' }}>
            <h2 style={{ margin:0, fontSize:'2rem', color:'#ffd700', fontWeight:700 }}>Ready to Optimise Your Cover & Rewards?</h2>
            <p style={{ margin:'1.2rem 0 2rem', fontSize:'1.05rem', color:'#d9e4ef' }}>Get a complimentary Discovery-aligned review and see where you can unlock value immediately.</p>
            <Link href="/contact" style={{ background:'#ffd700', color:'#0a1e3a', padding:'1rem 2rem', borderRadius:'10px', fontWeight:700, textDecoration:'none', fontSize:'1.05rem', boxShadow:'0 6px 22px rgba(0,0,0,0.35)' }}>Get Your Free Quote</Link>
          </div>
        </section>
      </main>
    </>
  );
}
