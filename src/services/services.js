import axios from "axios";
//import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'http://localhost:3001';

export async function fetchContacts() {
    const { data } = await axios.get('./contacts');
    return data;
}



export async function addContacts ({ name, number }) {
    const contact = { name, number };

    const { data } = await axios.post('./contacts', contact);
    return data;
}

export async function deleteContact(id) {
    const { data } = await axios.delete(`./contacts/${id}`);
    return data;
}

