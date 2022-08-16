import React from 'react'
import {Button} from 'react-bootstrap'
import { useNavigate , Link } from 'react-router-dom'
import GetDoctor from './GetDoctor';

const imgStyle = {
    backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '30vw',
          height: '70vh',
          opacity: '0.5'
  };

function DoctorDash() {

    const navigate = useNavigate();
    const addDoctor =async()=>{
    navigate('/doctor/add')
    }
    // const addCourse=async()=>{
    //     navigate('/course/add')
    // }
    const viewDoctor =async()=>{
         navigate('/doctor/view')
   }
  return (
    <div>
        <div className='mt-5'>
        <Button type="Submit" variant="success" size="lg" > <Link to={`./AddDoctors`} >
         Add Doctor</Link></Button>{' '}
        <Button type="Submit" variant="warning" size="lg"><Link to={`./GetDoctor`} >View Doctor</Link></Button>{' '}
        <Button type="Submit" variant="warning" size="lg"><Link to={`./GetPatient`} >View Patient</Link></Button>{' '}

         {/* <Button type="Submit" variant="warning" size="lg" onClick={()=>addCourse()}>View Admission</Button>{' '}
        <Button type="Submit" variant="info" size="lg" onClick={()=>viewByIdCourse()}>Show Admission by CourseId</Button>{' '}
        <Button type="Submit" variant="info" size="lg" onClick={()=>viewByIdCourse()}>Show Admission By date </Button>{' '}  */}
        </div>

        <br/>
        
    </div>
  )
}

export default DoctorDash