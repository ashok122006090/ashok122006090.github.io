import axios from 'axios';
class AppointmentService {
    baseUrl = `http://localhost:8082/appointment`;
    getAppointment() {
        return axios.get(this.baseUrl);
    }
    addAppointment(appointment) {
        return axios.post(this.baseUrl, appointment);
    }
    deleteAppointmentById(appointmentId) {
        return axios.delete(this.baseUrl + '/' + appointmentId);
    }
    updateAppointment(appointment) {
        return axios.put(this.baseUrl+"/"+appointment.appointmentId,appointment);
    
    }
      
}
export default AppointmentService;