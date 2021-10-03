import { createSelector } from "reselect";

export const getFilter = state => state.contacts.filter;

export const getAllContacts = state => state.contacts.items;


export const getFilteredContacts = createSelector(
  [getFilter, getAllContacts],
  (filter, items) => {
    const normalizeFilter = filter.toLowerCase();
    return  items.filter(({ name}) =>
      name.toLowerCase().includes(normalizeFilter),
    )}
)