import React from "react"
import { useNavigate } from "react-router-dom"
import { Container, Row, Col, Button } from "reactstrap"

const Footer = () => {
  const navigate = useNavigate()

  return (
    <footer className="bg-light text-center text-lg-start p-3">
      <Container fluid={true}>
        <Row className="text-center">
          {/* Navigation Links */}
          <Col xs={12} sm={4} className="mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled d-flex flex-column align-items-center">
              <li className="mb-2"><span onClick={()=>navigate('/')} className="text-dark">Home</span></li>
              <li className="mb-2"><span  onClick={()=>navigate('/about')} className="text-dark">About</span></li>
              <li><span  onClick={()=>navigate('/contact')}  className="text-dark">Contact us</span></li>
            </ul>
          </Col>

          {/* Feedback and Advertisement Info */}
          <Col xs={12} sm={4} className="mb-3">
            <h6 className="fw-bold">Feedback & Queries</h6>
            <p className="small">

              <a href="mailto:sindhchambal201@gmail.com">sindhchambal201@gmail.com</a>
            </p>
          </Col>

          <Col xs={12} sm={4} className="mb-3">
            <h6 className="fw-bold">Advertisement Queries</h6>
            <p className="small">
              <a href="mailto:gourav00466@gmail.com">gourav00466@gmail.com</a> <br />
              <a href="mailto:sindhchambal202@gmail.com">sindhchambal202@gmail.com</a>
            </p>
          </Col>
        </Row>

        {/* Popup Contact Info */}
        <Row>
          <Col xs={12} className="text-center">
            <Button
              color="primary"
              outline
              size="sm"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#contactInfo"
              aria-expanded="false"
              aria-controls="contactInfo"
            >
              Contact Information
            </Button>
            <div className="collapse mt-2" id="contactInfo">
              <div className="card card-body small">
                <p>
                  <strong>Info:</strong>{" "}
                  <a href="mailto:swadeshbhopal@gmail.com">swadeshbhopal@gmail.com</a>
                </p>
                <p>
                  <strong>Ads:</strong>{" "}
                  <a href="mailto:advt.gourav00466@gmail.com">advt.gourav00466@gmail.com</a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Footer Bottom */}
      <div className="text-center p-2 bg-dark text-light small mt-3">
        © 2025{" "}
        <a
          href="https://www.SCS.com"
          className="text-light text-decoration-none"
        >
          Sindh Chambal
        </a>{" "}
        | Made in India. Designed by SCS Software
      </div>
    </footer>
  )
}

export default Footer
