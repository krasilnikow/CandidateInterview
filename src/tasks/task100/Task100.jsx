import React from 'react';

const Task100 = () => {
  const rawCode = `// Библотека истории
export class History {}

// Приложение, куда нужно внедрить историю
import React from "react";

export default function App() {
  return (
    <div className="App">
      <input />
      <button disabled>undo</button>
      <button disabled>redo</button>
    </div>
  );
}`;

  const highlight = (code) => {
    const rules = [
      { color: '#6a9955', regex: /(\/\/.*)/ },
      { color: '#ce9178', regex: /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/ },
      { color: '#569cd6', regex: /\b(export|class|import|from|default|function|return|const|let|var)\b/ },
      { color: '#9cdcfe', regex: /\b(div|input|button|className|disabled)\b/ },
      { color: '#4ec9b0', regex: /\b(App|History|React)\b/ }
    ];

    const combined = new RegExp(rules.map(r => r.regex.source).join('|'), 'g');

    return code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(combined, (match, p1, p2, p3, p4, p5) => {
        if (p1) return `<span style="color: #6a9955;">${p1}</span>`;
        if (p2) return `<span style="color: #ce9178;">${p2}</span>`;
        if (p3) return `<span style="color: #569cd6;">${p3}</span>`;
        if (p4) return `<span style="color: #9cdcfe;">${p4}</span>`;
        if (p5) return `<span style="color: #4ec9b0;">${p5}</span>`;
        return match;
      });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <h2>Задание 100</h2>
        <p>1. Нужно сделать универсальную библиотеку для работы с историей. В библиотеке должен быть класс истории.</p>
        <p>2. Библиотеку истории нужно внедрить в приложение для работы с полем ввода</p>
        <p style={{ marginLeft: '20px' }}>2.1. При нажатии на кнопки, значение в поле ввода должно меняться в соотвтествии с элементами истории</p>
        <p style={{ marginLeft: '20px' }}>2.2. Если шагов истории назад/вперед нет, то кнопки должны быть задизаблены.</p>
      </header>

      <main>
        <pre style={{
          backgroundColor: '#1e1e1e',
          color: '#d4d4d4',
          padding: '20px',
          borderRadius: '5px',
          overflowX: 'auto',
          fontSize: '14px',
          lineHeight: '1.5',
          fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace'
        }}>
          <code dangerouslySetInnerHTML={{ __html: highlight(rawCode) }} />
        </pre>
      </main>
    </div>
  );
};

export default Task100;
