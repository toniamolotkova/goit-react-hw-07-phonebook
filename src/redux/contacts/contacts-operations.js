import * as api from '../../services/services';
import * as actions from './contacts-actions';


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
        await api.deleteContact(id);
        dispatch(actions.deleteContactSuccess(id));

    } catch (error) {
        dispatch(actions.deleteContactError(error))
    }

} 