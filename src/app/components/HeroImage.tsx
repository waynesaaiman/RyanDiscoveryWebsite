import Image from 'next/image';

export default function HeroImage() {
  return (
    <div style={{ position:'relative', width:'100%', height:'420px', borderRadius:'32px', overflow:'hidden', boxShadow:'0 10px 40px rgba(0,0,0,0.18)', background:'#132d55', marginBottom:'2rem' }}>
      <Image src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80" alt="Financial advisor meeting" fill style={{ objectFit:'cover', filter:'brightness(0.96)' }} />
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(10,30,58,0.05) 0%, rgba(10,30,58,0.75) 85%)' }} />
      <div style={{ position:'absolute', bottom:0, left:0, padding:'1.2rem 2rem', color:'#fff' }}>
        <h2 style={{ margin:0, fontSize:'1.3rem', fontWeight:700, color:'#ffd700' }}>Discovery-aligned advice, personal care</h2>
        <p style={{ margin:'0.5rem 0 0', fontSize:'1rem', fontWeight:500, maxWidth:'340px' }}>Ryan helps you structure cover, rewards, and banking for measurable results.</p>
      </div>
    </div>
  );
}
