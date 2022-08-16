import axios from 'axios';
import AddPatient from '../components/Patient/AddPatient';
class PatientService {
    baseUrl = `http://localhost:8082/patient`;
    getPatient() {
       // alert("inside get all patient")
        return axios.get(this.baseUrl);
    }
    addPatient(patient) {
        console.log("inside service"+JSON.stringify(patient))
        return axios.post(this.baseUrl, patient);
    }
    deletePatientById(patientId) {
        return axios.delete(this.baseUrl + '/' + patientId);
    }
    updatePatient(patient) {
        return axios.put(this.baseUrl+"/"+patient.patientId,patient);
    
    }
      
}
export default PatientService;