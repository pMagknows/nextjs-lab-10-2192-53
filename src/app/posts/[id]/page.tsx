type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};


type pageProps = {
  params: {
    id: string;
  };
};


export async function generateStaticParams() {

  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await response.json();
  const firstTenPosts = posts.slice(0, 10);
  
  return firstTenPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function PostPage({ params }: pageProps) {
  const { id } = params;
  
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post: Post = await response.json();

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>

      <a 
        href="/posts" 
        style={{
          display: 'inline-block',
          marginBottom: '20px',
          color: '#2C5F2D',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        ← Back to all posts
      </a>

      <article style={{
        backgroundColor: 'white',
        border: '1px solid #E8DCC4',
        borderRadius: '8px',
        padding: '30px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>

        <h1 style={{
          color: '#2C5F2D',
          marginBottom: '10px',
          fontSize: '2rem',
          lineHeight: '1.3'
        }}>
          {post.title}
        </h1>
        
        <div style={{
          color: '#666',
          fontSize: '0.9rem',
          marginBottom: '20px',
          paddingBottom: '10px',
          borderBottom: '1px solid #E8DCC4'
        }}>
          Posted by User #{post.userId}
        </div>
        
        <p style={{
          color: '#333',
          lineHeight: '1.8',
          fontSize: '1.1rem',
          whiteSpace: 'pre-line' 
        }}>
          {post.body}
        </p>
      </article>
    </div>
  );
}