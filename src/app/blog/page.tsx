
import SEO from '../components/SEO';


const posts = [
  {
    title: 'How Discovery Vitality Can Boost Your Financial Wellness',
    date: '2025-07-15',
    summary: 'Learn how Discovery Vitality rewards healthy living and smart financial choices, and how you can maximise your benefits as a South African professional.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Short-Term Insurance: What Every Asset Owner Should Know',
    date: '2025-06-28',
    summary: 'Protect your assets with tailored short-term insurance. Ryan explains the key factors for South Africans starting to acquire property and vehicles.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Discovery Bank: Unlocking Rewards and Financial Growth',
    date: '2025-05-10',
    summary: 'Discover how Discovery Bank products can help you grow your wealth, earn rewards, and simplify your financial life.',
    image: 'https://images.unsplash.com/photo-1515165562835-cf7747d3bdfc?auto=format&fit=crop&w=600&q=80',
  },
];

export default function BlogPage() {
  return (
    <>
      <SEO
        title="Blog | Discovery Financial Advisor"
        description="Financial tips, insurance advice, and wealth growth for South African professionals."
        url="https://yourdomain.com/blog"
      />
      <main style={{ background: '#fff', color: '#0a1e3a', fontFamily: 'Montserrat, Arial, sans-serif' }}>
        <section style={{ padding: '4.5rem 2rem 2.5rem', maxWidth: '980px', margin: '0 auto' }}>
          <h1 style={{ color: '#0a1e3a', fontSize: '2.3rem', fontWeight: 700, margin:0 }}>Insights to Help You Protect & Grow</h1>
          <p style={{ marginTop: '1.3rem', fontSize: '1.05rem', lineHeight:1.55 }}>
            Actionable guidance on structuring cover, leveraging Discovery rewards, and building long-term financial resilience—written for South African professionals.
          </p>
          <div style={{ marginTop:'2.2rem', display:'grid', gap:'2rem', gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))' }}>
            {posts.map(post => (
              <div key={post.title} style={{ background:'#f5f7f9', border:'1px solid #e6eaef', borderRadius:'14px', overflow:'hidden', boxShadow:'0 2px 12px rgba(0,0,0,0.06)' }}>
                <img src={post.image} alt={post.title} style={{ width:'100%', height:'180px', objectFit:'cover', borderTopLeftRadius:'14px', borderTopRightRadius:'14px' }} />
                <div style={{ padding:'1.2rem 1.1rem' }}>
                  <div style={{ fontSize:'0.85rem', color:'#0a1e3a', opacity:0.7, marginBottom:'0.5rem' }}>{new Date(post.date).toLocaleDateString()}</div>
                  <h3 style={{ margin:'0.2rem 0 0.6rem', fontSize:'1.15rem', fontWeight:700 }}>{post.title}</h3>
                  <p style={{ margin:0, fontSize:'0.95rem', lineHeight:1.45, color:'#2d3c4c' }}>{post.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
