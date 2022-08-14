import React from 'react'
import { Navbar, Nav, Container,Offcanvas,NavDropdown,Button,Form,FormControl } from 'react-bootstrap';
import { Route, Routes,Link, BrowserRouter as Router } from 'react-router-dom'
import AddDoctors from './Doctor/AddDoctors';
import UpdateDoctor from './Doctor/UpdateDoctor';
import GetDoctor from './Doctor/GetDoctor';
import Header
 from './Header';
 import Background from './Background';
 import DoctorDash from './Doctor/DoctorDash';
 import AboutUs from './AboutUs';
 import GetPatient from './Patient/GetPatient';
import ViewDoctors from './Doctor/ViewDoctors';
import BookAppointment from './Appointment/BookAppointment';
import AddAppointment from './Appointment/AddAppointment';
function FirstPage(){
    return (
        <div>
           
           <Router>
        <Navbar bg="light" variant="light">
         <Container>
         <Navbar.Brand style={{letterSpacing:'2px',textShadow: '1px 1px gray',fontSize:'24px'}} href="/"><>SmartCovidClinicApp</></Navbar.Brand>
         <Nav className="me-auto">
           <Nav.Link href="/">Home</Nav.Link>
           <Nav.Link href="/Appointment">Book appointment</Nav.Link>
           <Nav.Link href="/doctor">AdminManagement</Nav.Link>
            
           <Nav.Link href="/about">About Us</Nav.Link>
          
         </Nav>
         </Container>
       </Navbar>
            
         
          
              <Routes>
              {/* <Route exact path="/" component={ShowEmployee} /> */}
              <Route exact path="/" element={<Background></Background>}/>
              <Route path="/doctor" element={<DoctorDash></DoctorDash>} />
              {/* <Route path="/modules" element={<ModuleList></ModuleList>} /> */}
              <Route exact path='/doctor/getDoctor' element={<GetDoctor/>} />
              
              <Route exact path='/doctors/addDoctors' element={<AddDoctors/>} />
               <Route exact path='/doctors/updateDoctors' element={<UpdateDoctor/>} />
               <Route exact path='/doctors/viewDoctors' element={<ViewDoctors/>} />

               {/* <Route exact path='/doctors/deleteDoctorsById/:doctorId' element={<DeleteDoctor/>} /> */}

               <Route exact path='/getPatient' element={<GetPatient/>} />
               <Route exact path='/Appointment' element={<BookAppointment/>} />
               {/* <Route exact path='/appointment' element={<AddAppointment/>} /> */}

               <Route path="/about" element={<AboutUs></AboutUs>} />
              </Routes>
           </Router>
         </div>   
        
    )




}
export default FirstPage;