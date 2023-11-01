import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Contact.css'

function Contact() {
  return (
    <div>
  <Container className='contactpage'>
<Row >
        <Col className='callcontact '>
          <div className='divbox'><i class="bi bi-telephone-inbound-fill icons" />
          <p>Call Us 24/7<br/>+91 45066 45077</p>
          </div>
        </Col>
        <Col className='emailcontact'>
          <div className='divbox'>   <i class="bi bi-envelope-fill icons"></i>
          <p>Write Us <br/>dk101@gmail.com</p>
          </div>
      
        </Col>
        <Col className='location'>
          <div className='divbox'><i class="bi bi-geo-alt-fill icons"></i><br/>
          <b>Main Office</b>
          <p>1/78 , Anna Nagar ,Madurai- 625020</p>
          </div>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Contact