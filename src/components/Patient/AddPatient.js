import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import PatientService from "../../service/PatientService";
import Patient from "../../model/Patient";
import { Link } from "react-router-dom";


function AddPatient() {
    const navigate = useNavigate();
    let service = new PatientService();
    const [state, setState] = useState({patient: new Patient() });
    const [patient, setPatient] = useState([]);
    const [patientId, setPatientId]=useState("");
    const [patientName, setPatientName]=useState("");
    const [patientAge, setPatientAge]=useState("");
    const [patientContactNo, setPatientContactNo]=useState("");

    const formValidation=()=>{
        alert("validation");
        let isValid=true;
        const patientId={};
        const patientName={};
        const patientAge={};
        const patientContactNo={};
        alert(state.patient.department.departmentId)
        if(state.patient.patientId.trim().length<=0){
            patientId.patientIdRequired="Patient ID is required";
            isValid=false;
        }
        if(state.patient.patientName.trim().length<=0){
            patientName.patientNameRequired="Patient Name is required";
            isValid=false;
        }
        if(state.patient.patientAge.trim().length<=0){
            patient.patientAgeRequired="PatientAge is required";
            isValid=false;
        }
        if(state.patient.patientContactNo.trim().length<=0){
            patient.patientContactNoRequired="PatientContactNo is required";
            isValid=false;
        }
        setPatientId(patientId);
        setPatientName(patientName);
        setPatientAge(patientAge);
        setPatientContactNo(patientContactNo);
        return isValid;
    }

     useEffect(() => {
            service.getPatient()
                .then((result) => {
                    let patient = result.data.map((patient) => {
                        return { value: patient.patientId, display: patient.patientName };
                    });
                    
                }).catch((error2) => {
                    alert(JSON.stringify("error: " + error2));
                });
        })
    return (
        <div>
           
                <div>
                    <form>
                        <div>
                          
                            <input className="form-control" type="text"  placeholder="Enter Patient Id"
                                value={state.patient.patientId}
                                onChange={(e) => {
                                    setState({
                                        patient: {
                                            ...state.patient,
                                            ...state.patient.department,
                                            patientId: e.target.value
                                        }
                                    })
                                }}
                            /><br>
                            </br>
                            {Object.keys(patientId).map((key)=>{
                                return <div style={{color:"red"}}>{patientId[key]}</div>
                            })}
                        </div>
                        <div>
                            
                            <input className="form-control my-2" type="text"  placeholder="Enter Patient Name"
                                value={state.patient.patientName}
                                onChange={(e) => setState({
                                    patient: {
                                        ...state.patient,
                                        ...state.patient.department,
                                        patientName: e.target.value
                                    }
                                })}
                            />
                             {Object.keys(patientName).map((key)=>{
                                return <div style={{color:"red"}}>{patientName[key]}</div>
                            })}
                        </div>
                        <div>
             
                            <input className="form-control" type="text"  placeholder="Enter Patient Age"
                                value={state.patient.patientAge}
                                onChange={(e) => setState({
                                    patient:
                                    {
                                        ...state.patient,
                                        ...state.patient.department,
                                        patientAge: e.target.value
                                    }                            
                                })}
                            /><br></br>
                             {Object.keys(patientAge).map((key)=>{
                                return <div style={{color:"red"}}>{patientAge[key]}</div>
                            })}
                        </div>

                        <div>
             
                            <input className="form-control" type="text"  placeholder="Enter Patient Contact No"
                                value={state.patient.patientContactNo}
                                onChange={(e) => setState({
                                    patient:
                                    {
                                        ...state.patient,
                                        ...state.patient.department,
                                        patientContactNo: e.target.value
                                    }                            
                                })}
                            /><br></br>
                             {Object.keys(patientContactNo).map((key)=>{
                                return <div style={{color:"red"}}>{patientContactNo[key]}</div>
                            })}
                        </div>
                        {/* <div>

                            <select
                                className="form-control my-2"
                                value={state.doctor.department.departmentId}
                                onChange={(event) =>
                                    setState({ doctor: { ...state.doctor, department: { ...state.doctor.department, departmentId: event.target.value } } })
                                }
                            >
                                {doctors.map((doctor) => (
                                    <option key={doctor.value} value={doctor.value}>
                                        {doctor.display}
                                    </option>
                                ))}
                            </select>
                            <br></br>
                             {Object.keys(empDeptErr).map((key)=>{
                                return <div style={{color:"red"}}>{empDeptErr[key]}</div>
                            })}
                        </div> */}
                        <button className="btn btn-outline-primary mt-3" onClick={
                            (e) => {
                                e.preventDefault();
                                let isValid=formValidation()
                                if(!isValid){
                                return false;
                                }
                                else{
                              
                                service.addPatient(state.patient)
                                    .then((result) => {
                                        alert('Patient is added in database.');
                                        navigate('/patient');
                                    })
                                    .catch((error2) => {
                                        alert(error2)
                                    });
                            }
                        }
                        }>Add Patient</button>
                        <Link className="btn btn-outline-primary mt-3 ml-3" to='/patient'>Cancel</Link>
                    </form>
                </div>
            
        </div>
    )
}
export default AddPatient;