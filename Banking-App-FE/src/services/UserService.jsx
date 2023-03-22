import axios from "axios";
import React, { useEffect, useState } from "react";

class UserService {
  getAllUsers() {
    return axios.get("http://localhost:8080/userms/admin/users");
  }

  getUserById(id) {
    return axios.get(`http://localhost:8080/userms/user/${id}`);
  }

  createNewUser(user) {
    return axios.post("http://localhost:8080/userms/admin/new-user", user);
  }

  deleteUserById(id) {
    return axios.delete(`http://localhost:8080/userms/admin/delete-user/${id}`);
  }

  updateUser(id, user) {
    return axios.put(`http://localhost:8080/userms/update-user/${id}`, user);
  }

  getUserByEmail(email) {
    return axios.get(`http://localhost:8080/userms/check-user-email/${email}`);
  }
}
export default new UserService();
