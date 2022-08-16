import {
    Button,
   IconButton,
    Paper,
    Card,
    TextField,
    Box,
    CardContent,
    CardActions,
   Modal,
   Typography
  } from "@mui/material";
import React from 'react';
import { Link } from "react-router-dom";
import Appointment from '../../model/Appointment';
import AppointmentService from '../../service/AppointmentService';
import Doctor from '../../model/Doctor';
import DoctorService from '../../service/DoctorService';
import axios from "axios";
  import { useEffect, useState } from "react";
  import { Navigate, useNavigate } from "react-router-dom";
  import { Formik,Form,Field,ErrorMessage } from "formik";
  import BookAppointment from "./BookAppointment";
 

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

class AddAppointment extends React.Component {
    constructor() {
        super();
        this.state = {
            doctor: new Doctor(),
            doctor: []

        }
        this.doctorService = new DoctorService();
    }
    
    componentDidMount() {
        this.doctorService.getDoctors()
            .then((result) => {
                this.setState({ doctor: result.data });
            });
    }   
    render() {
        return (
            <div>
                 
                <div>
                    {
                    this.state.doctor.length > 0 ? (
                        <div>
                        {this.state.doctor.map((doc,index) => {
                       //    let imageName= require(`./images/res${rest.restaurant_id}.jpg`);
                       //    console.log(imageName);
                          return(
                         <div className="d-flex align-items-center justify-content-center">
                         <Box style={{margin:"50px",width:"80%" }} component={Paper} className="box" >    
                         <Card variant="outlined" component={Paper} className="card-container">
                         <CardContent style={{padding:"0px" }}className="cardcontent-container">
                         {/* <div><img src ={imageName} alt={imageName  }/></div> */}
                         <div className="cardtext">
                         <h4>Doctor Id:{doc.doctorid} </h4>
                         <h5>Doctor Name :{doc.doctorName} </h5>
                         <h5>Specialization:{doc.specialization} </h5>
                         <h5>Avalible Date:{doc.date}</h5>
                         </div>
                         </CardContent>
                   </Card>
                  </Box> 
                  </div>
                     ); })    }
                 </div>
                        ) : <div>No Doctor Present</div>
                    }
                </div>

                <div>
      <Button style={{margin:"30px"}} variant="contained" color="error"><Link to={`./appointment/BookAppointment`} >
        BookAppointment</Link></Button>
   
      </div>
            </div>
        );
    }
}
export default AddAppointment;
