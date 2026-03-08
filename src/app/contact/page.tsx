import { revalidatePath } from 'next/cache';

export default function ContactPage() {
  async function submitContactForm(formData: FormData) {
    'use server';

    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    console.log('---');
    console.log('Contact form submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('---');

    revalidatePath('/contact');
  }

  return (
    <div style={{ 
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ 
        color: '#2C5F2D',
        marginBottom: '20px',
        borderBottom: '2px solid #E8DCC4',
        paddingBottom: '10px'
      }}>
        Contact Us
      </h1>

      <form action={submitContactForm}>
        <div style={{ marginBottom: '15px' }}>
          <label 
            htmlFor="name" 
            style={{ 
              display: 'block', 
              marginBottom: '5px',
              color: '#333',
              fontWeight: 'bold'
            }}
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #E8DCC4',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label 
            htmlFor="email" 
            style={{ 
              display: 'block', 
              marginBottom: '5px',
              color: '#333',
              fontWeight: 'bold'
            }}
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #E8DCC4',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label 
            htmlFor="message" 
            style={{ 
              display: 'block', 
              marginBottom: '5px',
              color: '#333',
              fontWeight: 'bold'
            }}
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #E8DCC4',
              borderRadius: '4px',
              fontSize: '16px',
              resize: 'vertical'
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: '#2C5F2D',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
            width: '100%'
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}