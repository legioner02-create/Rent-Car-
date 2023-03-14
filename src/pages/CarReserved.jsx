import React, {useEffect} from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";

const CarReserved = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Helmet>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">Вы успешно зарезервировали!</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarReserved;
