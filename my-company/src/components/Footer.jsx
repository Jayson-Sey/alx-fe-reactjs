function Footer() {
    const footerStyle = {
      backgroundColor: '#34495e',
      color: 'white',
      textAlign: 'center',
      padding: '2rem 0',
      marginTop: 'auto'
    };
  
    const contentStyle = {
      maxWidth: '1200px',
      margin: '0 auto'
    };
  
    return (
      <footer style={footerStyle}>
        <div style={contentStyle}>
          <p>&copy; 2024 Our Company. All rights reserved.</p>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: '0.8' }}>
            Dedicated to excellence and innovation
          </p>
        </div>
      </footer>
    );
  }
  
  export default Footer;