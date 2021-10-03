import * as actions from './contacts-actions';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const items = createReducer([], {
    [actions.fetchContactSuccess]: (state, { payload }) => payload,
    [actions.addContactSuccess]: (state, { payload}) => [...state, payload],
    [actions.deleteContactSuccess]: (state, { payload }) => state.filter(item => item.id !== payload),
    })

const loading = createReducer(false, {
    [actions.fetchContactRequest]: () => true,
    [actions.fetchContactSuccess]: () => false,
    [actions.fetchContactError]: () => false,

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

const error = createReducer(null, {
    [actions.fetchContactError]: (_, { payload }) => payload,
    [actions.deleteContactError]:(_, { payload }) => payload,
    [actions.addContactError]: (_, { payload }) => payload,

})
export default combineReducers({ items, filter, loading, error });