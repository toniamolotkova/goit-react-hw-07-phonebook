import React from 'react';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/actions';
 
const Filter = () => {
  const value = useSelector(state => state.contacts.filter);
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
