

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ImagenesWeb() {
    return (
        <Container>
            <Row>
                <Col xs={2} md={2}>
                    <Image src="https://cdn.conmebol.com/wp-content/uploads/2023/06/000_334P84K-scaled.jpg" rounded />
                </Col>
            </Row>
            <Row> 
                <Col xs={2} md={2}>
                    <Image src="https://cdn.conmebol.com/wp-content/uploads/2023/06/000_334P84K-scaled.jpg" roundedCircle />
                </Col>
            </Row>
            <Row>
                <Col xs={2} md={2}>
                    <Image src="https://cdn.conmebol.com/wp-content/uploads/2023/06/000_334P84K-scaled.jpg" thumbnail />
                </Col>
            </Row>
        </Container>
    );
}

export default ImagenesWeb;