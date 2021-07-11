import React from 'react';
import SoundPlayer from './main_component/soundPlayer';
import './App.css';
import TopBar from './top_bar/menu_bar';

function App() {
  return (
    <div className="outer_box">
          <TopBar />
        <span className="player_box item">
            <SoundPlayer /> 
        </span>
    </div>
  );
}

export default App;
/** <span className="singer item">
        <img className="singer_image" src={taeyeon_img} alt="taeyeon" />
        <div id="singer_name">태연</div>
      </span>
     */