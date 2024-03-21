import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav, Navbar, Container, NavDropdown, Dropdown, Form } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";


function MyNavbar() {

    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <Navbar className="navbar nabvar-light bg-light justify-content-between " >

            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">

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

                <i className="bi bi-arrow-left" style={{ fontSize: '25px', marginRight: '8px', marginLeft: '30px' }}></i>

                <div style={{ width: '60px', textAlign: 'center' }}>
                    <DatePicker wrapperClassName="datepicker"
                        selected={new Date()}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="yyyy"
                        showYearPicker
                        style={{ width: '10px' }}

                    />
                </div>
                <div className="bi bi-arrow-right" style={{ fontSize: '25px', marginLeft: '8px' }}></div>
            </div>




            <Image src="..." roundedCircle={true} style={{ height: '35px', width: '35px', backgroundColor: '#bbb', marginRight: '8px' }} />
            <Image src="..." roundedCircle={true} style={{ height: '35px', width: '35px', backgroundColor: '#bbb', marginRight: '8px' }} />
        </Navbar>
    );
}

export default MyNavbar;