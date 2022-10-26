import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const coursedetails = useLoaderData();
  console.log(coursedetails);
  const {
    img,
    course_name,
    description,
    discount,
    price,
    ratting,
    topics,
    total_sells,
    total_video,
    course_duration,
    assignment,
  } = coursedetails;
  return (
    <Container>
      <Row>
        <Col md={6}>
            
        </Col>
        <Col md={6}>2 of 2</Col>
      </Row>
    </Container>
  );
};

export default CourseDetails;
