export default function Navbar() {
    return (
      <nav style={{ padding: '1rem 2rem', backgroundColor: '#1a1a1a', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>InnovatorsX MVP</h1>
        <button style={{ padding: '0.5rem 1rem', backgroundColor: '#646cff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
        Launch the App
        </button>
      </nav>
    );
  }
