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
        <Col className="course_nav mt-5" md={3}>
          <h3 className="text-center h1 text-danger">Topics</h3>
          {corses.map((corse) => (
            <CourseList corse={corse} key={corse.course_id}></CourseList>
          ))}{" "}
        </Col>
        <Col className="mt-5" md={9}>
          <div className="allcards">
            {corses.map((corsecard) => (
              <CourseCard
                key={corsecard.course_id}
                corsecard={corsecard}
              ></CourseCard>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CoursePage;
