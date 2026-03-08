export default function slowLoading() {
  return (
       <div style={{ padding: '20px' }}>
      <h1 style={{ 
        color: '#2C5F2D', 
        borderBottom: '2px solid #E8DCC4',
        paddingBottom: '10px'
      }}>
        Latest Posts
      </h1>
      
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Loading posts...
      </p>

      <div style={{ 
        display: 'grid', 
        gap: '20px',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
      }}>
 
        {[...Array(6)].map((_, index) => (
          <div 
            key={index}
            style={{
              border: '1px solid #E8DCC4',
              borderRadius: '8px',
              padding: '15px',
              backgroundColor: 'white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              animation: 'pulse 1.5s ease-in-out infinite'
            }}
          >
            <div style={{
              height: '24px',
              backgroundColor: '#f0f0f0',
              marginBottom: '10px',
              borderRadius: '4px',
              width: '80%'
            }} />
            
            <div style={{
              height: '16px',
              backgroundColor: '#f0f0f0',
              marginBottom: '8px',
              borderRadius: '4px',
              width: '100%'
            }} />
            <div style={{
              height: '16px',
              backgroundColor: '#f0f0f0',
              marginBottom: '8px',
              borderRadius: '4px',
              width: '90%'
            }} />
            <div style={{
              height: '16px',
              backgroundColor: '#f0f0f0',
              marginBottom: '10px',
              borderRadius: '4px',
              width: '95%'
            }} />
            
            <div style={{
              height: '12px',
              backgroundColor: '#f0f0f0',
              borderRadius: '4px',
              width: '30%',
              marginTop: '8px'
            }} />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}