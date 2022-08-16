import React from 'react';
import DoctorService from '../../service/DoctorService';
import { Link } from "react-router-dom";
import Doctor from '../../model/Doctor';

class GetDoctor extends React.Component {
    constructor() {
        super();
        this.state = {
            doctor: new Doctor(),
            doctors: []
        }
        this.doctorService = new DoctorService();
    }
    componentDidMount() {
        this.doctorService.getDoctors()
            .then((result) => {
               // alert(JSON.stringify(result));
                this.setState({ doctors: result.data });
            })
            .catch((error) => {
                alert(error);
            });
    }
    render() {
        console.log('render');
        return (
            <div>
                <div>
                    {
                    this.state.doctors.length > 0 ? (
                    <table className="table table-bordered">
                    <thead>
                    <tr>
                    <th>Doctor Id</th>
                    <th>Doctor Name</th>
                    <th>Specialization</th>
                    <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                {
                this.state.doctors.map((doc) => (
                <tr>
                <td>{doc.doctorid}</td>
                <td>{doc.doctorName}</td>
                <td>{doc.specialization}</td>
                <td>{doc.date}</td>
                <td><Link className="btn btn-warning" to={{ pathname:`/DoctorDash/GetDoctor/updateDoctors` }}>Update</Link></td>
                <td><button className="btn btn-danger"
                onClick={(e) => {
                e.preventDefault();
                this.doctorService.deleteDoctorById(doc.doctorid)
                .then((result) => {
                this.doctorService.getDoctors()
                .then((result2) => {
                this.setState({ doctors: result2.data });
                })
                .catch((error) => { alert("cant delete");
             });
            })
             .catch((error) => {
              alert("cant delete");
              });
                }}>Delete</button></td> </tr>
             ))}
             </tbody>
                            </table>
                        ) : <div>No Doctor Present</div>
                    }
                </div>
            </div>
        );
    }
}
export default GetDoctor;