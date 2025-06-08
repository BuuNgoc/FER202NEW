import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const SimpleWebsite = () => {
  return (
    <>
      {/* Header */}
      <div style={{ backgroundColor: '#e67e22', paddingTop: '30px', paddingBottom: '10px' }}>
        <Container className="text-center">
          {/* Logo được làm to hơn */}
          <img
            src="https://th.bing.com/th/id/OIP.H7B2zQa6tyItU1JR6pPcngHaEE?rs=1&pid=ImgDetMain"
            alt="FPT Logo"
            style={{ width: '350px', height: 'auto', marginBottom: '10px' }}
          />
        </Container>

        {/* Menu gần sát đáy */}
        <div style={{ paddingBottom: '10px' }}>
          <Navbar variant="dark" expand="sm" className="justify-content-center">
            <Nav>
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar>
        </div>
      </div>

      {/* Nội dung */}
      <Container className="my-5 text-center">
        <h4 className="fw-bold">About</h4>
        <p>This is the about section of the website.</p>

        <h4 className="fw-bold mt-4">Contact</h4>
        <p>For any inquiries, please contact us at example@example.com.</p>
      </Container>

      {/* Footer */}
      <div style={{ backgroundColor: '#f6c86c', padding: '20px 0' }} className="text-center">
        <small>© 2023 Website. All rights reserved.</small>
      </div>
    </>
  );
};

export default SimpleWebsite;
