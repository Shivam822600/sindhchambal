import React from "react";
import { Container, Card, CardBody, CardTitle, CardText } from "reactstrap";

const About = () => {
  return (
    <Container className="text-center">
      <Card className="shadow p-4">
        <CardBody>
          <CardTitle tag="h1">About Us</CardTitle>
          <CardText>
            We are a company dedicated to providing top-notch services with a
            focus on customer satisfaction.
          </CardText>
          <CardText>
            Our team consists of experienced professionals passionate about
            innovation and excellence.
          </CardText>
        </CardBody>
      </Card>
    </Container>
  );
};

export default About;
