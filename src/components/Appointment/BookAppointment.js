import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import AppointmentService from "../../service/AppointmentService";
import Doctor from "../../model/Appointment";
import Patient from "../../model/Patient";
import { Link } from "react-router-dom";


import {Formik,Form,Field,ErrorMessage} from "formik";
import axios from "axios";
//import "./signup.css";
function BookAppointment(){
      let handleSubmit = (values) => {
        let requestBody = {
            appointmentId : values.appointmentId,
            
            patient: {
                patientId: values.patientId,
                // "patientName": "Rama Swamy",
                // "patientAge": 48,
                // "patientContactNo": 8553623237
            },
            doctor: {
                // "date": "2022-08-18",
                // "specialization": "General",
                // "doctorName": "Sandhya",
                doctorid : values.doctorid,
            },
            symptoms: values.symptoms,
            appointmentDate: values.appointmentDate,

            // appointmentId : values.appointmentId,
            
            // patientId: values.Patient.patientId,
        
            // doctorid : values.Doctor.doctorid,

            // symptoms: values.symptoms,
            
            // appointmentDate: values.appointmentDate,
            
        
        };
        axios
          .post("http://localhost:8082/appointment", requestBody)
          .then((response) => alert("Appointment Booked succesfully "))
          .catch((error) => alert(error));

    };
        
        let handleValidate=(values)=>{
            const errors={};
            if(!values.appointmentId){
                errors.appointmentId=" cannot be empty"
              }
             if(!values.patientId){
               errors.patientId=" cannot be empty"
             }
             if(!values.doctorid){
               errors.doctorid=" cannot be empty"
             }
             if(!values.symptoms){
               errors.symptoms=" cannot be empty "
             }
             if(!values.appointmentDate){
                errors.appointmentDate=" cannot be empty "
              }
             return errors;
            };
    return <div className="signup-container d-flex flex-column align-items-center" >
            <h1 style={{color:"white"}}>Book appointment</h1>
            <Formik initialValues={{
         // email: "",
         appointmentId: "",
         patientId: "",
         doctorid: "",
         symptoms: "",
         appointmentDate: "",
        }}
        onSubmit={(e) => handleSubmit(e)}
        validate={(e)=>handleValidate(e)}>
        
                 {(props)=>(
                     <Form >
                         <div >
                        <label className="form-label">Appointment ID</label>
                         <Field type="number"  name="appointmentId" className="form-control"/>
                         <ErrorMessage  name="appointmentId">
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>
                        <div >
                        <label className="form-label">Patient ID</label>
                         <Field type="patientid"  name="patientId" className="form-control"/>
                         <ErrorMessage  name="patientId">
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>
                         <div >
                         <label className="form-label">Doctor ID</label>
                         <Field type="number" name="doctorid" className="form-control"/>
                         <ErrorMessage  name="doctorid">
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>
                         <div>
                         <label className="form-label">Symptoms</label>
                         <Field type="text" name="symptoms"className="form-control" />
                         <ErrorMessage  name="symptoms">
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>
                         <div>
                         <label className="form-label">Date</label>
                         <Field type="date" name="appointmentDate"className="form-control" />
                         <ErrorMessage  name="appointmentDate">
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>
                         <div>
              <button type="submit" className="btn btn-danger login-btn">
                Book Appointment  
              </button>
            </div>
                     </Form>
                 )
                 }

            </Formik>
        </div>
}

export default BookAppointment;