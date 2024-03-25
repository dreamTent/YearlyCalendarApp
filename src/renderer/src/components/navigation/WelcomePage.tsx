import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, NavDropdown, Dropdown, Form, ToggleButton, OverlayTrigger, Tooltip } from 'react-bootstrap';



import logo_google from '../../assets/logo_google.png'




function WelcomePage() {
    return (<dialog id='WelcomePageDialog' style={{
        width: '800px', height: '500px', padding: '10px', margin: '10px', boxShadow: '0px 0px 6px grey', textAlign: 'center',
        border: 'none', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'
    }}>

        <h1>Welcome to the Yearly Calendar App</h1>
        <p>
            To get started please use one of the options below to login with your E-Mail Account.
        </p>
        <div style={{ width: '300px', marginLeft: '250px' }}>
            <ul style={{ listStyle: 'none' }}>
                <a href='#' >
                    <li style={{ width: 'calc(100% - 8px)', height: '60px', margin: '3px', border: '1px solid rgb(140, 140, 140)' }}>

                        <OverlayTrigger placement="top" overlay={tooltip('Google Calendar API')}>
                            <img src={logo_google} style={{ height: '60px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                        </OverlayTrigger>

                    </li>
                </a>
                <a href='#' >
                    <li style={{ width: 'calc(100% - 8px)', height: '60px', margin: '3px', border: '1px solid rgb(140, 140, 140)', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>

                        <OverlayTrigger placement="top" overlay={tooltip('Local Outlook Calendar')}>
                            <>Local Outlook Calendar</>
                        </OverlayTrigger>

                    </li>
                </a>
                <a href='#' >
                    <li style={{ width: 'calc(100% - 8px)', height: '60px', margin: '3px', border: '1px solid rgb(140, 140, 140)', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>

                        <OverlayTrigger placement="top" overlay={tooltip('Microsoft 365 / Outlook')}>
                            <>Microsoft 365 / Outlook</>
                        </OverlayTrigger>

                    </li>
                </a>
                <a href='#' >
                    <li style={{ width: 'calc(100% - 8px)', height: '60px', margin: '3px', border: '1px solid rgb(140, 140, 140)', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>

                        <OverlayTrigger placement="top" overlay={tooltip('Microsoft Exchange')}>
                            <>Microsoft Exchangek</>
                        </OverlayTrigger>

                    </li>
                </a>
                <a href='#' >
                    <li style={{ width: 'calc(100% - 8px)', height: '60px', margin: '3px', border: '1px solid rgb(140, 140, 140)', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>

                        <OverlayTrigger placement="top" overlay={tooltip('IMAP')}>
                            <>IMAP</>
                        </OverlayTrigger>

                    </li>
                </a>
            </ul>
        </div>
    </dialog>);
}

function tooltip(text: string) {
    return (
        <Tooltip id="tooltip">
            {text}
        </Tooltip>
    );
}

export default WelcomePage;
