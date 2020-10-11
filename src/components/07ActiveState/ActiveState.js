import React, { useState } from 'react';
import { Name } from './components/Name';

// Сделай так, чтобы по клику компонент Name окрашивался из красного цвета в зеленый
// Чтобы не ошибиться, в компонент Name уже были подключены классы
export const ActiveState = () => {
  const [list, setList] = useState(['Vasya', 'Petya', 'Grisha']);
  const [active, setActive] = useState(null);

  return (
    <>
      <ul>
        {list.map((el, index) => (
          <Name name={el} key={index} active={active} list={list} id={index} makeNameActive={() => setActive(index)} />
        ))}
      </ul>
    </>
  );
};
