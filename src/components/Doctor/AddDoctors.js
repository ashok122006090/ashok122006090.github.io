import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import DoctorService from "../../service/DoctorService";
import Doctor from "../../model/Doctor";
import { Link } from "react-router-dom";


import {Formik,Form,Field,ErrorMessage} from "formik";
import axios from "axios";
//import "./signup.css";
function AddDoctors(){
      let handleSubmit = (values) => {
        let requestBody = {
        
            doctorid : values.doctorid,
            date: values.date,

        
            specialization: values.specialization,
            doctorName: values.doctorName,
        
        };
        axios
          .post("http://localhost:8082/doctors", requestBody)
          .then((response) => alert("doctor details succesfully added "))
          .catch((error) => alert(error));

    };
        
        let handleValidate=(values)=>{
            const errors={};
            if(!values.doctorid){
                errors.doctorid=" cannot be empty"
              }
             if(!values.date){
               errors.date=" cannot be empty"
             }
             if(!values.specialization){
               errors.specialization=" cannot be empty"
             }
             if(!values.doctorName){
               errors.doctorName=" enter doctorName correct pattern "
             }
             return errors;
            };
    return <div className="signup-container d-flex flex-column align-items-center" >
            <h1 style={{color:"white"}}>Add Doctor</h1>
            <Formik initialValues={{
         // email: "",
         date: "",
         specialization: "",
         doctorName: "",
        }}
        onSubmit={(e) => handleSubmit(e)}
        validate={(e)=>handleValidate(e)}>
        
                 {(props)=>(
                     <Form >
                         <div >
                        <label className="form-label">Id</label>
                         <Field type="number"  name="doctorid" className="form-control"/>
                         <ErrorMessage  name="doctorid">
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>
                        <div >
                        <label className="form-label">DATE</label>
                         <Field type="date"  name="date" className="form-control"/>
                         <ErrorMessage  name="date">
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>
                         <div >
                         <label className="form-label">specialization</label>
                         <Field type="text" name="specialization" className="form-control"/>
                         <ErrorMessage  name="specialization">
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>
                         <div>
                         <label className="form-label">Name</label>
                         <Field type="text" name="doctorName"className="form-control" />
                         <ErrorMessage  name="doctorName">
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>
                         <div>
              <button type="submit" className="btn btn-danger login-btn">
                add Doctor 
              </button>
            </div>
                     </Form>
                 )
                 }

            </Formik>
        </div>
}

export default AddDoctors;