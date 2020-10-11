import React, { useState } from 'react';

// Создайте input в который можно вводить текст
// Затем создайте div в котором будет отображаться текст из инпута
const BasicState = () => {
  const [state, setState] = useState('')

  return (
    <>
      <input onChange={(event) => setState(event.target?.value)} type="text" />
      <div>{state}</div>
    </>
  );
}

export default BasicState;
