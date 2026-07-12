import React, { useState } from 'react';
import ViewContainer from './components/ViewContainer';
import StyleWrapper from './components/StyleWrapper';
import ThemeRegistry from './components/ThemeRegistry';
import IconLibrary from './components/IconLibrary';
import LayoutGrid from './components/LayoutGrid';
import FlexBox from './components/FlexBox';
import TypographySystem from './components/TypographySystem';
import ColorPalette from './components/ColorPalette';
import EffectManager from './components/EffectManager';
import BorderProvider from './components/BorderProvider';
import SpacingContext from './components/SpacingContext';
import ShadowRegistry from './components/ShadowRegistry';
import LayerStack from './components/LayerStack';
import AnimationEngine from './components/AnimationEngine';
import Bootstrap from './components/Bootstrap';
import SyncProcessor from './components/SyncProcessor';

const Task2 = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <ViewContainer />
      <StyleWrapper />
      <ThemeRegistry />
      <IconLibrary />
      <LayoutGrid />
      <FlexBox />
      <TypographySystem />
      <ColorPalette />
      <EffectManager />
      <BorderProvider />
      <SpacingContext />
      <ShadowRegistry />
      <LayerStack />
      <AnimationEngine />
      <Bootstrap />
      
      <header style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <h2>Задание 2</h2>
        <p>1. Почему страница долго грузилась?</p>
        <p>2. Почему тормозит ввод текста</p>
      </header>
      
      <main>
        <div style={{ marginBottom: '20px' }}>
          <input 
            type="text" 
            value={value} 
            onChange={handleChange} 
            placeholder="Введите текст по 1 символу"
            style={{ width: '300px', padding: '10px', fontSize: '16px' }}
          />
        </div>
        <SyncProcessor value={value} />
      </main>
    </div>
  );
};

export default Task2;
