import axios from 'axios';
import AddDoctors from '../components/Doctor/AddDoctors';
class DoctorService {
    baseUrl = `http://localhost:8082/doctors`;
    getDoctors() {
       // alert("inside get all doctor")
        return axios.get(this.baseUrl);
    }
    addDoctors(doctor) {
    //    console.log("inside service"+JSON.stringify(doctor))
        return axios.post(this.baseUrl, doctor);
    }
    deleteDoctorById(doctorId) {
        return axios.delete(this.baseUrl + '/' + doctorId);
    }
    updateDoctor(doctor) {
        return axios.put(this.baseUrl+"/"+doctor.doctorId,doctor);
    
    }
      
}
export default DoctorService;