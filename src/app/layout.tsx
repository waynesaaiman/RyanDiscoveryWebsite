
import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Ryan Tubba Steenkamp | Discovery Financial Advisor',
  description: 'Ryan Tubba Steenkamp | Discovery Financial Advisor – South Africa Discovery financial advisor specialising in short-term insurance, life cover, and Discovery Bank products.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Montserrat, Arial, sans-serif', background: '#f5f5f5' }}>
        <header style={{ background: '#0a1e3a', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ color: '#ffd700', fontWeight: 700, fontSize: '1.5rem' }}>Ryan Tubba Steenkamp | Discovery Financial Advisor</div>
          <nav>
            <Link href="/home" style={{ color: '#fff', marginRight: '2rem', textDecoration: 'none', fontWeight: 500 }}>Home</Link>
            <Link href="/about" style={{ color: '#fff', marginRight: '2rem', textDecoration: 'none', fontWeight: 500 }}>About</Link>
            <Link href="/services" style={{ color: '#fff', marginRight: '2rem', textDecoration: 'none', fontWeight: 500 }}>Services</Link>
            <Link href="/blog" style={{ color: '#fff', marginRight: '2rem', textDecoration: 'none', fontWeight: 500 }}>Blog</Link>
            <Link href="/contact" style={{ color: '#ffd700', textDecoration: 'none', fontWeight: 600 }}>Contact</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer style={{ background: '#0a1e3a', color: '#fff', textAlign: 'center', padding: '2rem 1rem', marginTop: '4rem' }}>
          &copy; {new Date().getFullYear()} Ryan Tubba Steenkamp | Discovery Financial Advisor. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
