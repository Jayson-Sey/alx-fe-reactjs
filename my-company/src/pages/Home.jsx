function Home() {
    const containerStyle = {
      padding: '40px 20px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    };
  
    return (
      <div style={containerStyle}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome to Our Company</h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
            We are dedicated to delivering excellence in all our services. 
            Transforming businesses through cutting-edge technology and innovative solutions.
          </p>
        </div>
      </div>
    );
  }
  
  export default Home;