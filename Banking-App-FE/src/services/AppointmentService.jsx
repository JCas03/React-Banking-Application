import axios from "axios";

class AppointmentService {

    createNewAppointment(appointment) {
        return axios.post("http://localhost:8080/appms/new-appointment", appointment);
    }

    getAppointmentsByUsername(username) {
        return axios.get(`http://localhost:8080/appms/appointment/${username}`);
    }

    deleteAppointmentByUsername(username) {
        return axios.delete(`http://localhost:8080/appms/delete-appointment/${username}`);
    }
}