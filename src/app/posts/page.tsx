//Added portions of activity 8
import { Suspense } from 'react';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};


async function SlowData() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=5');
  const comments = await response.json();
  
  return (
    <div style={{
      marginTop: '30px',
      padding: '20px',
      backgroundColor: '#E8DCC4',
      borderRadius: '8px'
    }}>
      <h3 style={{ color: '#2C5F2D', marginBottom: '15px' }}>
        Latest Comments (Slow Data)
      </h3>
      {comments.map((comment: any) => (
        <div key={comment.id} style={{
          padding: '10px',
          marginBottom: '10px',
          backgroundColor: 'white',
          borderRadius: '4px'
        }}>
          <strong>{comment.email}</strong>
          <p style={{ marginTop: '5px', color: '#555' }}>
            {comment.body.length > 50 
              ? `${comment.body.substring(0, 50)}...` 
              : comment.body
            }
          </p>
        </div>
      ))}
    </div>
  );
}

function SlowDataAnimation() {
  return (
    <div style={{
      marginTop: '30px',
      padding: '20px',
      backgroundColor: '#E8DCC4',
      borderRadius: '8px'
    }}>
      <h3 style={{ color: '#2C5F2D', marginBottom: '15px' }}>
        Loading Comments...
      </h3>
      {[...Array(3)].map((_, index) => (
        <div key={index} style={{
          padding: '10px',
          marginBottom: '10px',
          backgroundColor: 'white',
          borderRadius: '4px',
          animation: 'pulse 1.5s ease-in-out infinite'
        }}>
          <div style={{
            height: '16px',
            backgroundColor: '#f0f0f0',
            width: '60%',
            marginBottom: '8px',
            borderRadius: '4px'
          }} />
          <div style={{
            height: '14px',
            backgroundColor: '#f0f0f0',
            width: '90%',
            borderRadius: '4px'
          }} />
        </div>
      ))}
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

export default async function PostsPage() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60 } 
  });
  
  const posts: Post[] = await response.json();
  const firstTenPosts = posts.slice(0, 10);

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
        Showing the first 10 posts (updates every 60 seconds)
      </p>

      <div style={{ 
        display: 'grid', 
        gap: '20px',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
      }}>
        {firstTenPosts.map((post) => (
          <article 
            key={post.id}
            style={{
              border: '1px solid #E8DCC4',
              borderRadius: '8px',
              padding: '15px',
              backgroundColor: 'white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <h2 style={{
              fontSize: '1.2rem',
              marginBottom: '10px',
              color: '#2C5F2D',
              lineHeight: '1.4'
            }}>
              {post.title}
            </h2>
            
            <p style={{
              color: '#555',
              lineHeight: '1.6',
              marginBottom: '10px'
            }}>
              {post.body.length > 100 
                ? `${post.body.substring(0, 100)}...` 
                : post.body
              }
            </p>
            
            <div style={{
              fontSize: '0.8rem',
              color: '#999',
              borderTop: '1px solid #E8DCC4',
              paddingTop: '8px',
              marginTop: '8px'
            }}>
              Post #{post.id}
            </div>
          </article>
        ))}
      </div>

      <Suspense fallback={<SlowDataAnimation />}>
        <SlowData />
      </Suspense>
    </div>
  );
}