import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function Main() {
    return (
        <>
            {/* <Button className='me-5' variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="info">Info</Button>
            <Button variant="light">Light</Button>
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button> */}

<Container>
            <Row className='row gap-2 '>
                <Col md ={6} style={{ width: "200px", height: "200px", backgroundColor: "red"}}><h5>Box1</h5></Col>
                <Col md ={6} style={{ width: "200px", height: "200px", backgroundColor: "red"}}><h5>Box2</h5></Col>
                <Col md ={6} style={{ width: "200px", height: "200px", backgroundColor: "red"}}><h5>Box3</h5></Col>
                <Col md ={6} style={{ width: "200px", height: "200px", backgroundColor: "red"}}><h5>Box4</h5></Col>
                <Col md ={6} style={{ width: "200px", height: "200px", backgroundColor: "red"}}><h5>Box5</h5></Col>
                <Col md ={6} style={{ width: "200px", height: "200px", backgroundColor: "red"}}><h5>Box6</h5></Col>
            </Row>
</Container>
        </>
    )
}
