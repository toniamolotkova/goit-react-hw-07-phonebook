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
        [actions.addContact]: addContactReducer,
    [actions.deleteContact]: (state, { payload}) => state.filter(item => item.id !== payload),
    })


const filter = createReducer('', {
    [actions.changeFilter]: (_, {payload}) => payload,
})

export default combineReducers({ items, filter });