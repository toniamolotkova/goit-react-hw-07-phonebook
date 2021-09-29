import { createAsyncThunk } from '@reduxjs/toolkit';
//import { toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
import * as api from '../services/services';


export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
        const contacts = await api.fetchContacts();
        return contacts; 
    }
)


export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contactInfo) => {
        const contact = await api.addContacts(contactInfo);
        return contact;
    }
)


export const deleteContact = createAsyncThunk(
    'contacts/deleteContacts',
    async (id) => {
        const deleteContact = await api.deleteContact(id);
        return deleteContact;
    }
)
