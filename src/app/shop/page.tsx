'use client';

import { useCart } from '@/lib/cart-context';

const products = [
  {
    id: 1,
    name: 'Earthy Green Planter',
    price: 29.99,
    description: 'Hand-crafted ceramic planter in forest green',
    image: '🪴'
  },
  {
    id: 2,
    name: 'Magnolia Scented Candle',
    price: 19.99,
    description: 'Natural soy wax candle with magnolia fragrance',
    image: '🕯️'
  },
  {
    id: 3,
    name: 'Mugknowlia T-Shirt',
    price: 24.99,
    description: 'Soft cotton t-shirt with custom design',
    image: '👕'
  }
];

function ProductCard({ product, onAddToCart }: { 
  product: typeof products[0];
  onAddToCart: () => void;
}) {
  return (
    <div style={{
      border: '1px solid #E8DCC4',
      borderRadius: '8px',
      padding: '20px',
      backgroundColor: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <div style={{ fontSize: '4rem', marginBottom: '10px' }}>
        {product.image}
      </div>
      
      <h2 style={{ 
        color: '#2C5F2D',
        marginBottom: '10px',
        fontSize: '1.5rem'
      }}>
        {product.name}
      </h2>
      
      <p style={{ 
        color: '#666',
        marginBottom: '15px',
        lineHeight: '1.6'
      }}>
        {product.description}
      </p>
      
      <div style={{ 
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#2C5F2D',
        marginBottom: '15px'
      }}>
        ${product.price}
      </div>
      
      <button
        onClick={onAddToCart}
        style={{
          backgroundColor: '#2C5F2D',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          fontSize: '1rem',
          cursor: 'pointer',
          width: '100%'
        }}
      >
        Add to Cart 🛒
      </button>
    </div>
  );
}

export default function ShopPage() {
  const { addItem } = useCart();

  return (
    <div>
      <h1 style={{ 
        color: '#2C5F2D', 
        borderBottom: '2px solid #E8DCC4',
        paddingBottom: '10px',
        marginBottom: '30px'
      }}>
        Our Shop
      </h1>

      <div style={{ 
        display: 'grid', 
        gap: '30px',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
      }}>
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={() => addItem({
              id: product.id,
              name: product.name,
              price: product.price
            })}
          />
        ))}
      </div>
    </div>
  );
}