import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import DoctorService from "../../service/DoctorService";
import Doctor from "../../model/Doctor";
import { Link } from "react-router-dom";


function AddDoctors() {
    const navigate = useNavigate();
    let service = new DoctorService();
    const [state, setState] = useState({doctor: new Doctor() });
    const [doctor, setDoctors] = useState([]);
    const [doctorId, setDoctorId]=useState("");
    const [doctorName, setDoctorName]=useState("");
    const [specialization, setSpecialization]=useState("");
    const [date, setDate]=useState("");
    const formValidation=()=>{
        
    }

    // const formValidation=()=>{
    //     alert("validation");
    //     let isValid=true;
    //     const doctorId={};
    //     const doctorName={};
    //     const specialization={};
    //     const date={};
    //     alert(state.doctor.department.departmentId)
    //     if(state.doctor.doctorId.trim().length<=0){
    //         doctorId.doctorIdRequired="Doctor ID is required";
    //         isValid=false;
    //     }
    //     if(state.doctor.doctorName.trim().length<=0){
    //         doctorName.doctorNameRequired="Doctor Name is required";
    //         isValid=false;
    //     }
    //     if(state.doctor.specialization.trim().length<=0){
    //         specialization.specializationRequired="Specialization is required";
    //         isValid=false;
    //     }
    //     if(state.doctor.date.length == 0){
            
    //         date.dateRequired="Date is required";
    //         isValid=false;
    //     }
    //     setDoctorId(doctorId);
    //     setDoctorName(doctorName);
    //     setSpecialization(specialization);
    //     setDate(date);
    //     return isValid;
    // }

     useEffect(() => {
            service.getDoctors()
                .then((result) => {
                    let doctors = result.data.map((doctor) => {
                        return { value: doctor.doctorId, display: doctor.doctorName };
                    });
                    setDoctors(
                        [{ value: "-1", display: "Select Doctor" }].concat(
                            doctors
                        ),
                    );
                }).catch((error2) => {
                    alert(JSON.stringify("error: " + error2));
                });
        })
    return (
        <div>
           
                <div>
                    <form>
                        <div>
                          
                            <input className="form-control" type="text"  placeholder="Enter Doctor Id"
                                value={state.doctor.doctorId}
                                onChange={(e) => {
                                    setState({
                                        doctor: {
                                            ...state.doctor,
                                            ...state.doctor.department,
                                            doctorId: e.target.value
                                        }
                                    })
                                }}
                            /><br>
                            </br>
                            {Object.keys(doctorId).map((key)=>{
                                return <div style={{color:"red"}}>{doctorId[key]}</div>
                            })}
                        </div>
                        <div>
                            
                            <input className="form-control my-2" type="text"  placeholder="Enter Employee Name"
                                value={state.doctor.doctorName}
                                onChange={(e) => setState({
                                    doctor: {
                                        ...state.doctor,
                                        ...state.doctor.department,
                                        doctorName: e.target.value
                                    }
                                })}
                            />
                             {Object.keys(doctorName).map((key)=>{
                                return <div style={{color:"red"}}>{doctorName[key]}</div>
                            })}
                        </div>
                        <div>
             
                            <input className="form-control" type="text"  placeholder="Enter Doctor Specialization"
                                value={state.doctor.Specialization}
                                onChange={(e) => setState({
                                    doctor:
                                    {
                                        ...state.doctor,
                                        ...state.employee.department,
                                        Specialization: e.target.value
                                    }                            
                                })}
                            /><br></br>
                             {Object.keys(specialization).map((key)=>{
                                return <div style={{color:"red"}}>{specialization[key]}</div>
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
                              
                                service.addDoctor(state.doctor)
                                    .then((result) => {
                                        alert('Doctor is added in database.');
                                        navigate('/doctors');
                                    })
                                    .catch((error2) => {
                                        alert(error2)
                                    });
                            }
                        }
                        }>Add Doctor</button>
                        <Link className="btn btn-outline-primary mt-3 ml-3" to='/doctors'>Cancel</Link>
                    </form>
                </div>
            
        </div>
    )
}
export default AddDoctors;