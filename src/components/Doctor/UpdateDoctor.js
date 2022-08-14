import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import DoctorService from "../../service/DoctorService";
import Doctor from "../../model/Doctor";

function UpdateDoctor() {
    const [state, setState] = useState({ doctor: new Doctor() });
    const [doctors, setDoctors] = useState([]);
    const [error, setError] = useState({
        idError: "",
        nameError: "",
    })
    const [date, setDate] = useState('');

    let service = new DoctorService();
    const { empId } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        service.findDoctorById(empId).then((result) => {
            alert("inside updated"+JSON.stringify(result.data));
            setState({ doctor: result.data })
        }).catch((error) => {
            alert(error);
        });

        service.updateDoctor()
            .then((result) => {
                let docs = result.data.map((doc) => {
                    alert("id is "+JSON.stringify(result.data));
                    return { value: doc.doctorId, display: doc.doctorName };
                });
                
                setDoctors(
                    [{ value: "-1", display: "Select Doctor" }].concat(
                        docs
                    ),
                );
               
            }).catch((error2) => {
                alert(JSON.stringify("error: " + error2));
            });

    }, []);
    return (
        <div>
          
            <form>
                <div>
                    <input className="form-control" type="text" id="doctorId" placeholder="Enter Doctor Id"
                        value={state.doctor.doctorId}
                        readOnly={true}
                    />
                </div>
                <div>
                    <div className="alert-danger">{error.nameError}</div>
                    <input className="form-control my-2" type="text" id="doctorName" placeholder="Enter Doctor Name"
                        value={state.doctor.doctorName}
                        onChange={(e) => setState({ employee: { ...state.doctor, doctorName: e.target.value } })}
                    />
                </div>
                <div>
                    <div className="alert-danger">{error.scoreError}</div>
                    <input className="form-control" type="text" id="specialization" placeholder="Enter Doctor Specialization"
                        value={state.doctor.specialization}
                        onChange={(e) => setState({ doctor: { ...state.doctor, specialization: e.target.value } })}
                    />
                </div>
                <div className="form-group mb-2">
                    <label style={{fontSize: "14px"}}>Date</label>
                    <input name="Date"
                        className="form-control-sm"
                        value={Date}
                        onChange={(e) => setDate(e.target.value)} />
                </div>
                <button className="btn btn-outline-primary mt-3" onClick={
                    (e) => {
                        e.preventDefault();
                        service.updateDoctor(state.doctor).then(() => {
                            alert('Doctor record is updated.');
                            setState({ doctor: new Doctor() })
                            navigate('/doctors');
                        }).catch((er) => {
                            alert(er);
                        })
                    }
                }>Update Doctor</button>
                <Link className="btn btn-outline-primary mt-3 ml-3" to='/doctors'>Cancel</Link>
            </form>
        </div>
    );
}
export default UpdateDoctor;