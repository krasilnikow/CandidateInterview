import React, { useState, useEffect } from 'react';
import { validate as v17 } from './validators/validator17';

const validatorModules = import.meta.glob('./validators/*.js');

const Task1 = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    
    try {
      v17(newValue);
      setValue(newValue);
    } catch (err) {
      console.error('Ошибка, но не тут, это просто log. Где ошибка? :)');
      setValue('');
    }
  };

  useEffect(() => {
    Object.values(validatorModules).forEach(load => load());
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <h2>Задание 1</h2>
        <p><strong>Задание:</strong> Введите слово <b>"Привет"</b> в поле ввода. Почему слово не получилось ввести?</p>
      </header>
      
      <main>
        <div style={{ marginBottom: '10px' }}>
          <input
            id="input-field"
            type="text" 
            value={value} 
            onChange={handleChange} 
            placeholder="Начните вводить..."
            style={{ width: '300px', padding: '10px', fontSize: '16px' }}
          />
        </div>
        {value === '' && (
          <p style={{ color: '#666', fontSize: '14px' }}>
            Поле пустое. Попробуйте ввести 'Привет'.
          </p>
        )}
      </main>
    </div>
  );
};

export default Task1;
