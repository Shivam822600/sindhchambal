import React from "react"
import { Container, Row, Col } from "reactstrap"

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <footer className="bg-light text-center text-lg-start">
            <div className="container p-4">
              {/* Feedback and Advertisement Info */}
              <div className="row">
                <div className="col-md-6 mb-4">
                  <h6>For epaper related feedback and queries please email us on:</h6>
                  <a href="mailto:yashaswini.shekar@erelego.com">
                    sanjeevsharma@gmail.com
                  </a>{' '}
                  or{' '}
                  <a href="mailto:sudeer@erelego.com">SindhChambal@gmail.com</a>
                </div>
                <div className="col-md-6 mb-4">
                  <h6>For digital advertisement queries please email us at:</h6>
                  <a href="mailto:sudeer@erelego.com">gouravsharma@gmail.com</a>
                </div>
              </div>

              {/* Popup Contact Info */}
              <div className="row mt-3">
                <div className="col-md-12 text-center">
                  <button
                    className="btn btn-outline-primary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#contactInfo"
                    aria-expanded="false"
                    aria-controls="contactInfo"
                  >
                    Contact Information
                  </button>
                  <div className="collapse mt-3" id="contactInfo">
                    <div className="card card-body">
                      For Information:{' '}
                      <a href="mailto:swadeshbhopal@gmail.com">
                        swadeshbhopal@gmail.com
                      </a>
                      <br />
                      For Advertisement:{' '}
                      <a href="mailto:advt.swadeshbhopal@gmail.com">
                        advt.gouravsharma@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer Bottom */}
            <div className="text-center p-3 bg-dark text-light">
              © 2025{' '}
              <a
                href="https://www.SCS.com"
                className="text-light text-decoration-none"
              >
                Sindh Chambal
              </a>{' '}
              Made in India. Designed by SCS Software
            </div>
          </footer>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
