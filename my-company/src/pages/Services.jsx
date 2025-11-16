function Services() {
    const containerStyle = {
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto'
    };
  
    return (
      <div style={containerStyle}>
        <h1>Our Services</h1>
        <ul>
          <li>Technology Consulting</li>
          <li>Market Analysis</li>
          <li>Product Development</li>
        </ul>
      </div>
    );
  }
  
  export default Services;