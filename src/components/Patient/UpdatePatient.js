import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import PatientService from "../../service/PatientService";
import Patient from "../../model/Patient";

function UpdatePatient() {
    const [state, setState] = useState({ patient: new Patient() });
    const [doctors, setPatient] = useState([]);
    const [error, setError] = useState({
        idError: "",
        nameError: "",
    })
    const [date, setDate] = useState('');

    let service = new PatientService();
    const { empId } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        service.findPatientById(empId).then((result) => {
            alert("inside updated"+JSON.stringify(result.data));
            setState({ patient: result.data })
        }).catch((error) => {
            alert(error);
        });

        service.getPatient()
            .then((result) => {
                let docs = result.data.map((doc) => {
                    alert("id is "+JSON.stringify(result.data));
                    return { value: doc.patientId, display: doc.patientName };
                });
                
                
               
            }).catch((error2) => {
                alert(JSON.stringify("error: " + error2));
            });

    }, []);
    return (
        <div>
          
            <form>
                <div>
                    <input className="form-control" type="text" id="patientId" placeholder="Enter Patient Id"
                        value={state.patient.patientId}
                        readOnly={true}
                    />
                </div>
                <div>
                    <div className="alert-danger">{error.nameError}</div>
                    <input className="form-control my-2" type="text" id="patientName" placeholder="Enter Patient Name"
                        value={state.patient.patientName}
                        onChange={(e) => setState({ employee: { ...state.patient, patientName: e.target.value } })}
                    />
                </div>
                <div>
                    <div className="alert-danger">{error.scoreError}</div>
                    <input className="form-control" type="text" id="patientAge" placeholder="Enter PatientAge"
                        value={state.patient.patientAge}
                        onChange={(e) => setState({ patient: { ...state.patient, patientAge: e.target.value } })}
                    />
                </div>
                <div>
                    <div className="alert-danger">{error.scoreError}</div>
                    <input className="form-control" type="text" id="patientContactNo" placeholder="Enter Patient Contact No"
                        value={state.patient.patientContactNo}
                        onChange={(e) => setState({ patient: { ...state.patient, patientContactNo: e.target.value } })}
                    />
                </div>
                <button className="btn btn-outline-primary mt-3" onClick={
                    (e) => {
                        e.preventDefault();
                        service.updatePatient(state.patient).then(() => {
                            alert('Patient record is updated.');
                            setState({ patient: new Patient() })
                            navigate('/patient');
                        }).catch((er) => {
                            alert(er);
                        })
                    }
                }>Update Patient</button>
                <Link className="btn btn-outline-primary mt-3 ml-3" to='/patient'>Cancel</Link>
            </form>
        </div>
    );
}
export default UpdatePatient;