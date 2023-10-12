import React, { useState } from 'react';


function App() {
  const [red, setRed] = useState(100);
  const [green, setGreen] = useState(100);
  const [blue, setBlue] = useState(100);

  const handleSliderChange = (color, value) => {
    switch (color) {
      case 'red':
        setRed(value);
        break;
      case 'green':
        setGreen(value);
        break;
      case 'blue':
        setBlue(value);
        break;
      default:
        break;
    }
  };

  const copyToClipboard = () => {
    const rgbString = `rgb(${red}, ${green}, ${blue})`;
    navigator.clipboard.writeText(rgbString);
  };

  return (
    <div className="container">
      <h2>RGB Color Generator</h2>
      <div className="rgb_area" style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}></div>
      <div className="sliders">
        <div className="slider">
          <p>Red: </p>
          <input type="range" min="0" max="255" value={red} id="red_slider" onChange={(e) => handleSliderChange('red', e.target.value)} />
          <p id="red_value">{red}</p>
        </div>
        <div className="slider">
          <p>Green: </p>
          <input type="range" min="0" max="255" value={green} id="green_slider" onChange={(e) => handleSliderChange('green', e.target.value)} />
          <p id="green_value">{green}</p>
        </div>
        <div className="slider">
          <p>Blue: </p>
          <input type="range" min="0" max="255" value={blue} id="blue_slider" onChange={(e) => handleSliderChange('blue', e.target.value)} />
          <p id="blue_value">{blue}</p>
        </div>
      </div>
      <div className="copy_button">
        <button id="copy_button" onClick={copyToClipboard}>Copy To Clipboard</button>
        <div className="values" id="values_box">{`rgb(${red}, ${green}, ${blue})`}</div>
      </div>
    </div>
  );
}

export default App;
