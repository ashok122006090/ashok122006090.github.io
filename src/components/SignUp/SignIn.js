import React from 'react'
import {Form,Button} from 'react-bootstrap'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const imgStyle = {
  backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '7vw',
        height: '14vh',
        opacity: '0.7'
};

function SignIn() {

  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");

  function validateForm() {
    return uname.length > 0 && pwd.length > 0;
  }

   const navigate = useNavigate();
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   // navigate('/course')
  // }

  //const history = useHistory();
  
    const handleSubmit = () => {
        navigate("/Appointment/appointment/BookAppointment")
    }

  return (
    <div>
        
        <div className="container p-5 my-5 border w-25 mt-5 border border-info rounded" >

        {/* <img style={imgStyle} src="images/login.png"></img> */}

          <div className='p-1 mt-3 mb-4 alert alert-info font-weight-bold'>
            <h3>Login</h3>
          </div>

        <Form onSubmit={()=>handleSubmit()}>
            <div className="form-group mb-1">
        {/* <label className="font-weight-bold text-info">User Name</label> */}
        <input type="text" className="form-control" placeholder='Your User-Name' value={uname} onChange={(e) => setUname(e.target.value)}></input><br/>
            </div>
        
            <div className="form-group ">
        {/* <label className="font-weight-bold text-info">Password </label> */}
        <input type="password" className="form-control" placeholder='Your Password' value={pwd} onChange={(e) => setPwd(e.target.value)}></input><br/>
        </div>

        <Button type="submit" variant="outline-info" size="lg" disabled={!validateForm()}>Submit</Button>
        
        </Form>
        </div>
        
        
    </div>
  )
}

export default SignIn