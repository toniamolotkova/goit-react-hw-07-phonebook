import axios from "axios";
import * as actions from './actions';
//import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as api from '../services/services';

axios.defaults.baseURL = 'http://localhost:3001';

export const fetchContacts = () => async dispatch => {
    dispatch(actions.fetchContactRequest());

    try {
        const contacts = await api.fetchContacts();
        dispatch(actions.fetchContactSuccess(contacts))
        
    } catch (error) {
        dispatch(actions.fetchContactError(error))
    }
 }

export const addContact = contactInfo => async dispatch => {  
    dispatch(actions.addContactRequest());

    try {
        const contact = await api.addContacts(contactInfo);
        dispatch(actions.addContactSuccess(contact))
    } catch (error) {
        dispatch(actions.addContactError(error))
    }
}

export const deleteContact = id => async dispatch => {
    dispatch(actions.deleteContactRequest());

    try {
        const deleteContact = await api.deleteContact(id);
        dispatch(actions.deleteContactSuccess(deleteContact));

    } catch (error) {
        dispatch(actions.deleteContactError(error))
    }

}