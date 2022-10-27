import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer/Footer';
import Navbars from '../component/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbars></Navbars>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;