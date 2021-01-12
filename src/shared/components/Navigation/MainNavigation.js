import React, { useState } from 'react';
import Backdrop from '../UiElements/Backdrop';
import MainHeader from './MainHeader';
import './MainNavigation.css'


import NavLinks  from './NavLinks';
import SideDrawer from './SideDrawer';
const MainNavigation = props => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const drawerOpenHandler = () => {
        setDrawerIsOpen(true);
    }
    const drawerCloseHandler = () => {
        setDrawerIsOpen(false);
    }
    return (
        <React.Fragment>
        {drawerIsOpen && <Backdrop onClick={drawerCloseHandler} />}
        <SideDrawer show={drawerIsOpen} onClick={drawerCloseHandler}>
            <nav className="main-navigation__drawer-nav">
                <NavLinks/>
            </nav>
        </SideDrawer>
        <MainHeader>
            <button className="main-navigation__menu-btn" onClick={drawerOpenHandler}>
                <span></span>
                <span></span>
                <span></span>
                
            </button>
            <h1 className="main-navigation__title">
                    Your Places
            </h1>
            <nav className="main-navigation__header-nav">
                <NavLinks/>
            </nav>
        </MainHeader>
        </React.Fragment>
    )
}
export default MainNavigation; 