import * as actions from './actions';
import { fetchContacts, addContact, deleteContact } from './operations';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const addContactReducer = (state, { payload}) => {
    if (state.find(item => item.name === payload.name)) {
        toast.error(`${payload.name} is already in contacts`);
        return state;
    } else {
        return [...state, payload]
    }
}

const items = createReducer([], {
    [fetchContacts.fulfilled]: (state, { payload }) => payload,
    [addContact.fulfilled]: addContactReducer,
    [deleteContact.fulfilled]: (state, { payload}) => state.filter(item => item.id !== payload),
    })

const loading = createReducer(false, {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,

    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,

    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,

})

const filter = createReducer('', {
    [actions.changeFilter]: (_, {payload}) => payload,
})

const error = createReducer(null, {
    [fetchContacts.rejected]: (_, { payload }) => payload,
    [deleteContact.rejected]:(_, { payload }) => payload,
    [addContact.rejected]: (_, { payload }) => payload,

})
export default combineReducers({ items, filter, loading, error });