import React from 'react';
import ImagePresenter from './components/ImagePresenter';
import gifBoomstick from "./assets/boomstick.gif"

function App() {
  return (
    <div>
      Hello World!
      <ImagePresenter image = {gifBoomstick} altText = "Gif of my boomstick"/>
      {/* ImagePresenter() */}
    </div>
  );
}

export default App;
