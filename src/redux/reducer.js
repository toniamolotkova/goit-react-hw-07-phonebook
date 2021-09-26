import * as actions from './actions';
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
        [actions.addContactSuccess]: addContactReducer,
    [actions.deleteContactSuccess]: (state, { payload}) => state.filter(item => item.id !== payload),
    })

const loading = createReducer(false, {
    [actions.addContactRequest]: () => true,
    [actions.addContactSuccess]: () => false,
    [actions.addContactError]: () => false,

    [actions.deleteContactRequest]: () => true,
    [actions.deleteContactSuccess]: () => false,
    [actions.deleteContactError]: () => false,

})

const filter = createReducer('', {
    [actions.changeFilter]: (_, {payload}) => payload,
})

export default combineReducers({ items, filter, loading });