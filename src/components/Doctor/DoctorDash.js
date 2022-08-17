// import React from 'react'
// import {Button} from 'react-bootstrap'
// import { useNavigate , Link } from 'react-router-dom'
// import GetDoctor from './GetDoctor';
import React from 'react';
import { useNavigate , Link } from 'react-router-dom'
import GetDoctor from './GetDoctor';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
    
        
        // {/* <Button type="Submit" variant="info" size="lg" > <Link to={`./AddDoctors`} >
        //  Add Doctor</Link></Button>{' '}
        // <Button type="Submit" variant="warning" size="lg"><Link to={`./GetDoctor`} >View Doctor</Link></Button>{' '}
        // <Button type="Submit" variant="warning" size="lg"><Link to={`./GetPatient`} >View Patient</Link></Button>{' '}
        // <Button type="Submit" variant="warning" size="lg"><Link to={`./GetAppointment`} >View Appointment</Link></Button>{' '} */}


        //  {/* <Button type="Submit" variant="warning" size="lg" onClick={()=>addCourse()}>View Admission</Button>{' '}
        // <Button type="Submit" variant="info" size="lg" onClick={()=>viewByIdCourse()}>Show Admission by CourseId</Button>{' '}
        // <Button type="Submit" variant="info" size="lg" onClick={()=>viewByIdCourse()}>Show Admission By date </Button>{' '}  */}
        
           
              
        <div className="wrapper2  d-flex flex-row align-items-center justify-content-center fluidContainer ">

        <div>
    <Card sx={{ width: 250 ,height:400,margin:"30px"}}>
      <CardMedia
        component="img"
        alt="image"
        height="100px"
        image="https://cdn-icons-png.flaticon.com/512/822/822118.png" />
      <CardContent >
        <Typography gutterBottom variant="h5">
          <div style={{ fontFamily:"fantasy",marginLeft:50}}>Add Doctor</div>
        </Typography>
      </CardContent>
      <CardActions  className= "d-flex flex-row align-items-center justify-content-center" >
        <Link to="./AddDoctors">
        <Button  variant="contained" color="error"size="small">GO</Button>
        </Link>
      </CardActions>
    </Card>
    </div>
    <div>
    <Card sx={{ width: 250 ,height:400,margin:"30px"}}>
      <CardMedia
        component="img"
        alt="image"
        height="100px"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcwlLXT0xQo9792NSaLZ79pivrFyLJJAT7mw&usqp=CAU" />
      <CardContent >
        <Typography gutterBottom variant="h5">
          <div style={{ fontFamily:"fantasy",marginLeft:50}}>View Doctor</div>
        </Typography>
      </CardContent>
      <CardActions  className= "d-flex flex-row align-items-center justify-content-center" >
        <Link to="./GetDoctor">
        <Button  variant="contained" color="error"size="small">GO</Button>
        </Link>
      </CardActions>
    </Card>
    </div>
    <div>
    <Card sx={{ width: 250 ,height:400,margin:"30px"}}>
      <CardMedia
        component="img"
        alt="image"
        height="100px"
        image="https://cdn-icons-png.flaticon.com/512/2750/2750667.png"  />
      <CardContent >
        <Typography gutterBottom variant="h5">
          <div style={{ fontFamily:"fantasy",marginLeft:50}}>View Patient</div>
        </Typography>
      </CardContent>
      <CardActions  className= "d-flex flex-row align-items-center justify-content-center" >
        <Link to="./GetPatient">
        <Button  variant="contained" color="error"size="small">GO</Button>
        </Link>
      </CardActions>
    </Card>
    </div>
    <div>
    <Card sx={{ width: 250 ,height:400,margin:"30px"}}>
      <CardMedia
        component="img"
        alt="image"
        height="100px"
        image="https://cdn-icons-png.flaticon.com/512/1283/1283176.png"
      />
      <CardContent >
        <Typography gutterBottom variant="h5">
          <div style={{ fontFamily:"fantasy",marginLeft:50}}>View Appointments</div>
        </Typography>
      </CardContent>
      <CardActions  className= "d-flex flex-row align-items-center justify-content-center" >
        <Link to="./GetAppointment">
        <Button  variant="contained" color="error"size="small">GO</Button>
        </Link>
      </CardActions>
    </Card>
    </div></div>
  
  )
}

export default DoctorDash