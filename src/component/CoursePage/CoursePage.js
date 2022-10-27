import React from "react";
import CourseCard from "../courseCard/CourseCard";
import CourseList from "../CourseList/CourseList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLoaderData } from "react-router-dom";

const CoursePage = () => {
  const corses = useLoaderData();

  return (
    <Container>
      <Row>
        <Col className="course_nav mt-5" md={2}>
          <h3 className="text-center h1 text-danger">Topics</h3>
          {corses.map((corse) => (
            <CourseList corse={corse} key={corse.course_id}></CourseList>
          ))}{" "}
        </Col>
        <Col className="mt-5" md={10}>
          <Container>
            <Row>
               {corses.map((corsecard) => (
                 <Col md = {4}>
                  <CourseCard
                  key={corsecard.course_id}
                  corsecard={corsecard}
                 ></CourseCard>
                 </Col>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default CoursePage;
