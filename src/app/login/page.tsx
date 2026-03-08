'use client';

import { useSearchParams } from 'next/navigation';

export default function LoginPage() {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect') || '/';
  
  const handleLogin = () => {
    document.cookie = 'auth-token=logged-in; path=/; max-age=3600';
    
    window.location.href = redirectTo;
  };
  
  return (
    <div style={{
      padding: '40px',
      maxWidth: '400px',
      margin: '50px auto',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#2C5F2D', marginBottom: '20px' }}>
        Login Page
      </h1>
      
      <p style={{ marginBottom: '30px', color: '#666' }}>
        Please log in to continue
      </p>
      
      <button
        onClick={handleLogin}
        style={{
          backgroundColor: '#2C5F2D',
          color: 'white',
          padding: '10px 30px',
          border: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Login
      </button>
    </div>
  );
}