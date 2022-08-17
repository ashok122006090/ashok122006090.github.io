import {Formik,Form,Field,ErrorMessage} from "formik";
import axios from "axios";
// import "./updateuser.css";
function UpdateAppointment(){
      let handleSubmit = (values) => {
        let requestBody = {
      
        
       
        
        appointmentId: values.appointmentId,
        patientId: values.patientId,
        doctorId:values.doctorId,
        symptoms: values.symptoms,
        appointment_date: values.appointment_date,
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
               errors.patientId = " cannot be empty";
             }
             if(!values.doctorId){
               errors.doctorId=" cannot be empty"
             }
             if(!values.symptoms){
               errors.symptoms=" cannot be empty"
             }
             if(!values.appointment_date){
                errors.appointment_date=" cannot be empty"
              }
             return errors;
            };
    return <div className="update-container d-flex flex-column align-items-center" >
            <h1>Update Appointment</h1>
            <Formik initialValues={{
          appointmentId:"",
          patientId: "",
          doctorId: "",
          symptoms: "",
          appointment_date: "",
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
                         <Field type="text"  name="patientId" className="form-control"/>
                         <ErrorMessage  name="patientId">
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>

                        <div>
                        <label className="form-label">Doctor ID </label>
                         <Field type="number"  name="doctorId"className="form-control" />
                         <ErrorMessage  name="doctorId">
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
                         <Field type="date" name="date"className="form-control" />
                         <ErrorMessage  name="date">
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