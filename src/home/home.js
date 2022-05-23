import React from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import Button from 'react-bootstrap/Button'

function Home() {
    return (
        <Container fluid>
            <Row>
                <Header />
            </Row>
            <Row className="homeRow bg-light">
                <Col className="imagecol">
                        <input className="imageForm" type="file" accept=".jpg" />
                </Col>
                <Col className="choicecol">
                <Form.Group className="choiceForm">
                    <Form.Label>Additional Information</Form.Label>
                    <Form.Select className="formSelect">
                        <option selected disabled>Age</option>
                        <option> 0 </option>
                        <option> 1 </option>
                        <option> 2 </option>
                        <option> 3 </option>
                        <option> 4 </option>
                        <option> 5 </option>
                        <option> 6 </option>
                        <option> 7 </option>
                        <option> 8 </option>
                        <option> 9 </option>
                        <option> 10 </option>
                        <option> 11 </option>
                        <option> 12 </option>
                        <option> 13 </option>
                        <option> 14 </option>
                        <option> 15 </option>
                        <option> 16 </option>
                        <option> 17 </option>
                        <option> 18 </option>
                        <option> 19 </option>
                        <option> 20 </option>
                        <option> 21 </option>
                        <option> 22 </option>
                        <option> 23 </option>
                        <option> 24 </option>
                        <option> 25 </option>
                        <option> 26 </option>
                        <option> 27 </option>
                        <option> 28 </option>
                        <option> 29 </option>
                        <option> 30 </option>
                        <option> 31 </option>
                        <option> 32 </option>
                        <option> 33 </option>
                        <option> 34 </option>
                        <option> 35 </option>
                        <option> 36 </option>
                        <option> 37 </option>
                        <option> 38 </option>
                        <option> 39 </option>
                        <option> 40 </option>
                        <option> 41 </option>
                        <option> 42 </option>
                        <option> 43 </option>
                        <option> 44 </option>
                        <option> 45 </option>
                        <option> 46 </option>
                        <option> 47 </option>
                        <option> 48 </option>
                        <option> 49 </option>
                        <option> 50 </option>
                        <option> 51 </option>
                        <option> 52 </option>
                        <option> 53 </option>
                        <option> 54 </option>
                        <option> 55 </option>
                        <option> 56 </option>
                        <option> 57 </option>
                        <option> 58 </option>
                        <option> 59 </option>
                        <option> 60 </option>
                        <option> 61 </option>
                        <option> 62 </option>
                        <option> 63 </option>
                        <option> 64 </option>
                        <option> 65 </option>
                        <option> 66 </option>
                        <option> 67 </option>
                        <option> 68 </option>
                        <option> 69 </option>
                        <option> 70 </option>
                        <option> 71 </option>
                        <option> 72 </option>
                        <option> 73 </option>
                        <option> 74 </option>
                        <option> 75 </option>
                        <option> 76 </option>
                        <option> 77 </option>
                        <option> 78 </option>
                        <option> 79 </option>
                        <option> 80 </option>
                        <option> 81 </option>
                        <option> 82 </option>
                        <option> 83 </option>
                        <option> 84 </option>
                        <option> 85 </option>
                        <option> 86 </option>
                        <option> 87 </option>
                        <option> 88 </option>
                        <option> 89 </option>
                        <option> 90 </option>
                        <option> 91 </option>
                        <option> 92 </option>
                        <option> 93 </option>
                        <option> 94 </option>
                        <option> 95 </option>
                        <option> 96 </option>
                        <option> 97 </option>
                        <option> 98 </option>
                        <option> 99 </option>
                    </Form.Select>
                    <Form.Select className="formSelect">
                        <option selected disabled>Sex</option>
                        <option> male </option>
                        <option> female </option>
                        <option> unknown </option>
                    </Form.Select>
                    <Form.Select className="formSelect">
                        <option selected disabled>Localization</option>
                        <option> scalp </option>
                        <option> ear </option>
                        <option> face </option>
                        <option> back </option>
                        <option> trunk </option>
                        <option> chest </option>
                        <option> upper extremity </option>
                        <option> abdomen </option>
                        <option> lower extremity </option>
                        <option> genital </option>
                        <option> neck </option>
                        <option> hand </option>
                        <option> foot </option>
                        <option> acral </option>
                        <option> unknown </option>
                    </Form.Select>
                </Form.Group>
                </Col>
            </Row>
            <Row className="rowkoumpi">
                <Col>
                    <Button className="koumpi" variant="outline-success">Submit</Button>
                </Col>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    );
  }
  
  export default Home;