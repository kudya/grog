import React, { useState, useEffect } from 'react';
import { FETCH_URL_JSON_SERVER } from '../../constants';

// Сделайте запрос в базу данных FETCH_URL_JSON_SERVER
// Отрендерите каждый пост в листе в формате
// "Автор: Вася, title: привет"

function BasicFetch() {
  const [state, setState] = useState();

  useEffect(() => {
    fetch(FETCH_URL_JSON_SERVER)
      .then(resp => resp.json())
      .then(result => setState(result))
  }, [setState]);

  return (
    <ul>
      {state && state.map(el => {
        return <li> Автор: {el.name}, title: {el.title}</li>
      })}
    </ul>
  );
}

export default BasicFetch;
