import React from 'react';

function Name(props) {
  const { name, id, state, setState } = props;

  console.log(state);

  function handleDelete() {
    return setState((state) => {
      return [...state].filter(el => el.id !== id)
    })
  }

  return (
    <>
      <li id={id}>{name}</li>
      <button onClick={handleDelete} type="button">Удалить</button>
    </>
  );
}

export default Name;
