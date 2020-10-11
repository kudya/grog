import React, { useState, useEffect } from 'react';
import {
  FETCH_URL_JSON_SERVER,
} from '../../constants';

// Создай форму c input и сделай запрос методом GET
// по адресу FETCH_URL_JSON_SERVER и параметру name(Вася|Петя|Иннокентий|Маша)
// то есть, чтобы получить инфу о Пете запрос должен выглядеть следующим образом
// fetch(${FETCH_URL_JSON_SERVER}?name=Вася) и отрендерить полученный результат
// в диве формате name: ... Title ...

export default function InterFetch() {
  const [state, setState] = useState();
  const [input, setInput] = useState();
  const [div, setDiv] = useState()

  function handleForm(event) {
    event.preventDefault();
    return setState(input);
  }

  useEffect(() => {
    fetch(`${FETCH_URL_JSON_SERVER}?name=${state}`)
      .then(resp => resp.json())
      .then(result => setDiv(result[0]))
  }, [state])

  return (
    <>
      <form onSubmit={handleForm}>
        <input onChange={(e) => setInput(e.target.value)} type="text" />
        <button type="submit">Отправить</button>
      </form>
      {div && <div>name: {div.name} Title: {div.title}</div>}
    </>
  )
}
