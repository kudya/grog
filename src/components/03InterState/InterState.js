import React, { useState } from 'react';

// Создайте input в который можно вводить текст
// Создайте кнопку после нажатия на которую текст будет добавляться в стейт
// Для наглядности сделайте так, чтобы каждый элемент стейта выводился в
// каждый отдельный div как отдельное слово, окруженное своим индексом
// например: 0privet0, 1privet1 и так далее

const InterState = () => {
  const [input, setInput] = useState([])
  const [state, setState] = useState()

  return (
    <>
      <input onChange={(event) => setState(event.target.value)} type="text" />
      <button onClick={() => setInput(input => [...input, state])} type="button">Добавить</button>
      {input && input.map((el, index) => {
        return <div>{index}{el}{index}</div>
      })}
    </>
  )

}

export default InterState;
