import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";
import Appointment from "../../model/Appointment";
import AppointmentService from "../../service/AppointmentService";

class BookAppointment extends React.Component {
    constructor(props){
        super(props)
        this.state={
        //     appointmentId:'',
        //     appointment_date :'',
        //  symptoms :'',
        //  doctorId : '',
        //  patientId :''
        appointment: new Appointment(),
            appointment: []
            
        }
        this.Service= new AppointmentService();
        this.changeAppointmentIdHandler= this.changeAppointmentIdHandler.bind(this);
        this.changeAppointmentDateHandler= this.changeAppointmentDateHandler.bind(this);
         this.changeSymptomsHandler= this.changeSymptomsHandler.bind(this);
         this.changeDoctorHandler= this.changeDoctorHandler.bind(this);
         this.changePatientHandler= this.changePatientHandler.bind(this);
         

        this.saveAppointment=this.saveAppointment.bind(this);
    }
    saveAppointment=(e)=>{
        e.preventDefault();
        let appointment = {appointmentId:this.state.appointmentId,appointment_date:this.state.appointment_date,symptoms:this.state.symptoms,
            doctorId:this.state.doctorId,patientId:this.state.patientId};
        

        console.log('appointment =>' + JSON.stringify(appointment));

       this.Service.addAppointment(appointment).then(res =>{
           this.props.history.push('/Appointment'); 
        });

    }
    changeAppointmentIdHandler= (event)=>{
        this.setState({appointmentId:event.target.value});
    }
    changeAppointmentDateHandler= (event)=>{
        this.setState({appointment_date:event.target.value});
    }
    changeSymptomsHandler= (event)=>{
        this.setState({symptoms:event.target.value});
    }
    changeDoctorHandler= (event)=>{
        this.setState({doctorId:event.target.value});
    }
    changePatientHandler= (event)=>{
        this.setState({patientId:event.target.value});
    } 
        cancel(){
            this.props.history.push('/Appointment');

        }
        
    

    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                       <div className="card col-md-6 offset-md-3 offset-md-3">
                           <h3 className="text-center"> Book Appointment  </h3>
                           <div className="card-body">
                               <form>
                               <div className="form-group">
                                       <label>appointment_Id</label>
                                       <input placeholder=" " name="appointmentId"   className="form-control" type="number"
                                       value={this.state.appointmentId} onChange={this.changeAppointmentIdHandler}/>
                                   </div>
                                   <div className="form-group">
                                       <label>appointment_date</label>
                                       <input placeholder=" " name="appointment_date"   className="form-control" type="date"
                                       value={this.state.appointment_date} onChange={this.changeAppointmentDateHandler}/>
                                   </div>
                                   <div className="form-group">
                                       <label>symptoms</label>
                                       <input placeholder=" " name="symptoms"  className="form-control" type="text"
                                       value={this.state.symptoms} onChange={this.changeSymptomsHandler}/>
                                   </div>
                                   <div className="form-group">
                                       <label>doctorId</label>
                                       <input placeholder=" " name="doctorId"  className="form-control" type="number"
                                       value={this.state.doctorId} onChange={this.changeDoctorHandler}/>
                                   </div>

                                  <div className="form-group">
                                       <label> Enter Patient Id</label>
                                       <input  placeholder=" " name="patient_id" className="form-control" type="number"
                                       value={this.state.patientId} onChange={this.changePatientHandler}/>
                                   </div>

                                 <button className="btn btn-success" onClick={this.saveAppointment}>Save</button>
                                 <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                               </form>
                           </div>

                       </div>

                   </div>

               </div>
            </div>
        )
    }
}
export default BookAppointment;