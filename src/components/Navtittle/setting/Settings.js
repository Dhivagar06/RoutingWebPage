import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Settings.css'

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className='borders'>
      <Button onClick={handleShow}  variant="outline"> <img src={require('../setting/settings.jpg')} alt='settingsimg' className='settingsimg' />
       </Button>
       <h1 className='settingtext'>Settings</h1>
       <br/>
       <hr/>
      </div>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Settings</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
<ul className='ul'>
  <li><img src={require('../setting/settings.jpg')} alt='' className='prifile' />  <b>Profile</b></li>
  <hr/>
  <li><i class="bi bi-shield-lock  userprofile " /> <b>Security Notifications</b></li>
  <hr/>
  <li><i class="bi bi-translate userprofile"  /><b>App Language </b></li>
  <hr/>
  <li><i class="bi bi-question-circle userprofile"></i><b>Help</b></li>
  <hr/>
  <li><i class="bi bi-box-arrow-in-left userprofile"/>  <b>Log Out</b></li>
  <hr/>
</ul>
      

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Settings() {
  return (
    <>
      {['end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default Settings;