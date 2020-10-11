import React, { useState } from 'react';
import Name from './components/Name';

// Сделай так, чтобы кнопки рядом с именами удаляли эти имена.
// Важно, что бы порядок удаления был соблюден,
// то есть кнопка рядом с Васей не удаляет Илью
export default function DeleteState() {
  const [state, setState] = useState([{ id: '1', name: 'Vasya' }, { id: '2', name: 'Petya' }, { id: '3', name: 'Ilya' }, { id: '4', name: 'Vasya' }, { id: '5', name: 'Vasya' }]);

  return (
    <>
      <ul>
        {state.map((el, index) => <Name key={index} id={el.id} name={el.name} state={state} setState={setState} />)}
      </ul>
    </>
  );
}
