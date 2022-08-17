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
import AdminLogin from './AdminLogin/AdminLogin';
import HomePage from './HomePage';
import Signup from './SignUp/Signup';
import UpdatePatient from './Patient/UpdatePatient';
import SignIn from './SignUp/SignIn';
import GetAppointment from './Appointment/GetAppointment';
import UpdateAppointment from './Appointment/UpdateAppointment';
//import AddDoctors from './Doctor/AddDoctors';
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
           <Nav.Link href="/adminlogin">AdminManagement</Nav.Link>
            
           <Nav.Link href="/about">About Us</Nav.Link>
           <Nav.Link href="/signup">SignUp</Nav.Link>
          
         </Nav>
         </Container>
       </Navbar>
            
         
          
              <Routes>
              <Route path="" element={<HomePage></HomePage>} />
              {/* <Route exact path="/" component={ShowEmployee} /> */}
              <Route exact path="/" element={<Background></Background>}/>
              <Route path="/adminlogin" element={<AdminLogin></AdminLogin>} />
              {/* <Route path="/modules" element={<ModuleList></ModuleList>} /> */}
              <Route exact path='/DoctorDash/GetDoctor' element={<GetDoctor/>} />
              <Route exact path='/DoctorDash/AddDoctors' element={<AddDoctors/>} />
              
              <Route exact path='/adminlogin/doctors/addDoctors' element={<AddDoctors/>} />
               <Route exact path='/DoctorDash/GetDoctor/updateDoctors' element={<UpdateDoctor/>} />
               <Route exact path='/DoctorDash/GetPatient/updatePatient' element={<UpdatePatient/>} />
               <Route exact path='/DoctorDash/GetAppointment/UpdateAppointment' element={<UpdateAppointment/>} />

               <Route exact path='/adminlogin/doctors/viewDoctors' element={<ViewDoctors/>} />
               <Route exact path='/DoctorDash/GetPatient' element={<GetPatient/>} />

               <Route exact path='/DoctorDash' element={<DoctorDash/>} />
             
             
               <Route exact path='/signup' element={<Signup/>} />
              
               <Route exact path='/Appointment/Appointment/signin' element={<SignIn/>} />

               {/* <Route exact path='/doctors/deleteDoctorsById/:doctorId' element={<DeleteDoctor/>} /> */}


               <Route exact path='/doctor/getPatient' element={<GetPatient/>} />
               <Route exact path='/DoctorDash/GetAppointment' element={<GetAppointment/>} />

               <Route exact path='/Appointment/appointment/BookAppointment' element={<BookAppointment/>} />

                <Route exact path='/appointment' element={<AddAppointment/>} /> 

               <Route path="/about" element={<AboutUs></AboutUs>} />
              </Routes>
           </Router>
         </div>   
        
    )




}
export default FirstPage;