import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbars from '../component/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbars></Navbars>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;