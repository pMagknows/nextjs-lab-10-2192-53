import type { Metadata } from 'next';
import { CartProvider } from '@/lib/cart-context';
import CartSummary from './components/CartSummary';

export const metadata: Metadata = {
  title: 'Mugknowlia',
  description: 'Title is based from an IGN created by my classmate in 8th grade and the flower Magnolia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body>
        <CartProvider>
          <nav style={{
            backgroundColor: '#2C5F2D',
            padding: '1rem',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              Mugknowlia
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <a href="/" style={{ color: 'white', textDecoration: 'none' }}>
                Home
              </a>
              <a href="/shop" style={{ color: 'white', textDecoration: 'none' }}>
                Shop
              </a>
              <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>
                Contact
              </a>
              
              <CartSummary />
            </div>
          </nav>

          <main style={{
            minHeight: 'calc(100vh - 200px)',
            padding: '2rem',
            backgroundColor: '#E8DCC4'
          }}>
            {children}
          </main>

          <footer style={{
            backgroundColor: '#2C5F2D',
            color: 'white',
            textAlign: 'center',
            padding: '1rem'
          }}>
            <p>© {currentYear} Mugknowlia. All rights reserved.</p>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
