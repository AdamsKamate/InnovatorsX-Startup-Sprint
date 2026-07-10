import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import DataCard from '../components/DataCard';

export default function Home() {
  // State to hold our data and loading status
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    fetch('http://localhost:3000/api/projects')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data from backend:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'system-ui, sans-serif' }}>
      <Navbar />
      <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', color: '#111', marginBottom: '0.5rem' }}>Discover Our Solutions</h2>
        <p style={{ color: '#666', marginBottom: '2rem' }}>Our startup solves your problems with innovative tools.</p>
        
        {loading ? (
          <p style={{ color: '#666', fontStyle: 'italic' }}>Loading data from server...</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {projects.map((item) => (
              <DataCard 
                key={item.id} 
                title={item.title} 
                description={item.description} 
                status={item.status} 
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}