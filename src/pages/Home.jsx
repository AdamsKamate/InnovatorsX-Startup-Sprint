import Navbar from '../components/Navbar';
import DataCard from '../components/DataCard';
import { mockData } from '../services/mockData';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'system-ui, sans-serif' }}>
      <Navbar />
      <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', color: '#111', marginBottom: '0.5rem' }}>Discover Our Solutions</h2>
        <p style={{ color: '#666', marginBottom: '2rem' }}>Our startup solves your problems with innovative tools.</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {mockData.map((item) => (
            <DataCard 
              key={item.id} 
              title={item.title} 
              description={item.description} 
              status={item.status} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}
