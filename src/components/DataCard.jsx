export default function DataCard({ title, description, status }) {
    return (
      <div style={{ border: '1px solid #444', padding: '1.5rem', borderRadius: '8px', margin: '1rem 0', backgroundColor: '#f9f9f9', color: '#333' }}>
        <h3 style={{ marginTop: 0, color: '#111' }}>{title}</h3>
        <p style={{ color: '#555', lineHeight: '1.5' }}>{description}</p>
        <span style={{ fontSize: '0.85rem', backgroundColor: '#e0f2fe', padding: '0.4rem 0.8rem', borderRadius: '20px', color: '#0369a1', fontWeight: 'bold' }}>
          Status: {status}
        </span>
      </div>
    );
  }
  