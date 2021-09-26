import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000/contacts';

export const fetchContacts = () => {
    return axios.get('./contacts').then(res => res.data);
}

export const addContacts = ({ name, number }) => {
    return axios.post('./contacts', name, number).then(({ data }) => data);
}

export const deleteContact = id => {
    return axios.delete(`./contacts/${id}`);
}

