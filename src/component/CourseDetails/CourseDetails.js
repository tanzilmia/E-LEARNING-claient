import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";
import { BsStarFill,BsCurrencyDollar } from "react-icons/bs";
import { FcVideoCall } from "react-icons/fc";
import { FiClock } from "react-icons/fi";
import { GoNote } from "react-icons/go";
import { RiMoneyEuroCircleLine } from "react-icons/ri";

import "./CourseDetails.css";
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
    total_rettings,
    topics,
    total_sells,
    total_video,
    course_duration,
    assignment,
  } = coursedetails;
  return (
    <Container className="mt-3">
      <Row>
        <Col md={6}>
          <Card style={{ width: "100%" }}>
            <Card.Img style={{ height: "300px" }} variant="top" src={img} />
            <Card.Body>
              <div className="titlebox">
                <span className="title"> {course_name} </span>
                <span className="ratting_details">
                   
                  <span className="ratting"> <BsStarFill className="icons" /> {ratting} </span>
                  <span className="total_rattings"> ({total_rettings}) </span>
                </span>
                <span className="discount"> {discount} %OFF </span>
              </div>
              <Card.Text className="description">{description}</Card.Text>

              <div className="course_info">
                <div className="course_price common"> <BsCurrencyDollar/>{price} </div>
                <div className="total_video common"> <FcVideoCall/> {total_video}</div>
                <div className="course_duration common"> <FiClock/> {course_duration} Month</div>
                <div className="assignment common"> <GoNote/> {assignment} Assignment</div>
                <div className="total_sells common"> <RiMoneyEuroCircleLine/> {total_sells}</div>
              </div>

            <div className="btns_booking">
                <Link to = {`/parces/${course_name}`} >Parcess  </Link>
                <Link to = '/'> Cancel </Link>
            </div>
              
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>

            <div className="details_section">
            <h4 className="text-center">What Will You Learn</h4>

                {
                    topics.map(topic => <p className="topic_text"> >> {topic}</p> )
                }

            </div>

        </Col>
      </Row>
    </Container>
  );
};

export default CourseDetails;
