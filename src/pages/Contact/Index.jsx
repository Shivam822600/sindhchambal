import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button, Card, CardBody, CardTitle } from "reactstrap";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    // setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container className="text-center">
      <Card className="shadow p-4">
        <CardBody>
          <CardTitle tag="h1">Contact Us</CardTitle>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input
                type="textarea"
                name="message"
                id="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <Button color="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Contact;
