import axios from "axios";

// production api url
const API_URL = "https://insertionfe-be-springboot.onrender.com/api/tasks";

export const getTasks = () => {

    return axios.get(API_URL);
};

export const createTask = (task) => {

    return axios.post(API_URL, task);
};

export const deleteTask = (id) => {

    return axios.delete(`${API_URL}/${id}`);
};
export const updateTask = (id, task) => {

    return axios.put(`${API_URL}/${id}`, task);

};