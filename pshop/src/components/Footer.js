import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
function Footer() {
  return (
    <footer>
      <Container>
        <Row>
            <Col className='text-center py-3'>Copyright &copy; Yuri Rabota 2022 vk.com/erplate</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

