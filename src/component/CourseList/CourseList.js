import React from 'react';
import { Link } from 'react-router-dom';
import './couselist.css'
const CourseList = ({corse}) => {
    const {course_name} = corse
    return (
        <div className='sidenav'>
            <Link>{course_name}</Link>
        </div>
    );
};

export default CourseList;