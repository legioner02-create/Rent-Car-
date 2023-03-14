import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  const navigate = useNavigate();

  const [car, setCar] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/cars?query=' + car);
  }

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Car name" required value={car} onInput={(e) => {setCar(e.target.value)}} />
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Find Car</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
