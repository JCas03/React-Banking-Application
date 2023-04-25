import { Http } from "@mui/icons-material";
import axios from "axios";
class AppointmentService {
    

    createNewAppointment(appointment) {
        
        return axios.post("http://localhost:8080/appms/new-appointment", appointment, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    getAppointmentsByUsername(username) {
        return axios.get(`http://localhost:8080/appms/appointment/${username}`);
    }

    deleteAppointmentByUsername(username) {   
        return axios.delete(`http://localhost:8080/appms/delete-appointment/${username}`);
    }
}
export default new AppointmentService();