import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { jsPDF } from "jspdf";
import { Link, useLoaderData } from "react-router-dom";
import { BsStarFill,BsCurrencyDollar,BsFillCartFill } from "react-icons/bs";
import { FcVideoCall } from "react-icons/fc";
import { FiClock } from "react-icons/fi";
import { GoNote } from "react-icons/go";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { mycontext } from '../../contextApi/UserContext';
import "./CourseDetails.css";
import { useContext } from "react";
import logo from '../../assest/logo.png'
const CourseDetails = () => {
const {user} = useContext(mycontext)

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


  const handlePFD = () =>{
    const doc = new jsPDF("a4", false);
    doc.addImage(logo, "png", 10, 10, 10, 10);
    doc.setFontSize(15);
    doc.text(20, 16, "E-Learning");
    doc.setFontSize(10);
    doc.text(20, 19, "A digital Learning Platform");
    doc.setFontSize(20);
    doc.text(40, 25, "Student Information");
    doc.setFontSize(15);
    doc.text(40, 35, "Name :");
    doc.text(40, 40, "Email :");
    doc.text(40, 45, "Cources : ");
    doc.text(40, 50, "Price : ");
    doc.text(70, 35, user.displayName);
    doc.text(70, 40, user.email);
    doc.text(70, 45,course_name);
    doc.text(70, 50, price + "$");
    doc.setFontSize(40);
    doc.text(20, 60, `Join Now Get  ${discount}% OFF`);
    doc.save("e-learning-a4.pdf");
  }




  return (
    <Container className="my-4">
      <button onClick={handlePFD} className = 'btn btn-success my-3'>Download PDF </button>
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
                <Link to = {`/parces/${course_name}`} > <BsFillCartFill /> <span> Parcess</span>  </Link>
                <Link to = '/'> Cancel </Link>
            </div>
              
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>

            <div className="details_section">
            <h4 className="text-center">What Will You Learn</h4>

                {
                    topics.map(topic => <li className="topic_text">{topic}</li> )
                }

            </div>

        </Col>
      </Row>
    </Container>
  );
};

export default CourseDetails;
