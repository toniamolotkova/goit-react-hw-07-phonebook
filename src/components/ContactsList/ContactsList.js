
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import s from './ContactsList.module.css';
import { deleteContact, fetchContacts } from 'redux/contacts/contacts-operations';
import { TiDeleteOutline } from "react-icons/ti";
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';

const ContactsList = () => {

  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

   const onDeleteContact = id => dispatch(deleteContact(id));

  useEffect(() => 
    dispatch(fetchContacts()), [dispatch]
  )

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
