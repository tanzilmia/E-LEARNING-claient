import React from 'react';
import Card from 'react-bootstrap/Card';
import { BsStarFill,BsCurrencyDollar } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './courseCard.css'
const CourseCard = ({corsecard}) => {
  const {img,course_name,ratting,price,total_rettings,discount} = corsecard
    return (
        <Card className='card_single'>
        <Card.Img className='cards_img' variant="top" src= {img} />
        <Card.Body>
          
          <div className='short_details mb-3'>
            <div className="rattings">
                <span> <BsStarFill/>{ratting} </span>
                <span> <FaUserFriends/>({total_rettings})</span>
                <span> <BsCurrencyDollar/>{price}</span>
            </div>
          </div>
          
          <Link className='btntitle' to = {`/details/${course_name}`} variant="primary">{course_name}</Link>
        </Card.Body>
      </Card>
    );
};

export default CourseCard;