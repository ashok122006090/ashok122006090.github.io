import {
    Button,
   IconButton,
    Paper,
    Card,
    TextField,
    Box,
    CardContent,
    CardActions,
   Modal,
   Typography
  } from "@mui/material";
  import axios from "axios";
  import { useEffect, useState } from "react";
  import { Link, Navigate, useNavigate } from "react-router-dom";
  import { Formik,Form,Field,ErrorMessage } from "formik";
import "./ViewDoctors.css";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
function ViewDoctors(){
    const navigate=useNavigate();
    // let search=(values)=>
    //  {
    //    let name=values.name;
    //    navigate(`/viewRestaurantsByName/${name}`);   
      
    //   }

  const [open, setOpen] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let handleSubmit = (values) => {
        
    let requestBody = {
     
     appointment_date:values.appointment_date,
     symptoms:values.symptoms,
     doctorid: values.doctorid,
     patient_id:values.patient_id
    };
    axios
      .post("http://localhost:8082/appointment", requestBody)
      .then((response) => alert("booking successful"))
      .catch((error) => alert(error));

};
    
    let handleValidate=(values)=>{
        const errors={};
         if(!values.appointment_date){
           errors.appointment_date=" Date cannot be empty"
         }
         if(!values.symptoms){
           errors.symptoms="Symptoms cannot be empty"
         }
         if(!values.doctorid){
           errors.doctorid="ID cannot be empty"
         }
         if(!values.patient_id){
          errors.patient_id="Patient ID cannot be empty"
        }
         return errors;
        };


        useEffect(() => {
        getDoctors();
        }, []);
      const [doctor, setDoctors] = useState([]);
      let getDoctors =() =>{
       axios.get("http://localhost:8082/doctors").then((response) => {
         console.log(response.data);
         setDoctors(response.data);
       });
      };
     return(
         <div >
             <div>
             {doctor.map((doc,index) => {
            //    let imageName= require(`./images/res${rest.restaurant_id}.jpg`);
            //    console.log(imageName);
               return(
              <div className="d-flex align-items-center justify-content-center">
              <Box style={{margin:"50px",width:"80%" }} component={Paper} className="box" >    
              <Card variant="outlined" component={Paper} className="card-container">
              <CardContent style={{padding:"0px" }}className="cardcontent-container">
              {/* <div><img src ={imageName} alt={imageName  }/></div> */}
              <div className="cardtext">
              <h4>Doctor Id:{doc.doctorid} </h4>
              <h5>Doctor Name :{doc.doctorName} </h5>
              <h5>Specialization:{doc.specialization} </h5>
              <h5>Avalible Date:{doc.date}</h5>
              </div>
              </CardContent>
              {/* <CardActions>
              <Button variant="contained" color="error">
              <Link to={`./login`} target={"_blank"} style={{color:"white"}}>
              Book an appointment </Link>
              </Button>
              </CardActions> */}
        </Card>
       </Box> 
       </div>
          ); })    }
      </div>

            <div>
      <Button style={{margin:"30px"}} variant="contained" color="error"onClick={handleOpen}>Book Now</Button>
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
    <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      book an appointment
    </Typography>
    <div className="update-container d-flex flex-column align-items-center" >
            
       <Formik initialValues={{
           "appointment_date":"",
     "symptoms":"",
     "doctorid": "",
     "patient_id":""
        }}
        onSubmit={(e) => handleSubmit(e)}
        validate={(e)=>handleValidate(e)}>
        
                 {(props)=>(
                     <Form >
                      
                         <div>
                         <label className="form-label" >Date of appointment</label>
                         <Field type="date"  name="appointment_date"/>
                         <ErrorMessage  name="appointment_date">
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>
                         <div>
                         <label className="form-label" >Symptoms</label>
                         <Field type="text"  name="symptoms"/>
                         <ErrorMessage  name="symptoms">
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>
                         <div>
                         <label className="form-label" style={{marginRight:"55px"}}>Doctor ID</label>
                         <Field type="number"  name="doctorid"/>
                         <ErrorMessage  name="doctorid">
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>
                         <div>
                         <label className="form-label" >Patient id</label>
                         <Field type="number"  name="patient_id"/>
                         <ErrorMessage  name="patient_id">
                          {(error) => <p>{error}</p>}
                          </ErrorMessage>
                         </div>
                         <div>
              <button type="submit" className="btn btn-primary login-btn">
                Book 
              </button>
            </div>
                     </Form>
                 )
                 }

            </Formik>
        </div>
  </Box>
</Modal>
      </div>
       </div>
        
     );
}
export default ViewDoctors;