import React from 'react';
import ReactDOM from 'react-dom';
import '../css/app.css'; // Corrected import path

import Routing from './Client-Route/Routing';

const App = () => {
  return (
    <div className="Outfitfont text-white bg-[#07041B]">
      <Routing />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
