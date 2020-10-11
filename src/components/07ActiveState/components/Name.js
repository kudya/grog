import React from 'react';
import style from './Name.module.css';

export const Name = (props) => {
  const { name, makeNameActive, active, list, id } = props;
  console.log(style);
  return (
    <div id={id} onClick={makeNameActive} className={active === id ? style.active : style.notActive}> {name}</div>
  );
};
