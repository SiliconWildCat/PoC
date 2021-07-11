import React from 'react';
import './top_bar.css';
const menu_bar = () => {
    return(
        <div className="buttons">
            <button id="about" className="top_btn">ABOUT</button>
            <button id="team" className="top_btn">TEAM</button>
            <button id="road_map" className="top_btn">ROADMAP</button>
            <button id="etc" className="top_btn">ETC</button>
        </div>
    );
}

export default menu_bar;