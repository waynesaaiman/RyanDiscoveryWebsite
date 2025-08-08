

"use client";
import SEO from '../components/SEO';
import { useRef } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);

  // Lead tracking for form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (window.gtag) {
      window.gtag('event', 'form_submission', {
        event_category: 'Lead',
        event_label: 'Contact Form',
      });
    }
    if (window.fbq) {
      window.fbq('track', 'Lead');
    }
    // Optionally, handle form data here
    alert('Thank you for your message! We will get back to you soon.');
    if (formRef.current) formRef.current.reset();
  };

  // WhatsApp click tracking
  const handleWhatsAppClick = () => {
    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'Contact',
        event_label: 'WhatsApp CTA',
      });
    }
    if (window.fbq) {
      window.fbq('trackCustom', 'WhatsAppClick');
    }
  };

  return (
    <>
      <SEO
        title="Contact | Discovery Financial Advisor"
        description="Contact your Discovery Financial Advisor. Get in touch via form or WhatsApp for expert advice."
        url="https://yourdomain.com/contact"
      />
      <main style={{ background: '#f5f5f5', color: '#0a1e3a', fontFamily: 'Montserrat, Arial, sans-serif' }}>
        <section style={{ padding: '4.5rem 2rem 2.5rem', maxWidth: '760px', margin: '0 auto' }}>
          <h1 style={{ color: '#0a1e3a', fontSize: '2.3rem', fontWeight: 700, margin:0 }}>Start Your Discovery-Aligned Review</h1>
          <p style={{ margin:'1.3rem 0 1.8rem', fontSize:'1.02rem', lineHeight:1.5 }}>Send a quick message or reach out via WhatsApp. I’ll respond personally and we can explore where you can unlock protection, efficiency and rewards.</p>
          <form ref={formRef} onSubmit={handleSubmit} style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="text" placeholder="Your Name" required style={{ padding: '1rem', borderRadius: '6px', border: '1px solid #ccc' }} />
            <input type="email" placeholder="Your Email" required style={{ padding: '1rem', borderRadius: '6px', border: '1px solid #ccc' }} />
            <textarea placeholder="Your Message" required style={{ padding: '1rem', borderRadius: '6px', border: '1px solid #ccc', minHeight: '120px' }} />
            <button type="submit" style={{ background: '#ffd700', color: '#0a1e3a', padding: '1rem', borderRadius: '8px', fontWeight: 600, border: 'none', fontSize: '1.1rem' }}>
              Send Message
            </button>
          </form>
          <div style={{ marginTop: '2.4rem', display:'grid', gap:'1.4rem', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))' }}>
            {[
              'Independent needs analysis',
              'Reward & benefit optimisation',
              'Cover duplication check',
              'Discovery ecosystem mapping'
            ].map(i => (
              <div key={i} style={{ background:'#fff', border:'1px solid #e2e6ea', borderRadius:'10px', padding:'0.9rem 0.85rem', fontSize:'0.8rem', fontWeight:600, color:'#0a1e3a' }}>{i}</div>
            ))}
          </div>
          <div style={{ marginTop:'2.8rem', textAlign:'center' }}>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '0.95rem 1.8rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem', display:'inline-block', boxShadow:'0 4px 16px rgba(0,0,0,0.18)' }}
              onClick={handleWhatsAppClick}
            >
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
