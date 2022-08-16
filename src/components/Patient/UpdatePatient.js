import {Formik,Form,Field,ErrorMessage} from "formik";
import axios from "axios";
// import "./updateuser.css";
function UpdatePatient(){
      let handleSubmit = (values) => {
        let requestBody = {
      
        
       
        
        patientId: values.patientId,
        patientName: values.patientName,
        patientAge:values.patientAge,
        patientContactNo: values.patientContactNo,
    };
        axios
          .put("http://localhost:8082/patient", requestBody)
          .then((response) => alert("update successful"))
          .catch((error) => alert(error));

    };
        
        let handleValidate=(values)=>{
            const errors={};
            if (!values. patientId) {
                errors. patientid = " cannot be empty";
              }
            if (!values.patientName) {
               errors.patientName = " cannot be empty";
             }
             if(!values.patientAge){
               errors.patientAge=" cannot be empty"
             }
             if(!values.patientContactNo){
               errors.patientContactNo=" cannot be empty"
             }
             return errors;
            };
    return <div className="update-container d-flex flex-column align-items-center" >
            <h1>Update profile</h1>
            <Formik initialValues={{
          patientId:"",
          patientName: "",
          patientAge: "",
          patientContactNo: "",
        }}
        onSubmit={(e) => handleSubmit(e)}
        validate={(e)=>handleValidate(e)}>
        
                 {(props)=>(
                     <Form >
                          <div>
                         <label className="form-label" >ID</label>
                         <Field type="number"  name="patientId"className="form-control"/>
                         <ErrorMessage  name="patientId">
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>
                         <div>
                         <label className="form-label" >PatientName</label>
                         <Field type="text"  name="patientName" className="form-control"/>
                         <ErrorMessage  name="patientName">
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>
                        <div>
                        <label className="form-label">Patient Age</label>
                         <Field type="number"  name="patientAge"className="form-control" />
                         <ErrorMessage  name="patientAge">
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>
                         <div>
                         <label className="form-label"> Contact No</label>
                         <Field type="tel" name="patientContactNo"className="form-control" />
                         <ErrorMessage  name="patientContactNo">
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

export default UpdatePatient;