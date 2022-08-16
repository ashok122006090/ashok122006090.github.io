import {Formik,Form,Field,ErrorMessage} from "formik";
import axios from "axios";
//import "./signup.css";
function Signup(){
      let handleSubmit = (values) => {
        let requestBody = {
        //   email: values.email,
        //   password: values.password,
        //   first_name: values.first_name,
        //   last_name: values.last_name,
        
           patientId: values.patientId,
            patientName: values.patientName,
            patientAge: values.patientAge,
            patientContactNo: values.patientContactNo,
        
        };
        axios
          .post("http://localhost:8082/patient", requestBody)
          .then((response) => alert("registration successful"))
          .catch((error) => alert(error));

    };
        
        let handleValidate=(values)=>{
            const errors={};
             if (!values.patientId) {
              errors.patientId = "cannot be empty";
             }
             if(!values.patientName){
               errors.patientName="name cannot be empty"
             }
             if(!values.patientAge){
               errors.patientAge=" age cannot be empty"
             }
             if(!values.patientContactNo){
               errors.patientContactNo=" enter number correct pattern "
             }
             return errors;
            };
    return <div className="signup-container d-flex flex-column align-items-center" >
            <h1 style={{color:"white"}}>Signup</h1>
            <Formik initialValues={{
         // email: "",
          patientName: "",
          patientAge: "",
          patientContactNo: "",
        }}
        onSubmit={(e) => handleSubmit(e)}
        validate={(e)=>handleValidate(e)}>
        
                 {(props)=>(
                     <Form >
                         <div >
                         <label className="form-label">Id</label>
                         <Field type="number"  name="patientId" className="form-control "placeholder="enter Id"/>
                         <ErrorMessage  name="patientId">  
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>
                        <div >
                        <label className="form-label">NAME</label>
                         <Field type="text"  name="patientName" className="form-control"/>
                         <ErrorMessage  name="patientName">
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>
                         <div >
                         <label className="form-label">Age</label>
                         <Field type="number" name="patientAge" className="form-control"/>
                         <ErrorMessage  name="ppatientAge">
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>
                         <div>
                         <label className="form-label">Number</label>
                         <Field type="tel" name="patientContactNo"className="form-control" />
                         <ErrorMessage  name="patientContactNo">
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>
                         <div>
              <button type="submit" className="btn btn-danger login-btn">
                Signup
              </button>
            </div>
                     </Form>
                 )
                 }

            </Formik>
        </div>
}

export default Signup;