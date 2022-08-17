import React from 'react';
import { Link } from "react-router-dom";
import Appointment from '../../model/Appointment';
import AppointmentService from '../../service/AppointmentService';

class GetAppointment extends React.Component {
    constructor() {
        super();
        this.state = {
            appointment: new Appointment(),
            Appointment: []
        }
        this.appointmentService=new AppointmentService();
    }//jest test unit(test the service layer)
    componentDidMount() {
       this.appointmentService.getAppointment()
            .then((result) => {
              alert(JSON.stringify(result));
                this.setState({ appointment: result.data });
            })
            .catch((error) => {
                alert(error);
            });
        // alert("hi") //executed asyn
    }
    render() {
        console.log('render');
        return (
            <div>
                <div>
                    {
                        this.state.appointment.length > 0 ? (
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Appointment Id</th>
                                        <th>Patient ID</th>
                                        <th>Doctor ID</th>
                                        <th>Symptoms</th>
                                        <th>Appointment Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.appointment.map((appmnt) =>
                                        (
                                            <tr>
                                                <td>{appmnt.appointmentId}</td>
                                                <td>{appmnt.patient.patientId}</td>
                                                <td>{appmnt.doctor.doctorId}</td>
                                                <td>{appmnt.symptoms}</td>
                                                <td>{appmnt.appointmentDate}</td>
                                                 
                                                <td><Link className="btn btn-warning" to={{ pathname: `/DoctorDash/GetAppointment/UpdateAppointment`}}>Update</Link></td>
                                                <td><button className="btn btn-danger"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                         this.appointmentService.deleteAppointmentById(appmnt.appointmentId)
                                                            .then((result) => {
                                                                //alert("data called "+result.data)
                                                                this.appointmentService.getAppointment()
                                                                .then((result2) => {
                                                                    this.setState({ appointment: result2.data });
                                                                })
                                                                .catch((error) => {
                                                                    alert("cant delete");
                                                                });
                                                            })
                                                            .catch((error) => {
                                                                alert("cant delete");
                                                            });
                                                      
                                                      
                                                    }}>Delete</button></td>
                                            </tr>
                                        )
                                        )
                                    }
                                </tbody>
                            </table>
                        ) : <div>No Appointment Present</div>
                    }
                </div>
            </div>
        );
    }
}
export default GetAppointment;