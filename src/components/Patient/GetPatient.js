import React from 'react';
import axios from 'axios';
import PatientService from '../../service/PatientService';
import { Link } from "react-router-dom";
import Patient from '../../model/Patient';

class GetPatient extends React.Component {
    constructor() {
        super();
        this.state = {
            patient: new Patient(),
            patient: []
        }
        this.patientService=new PatientService();
    }//jest test unit(test the service layer)
    componentDidMount() {
       this.patientService.getPatient()
            .then((result) => {
             //  alert(JSON.stringify(result));
                this.setState({ patient: result.data });
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
                        this.state.patient.length > 0 ? (
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Patient Id</th>
                                        <th>Patient Name</th>
                                        <th>Patient Age</th>
                                        <th>Patient Contact No</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.patient.map((pat) =>
                                        (
                                            <tr>
                                                <td>{pat.patientId}</td>
                                                <td>{pat.patientName}</td>
                                                <td>{pat.patientAge}</td>
                                                <td>{pat.patientContactNo}</td>
                                                 
                                                <td><Link className="btn btn-warning" to={{ pathname: `/DoctorDash/GetPatient/updatePatient`}}>Update</Link></td>
                                                <td><button className="btn btn-danger"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                         this.patientService.deletePatientById(pat.patientId)
                                                            .then((result) => {
                                                                //alert("data called "+result.data)
                                                                this.patientService.getPatient()
                                                                .then((result2) => {
                                                                    this.setState({ patient: result2.data });
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
                        ) : <div>No Patient Present</div>
                    }
                </div>
            </div>
        );
    }
}
export default GetPatient;