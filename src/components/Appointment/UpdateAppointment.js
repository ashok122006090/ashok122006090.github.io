import {Formik,Form,Field,ErrorMessage} from "formik";
import axios from "axios";
// import "./updateuser.css";
function UpdateAppointment(){
      let handleSubmit = (values) => {
        let requestBody = {
            appointmentId : values.appointmentId,
            
            patient: {
                patientId: values.patientId,
                
            },
            doctor: {
               
                doctorid : values.doctorid,
            },
            symptoms: values.symptoms,
            appointmentDate: values.appointmentDate,
    };
        axios
          .put("http://localhost:8082/appointment", requestBody)
          .then((response) => alert("update successful"))
          .catch((error) => alert(error));

    };
        
        let handleValidate=(values)=>{
            const errors={};
            if (!values. appointmentId) {
                errors. appointmentId = " cannot be empty";
              }
            if (!values.patientId) {
               errors.patient.patientId = " cannot be empty";
             }
             if(!values.doctorid){
               errors.doctor.doctorid=" cannot be empty"
             }
             if(!values.symptoms){
               errors.symptoms=" cannot be empty"
             }
             if(!values.appointmentDate){
                errors.aeppointmentDate=" cannot be empty"
              }
             return errors;
            };
    return <div className="update-container d-flex flex-column align-items-center" >
            <h1>Update Appointment</h1>
            <Formik initialValues={{
          appointmentId:"",
          patientId: "",
          doctorid: "",
          symptoms: "",
          appointmentDate: "",
        }}
        onSubmit={(e) => handleSubmit(e)}
        validate={(e)=>handleValidate(e)}>
        
                 {(props)=>(
                     <Form >
                          <div>
                         <label className="form-label" >Appintment ID</label>
                         <Field type="number"  name="appointmentId"className="form-control"/>
                         <ErrorMessage  name="appointmentId">
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>

                         <div>
                         <label className="form-label" >Patient ID</label>
                         <Field type="number"  name="patientId" className="form-control"/>
                         <ErrorMessage  name="patientId">
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>

                        <div>
                        <label className="form-label">Doctor ID </label>
                         <Field type="number"  name="doctorid"className="form-control" />
                         <ErrorMessage  name="doctorid">
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>

                         <div>
                         <label className="form-label"> Symptoms </label>
                         <Field type="text" name="symptoms"className="form-control" />
                         <ErrorMessage  name="symptoms">
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>

                         <div>
                         <label className="form-label"> Appointment Date </label>
                         <Field type="date" name="appointmentDate"className="form-control" />
                         <ErrorMessage  name="appointmentDate">
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>

                         <div>
              <button  type="submit"  className="btn btn-primary update-btn">
                update
              </button>
            </div>
                     </Form>
                 )
                 }

            </Formik>
        </div>
}

export default UpdateAppointment;