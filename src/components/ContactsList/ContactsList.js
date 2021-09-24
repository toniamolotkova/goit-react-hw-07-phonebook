
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import s from './ContactsList.module.css';
import { deleteContact } from 'redux/actions';
import { TiDeleteOutline } from "react-icons/ti";

const ContactsList = () => {

  const getFilteredContacts = (state) => {
    const { items, filter } = state.contacts;
     const normalizeFilter = filter.toLowerCase();
    return items.filter(item =>
      item.name.toLowerCase().includes(normalizeFilter),
    );
  }

  const contacts = useSelector(state => getFilteredContacts(state));
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContact(id));

  


  return (
    <ul className={ s.list}>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={s.item}>
          <span>{name} </span><span>{number}</span>
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
            className={s.btn}
          >
            Delete
            <TiDeleteOutline style={{ marginLeft: 5, width: 15, height: 15}}/>
          </button>
        </li>
      ))}
    </ul>
  );
};


export default ContactsList;
