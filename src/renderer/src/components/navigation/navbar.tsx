import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav, Navbar, Container, NavDropdown, Dropdown, Form } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";


import accountLogoTMP from '../../assets/electron.svg'




function MyNavbar() {

    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <Navbar className="navbar nabvar-light bg-light justify-content-between " >

            <Dropdown style={{ marginLeft: '8px' }}>
                <Dropdown.Toggle variant=" primary" id="dropdown-basic">
                    View: Both
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Both</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Grouped</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Horizontal</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div>
                <a href='' style={{ float: 'left' }}>
                    <i className="bi bi-arrow-left" style={{ fontSize: '25px', marginRight: '8px' }}></i>
                </a>
                <div style={{ width: '60px', textAlign: 'center', float: 'left' }}>
                    <DatePicker wrapperClassName="datepicker"
                        selected={new Date()}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="yyyy"
                        showYearPicker
                        style={{ width: '10px' }}

                    />
                </div>
                <a href='' style={{ float: 'left' }}>
                    <div className="bi bi-arrow-right" style={{ fontSize: '25px', marginLeft: '8px' }}></div>
                </a>

            </div>

            <div>
                <a href='#'>
                    <Image src={accountLogoTMP} roundedCircle={true} style={{ height: '35px', width: '35px', backgroundColor: '#bbb', marginRight: '8px', float: 'left' }} />
                </a>
                <a href='#'>
                    <Image src={accountLogoTMP} roundedCircle={true} style={{ height: '35px', width: '35px', backgroundColor: '#bbb', marginRight: '8px', float: 'left' }} />
                </a>
                <div className="vr" style={{ float: 'left', height: '35px' }} />
                <div className="settings-button-nav" style={{ marginRight: '8px', marginLeft: '8px', float: 'left' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                    </svg>
                </div>
            </div>

        </Navbar>
    );
}

export default MyNavbar;