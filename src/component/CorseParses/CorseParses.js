import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { mycontext } from "../../contextApi/UserContext";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./CorseParces.css";
const CorseParses = () => {
  const corseparses = useLoaderData();
  const {user} = useContext(mycontext)
  const {
    img,
    course_name,
    description,
    discount,
    price,
    total_video,
    course_duration,
    assignment,
  } = corseparses;

  return (
    <Container>
      <Row>
        <h2 className="text-center my-3 text-success">Congratulations {user?.displayName} , You Parces {course_name} Course  </h2>
        <h3 className="text-center" >Course Details</h3>
        <Col md = {6}>
         
          <div>
            <Form className="mx-auto">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="label"> Course Name </Form.Label>
                <Form.Control defaultValue={course_name} type="text" readOnly />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="label"> Course price </Form.Label>
                <Form.Control defaultValue={price} type="text" readOnly />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="label"> Course discount % </Form.Label>
                <Form.Control defaultValue={discount} type="text" readOnly />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="label"> total video </Form.Label>
                <Form.Control defaultValue={total_video} type="text" readOnly />
              </Form.Group>
            </Form>
          </div>
        </Col>
        <Col md = {6}>
          <div>
            <Form className="mx-auto">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="label">
                  {" "}
                  course duration Month{" "}
                </Form.Label>
                <Form.Control
                  defaultValue={course_duration}
                  type="text"
                  readOnly
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="label"> Total Assignment </Form.Label>
                <Form.Control defaultValue={assignment} type="text" readOnly />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="label"> description, </Form.Label>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                  <Form.Control
                    as="textarea"
                    defaultValue={description}
                    style={{ height: "150px" }}
                    readOnly
                  />
                </FloatingLabel>
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CorseParses;
