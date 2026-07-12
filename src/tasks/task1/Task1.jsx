import React, { useState } from 'react';
import { validate as v1 } from './validators/validator1';
import { validate as v2 } from './validators/validator2';
import { validate as v3 } from './validators/validator3';
import { validate as v4 } from './validators/validator4';
import { validate as v5 } from './validators/validator5';
import { validate as v6 } from './validators/validator6';
import { validate as v7 } from './validators/validator7';
import { validate as v8 } from './validators/validator8';
import { validate as v9 } from './validators/validator9';
import { validate as v10 } from './validators/validator10';
import { validate as v11 } from './validators/validator11';
import { validate as v12 } from './validators/validator12';
import { validate as v13 } from './validators/validator13';
import { validate as v14 } from './validators/validator14';
import { validate as v15 } from './validators/validator15';
import { validate as v16 } from './validators/validator16';
import { validate as v17 } from './validators/validator17';
import { validate as v18 } from './validators/validator18';
import { validate as v19 } from './validators/validator19';
import { validate as v20 } from './validators/validator20';
import { validate as v21 } from './validators/validator21';
import { validate as v22 } from './validators/validator22';
import { validate as v23 } from './validators/validator23';
import { validate as v24 } from './validators/validator24';
import { validate as v25 } from './validators/validator25';
import { validate as v26 } from './validators/validator26';
import { validate as v27 } from './validators/validator27';
import { validate as v28 } from './validators/validator28';
import { validate as v29 } from './validators/validator29';
import { validate as v30 } from './validators/validator30';

const allValidators = [
  v1, v2, v3, v4, v5, v6, v7, v8, v9, v10,
  v11, v12, v13, v14, v15, v16, v17, v18, v19, v20,
  v21, v22, v23, v24, v25, v26, v27, v28, v29, v30
];

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

  const unused = allValidators.length;

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
