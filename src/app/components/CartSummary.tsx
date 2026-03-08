'use client';

import { useCart } from '@/lib/cart-context';

export default function CartSummary() {
  const { itemCount, totalPrice } = useCart();
  
  return (
    <div style={{
      backgroundColor: 'rgba(255,255,255,0.2)',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: '0.9rem'
    }}>
      🛒 {itemCount} items | ${totalPrice.toFixed(2)}
    </div>
  );
}