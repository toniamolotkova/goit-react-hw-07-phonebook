import React from 'react';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
 
const Filter = () => {
  const value = useSelector(state => getFilter(state));
  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      Find contacts by name: 
      <input
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
        className={s.input}
        placeholder="Fiona Holmse"  
      />
    </label>
  );
};

export default Filter;
