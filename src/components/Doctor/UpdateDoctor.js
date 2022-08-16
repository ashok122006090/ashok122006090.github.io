import {Formik,Form,Field,ErrorMessage} from "formik";
import axios from "axios";
// import "./updateuser.css";
function UpdateDoctor(){
      let handleSubmit = (values) => {
        let requestBody = {
        //   user_id:values.user_id,
        //   email: values.email,
        //   password: values.password,
        //   first_name: values.first_name,
        //   last_name: values.last_name,
        
        date: values.date,
        specialization:values.specialization,
        doctorid: values.doctorid,
        doctorName: values.doctorName,
    };
        axios
          .post("http://localhost:8082/doctors", requestBody)
          .then((response) => alert("update successful"))
          .catch((error) => alert(error));

    };
        
        let handleValidate=(values)=>{
            const errors={};
            if (!values. date) {
                errors. date = " cannot be empty";
              }
            if (!values.specialization) {
               errors.specialization = " cannot be empty";
             }
             if(!values.doctorid){
               errors.doctorid=" cannot be empty"
             }
             if(!values.doctorName){
               errors.doctorName=" name cannot be empty"
             }
             return errors;
            };
    return <div className="update-container d-flex flex-column align-items-center" >
            <h1>Update profile</h1>
            <Formik initialValues={{
          date:"",
          specialization: "",
          doctorid: "",
          doctorName: "",
        }}
        onSubmit={(e) => handleSubmit(e)}
        validate={(e)=>handleValidate(e)}>
        
                 {(props)=>(
                     <Form >
                          <div>
                         <label className="form-label" >date</label>
                         <Field type="date"  name="date"className="form-control"/>
                         <ErrorMessage  name="date">
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>
                         <div>
                         <label className="form-label" >Specialization</label>
                         <Field type="text"  name="specialization" className="form-control"/>
                         <ErrorMessage  name="specialization">
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>
                        <div>
                        <label className="form-label">ID</label>
                         <Field type="number"  name="doctorid"className="form-control" />
                         <ErrorMessage  name="doctorid">
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>
                         <div>
                         <label className="form-label"> Name</label>
                         <Field type="text" name="doctorName"className="form-control" />
                         <ErrorMessage  name="doctorName">
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

export default UpdateDoctor;