import axios from "axios";
import * as actions from './actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'http://localhost:3001';

export const fetchContacts = () => dispatch => {
    dispatch(actions.fetchContactRequest());

    axios
        .get('./contacts')
        .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
    .catch(error => dispatch(actions.fetchContactError(error)))
 }

export const addContact = ({ name, number }) => dispatch => {

  const contact = { name, number }
  
  dispatch(actions.addContactRequest())
    axios
        .post('./contacts', contact)
        .then(({ data }) => {
            if (data.find(item => item.name === contact.name)) {
                toast.error(`${contact.name} is already in contacts`);
                return;
            }
            dispatch(actions.addContactSuccess(data))
        }
           )
        .catch(error => dispatch(actions.addContactError(error)));
}

export const deleteContact = id => dispatch => {
    dispatch(actions.deleteContactRequest());

    axios
        .delete(`./contacts/${id}`)
        .then(() => dispatch(actions.deleteContactSuccess(id)))
        .catch(error => dispatch(actions.deleteContactError(error)))
}