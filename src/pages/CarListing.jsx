import React from "react";
import {useLocation} from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import queryString from 'query-string';

const CarListing = () => {
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const routeParam = queryParams.query;

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
                
            </Col>

            {carData.filter((item) => {
              if (routeParam !== '' && routeParam !== undefined) {
                return item.carName == routeParam;
              }

              return true;
            }).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
