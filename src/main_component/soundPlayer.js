import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import audio1 from "./music/What_Do_I_Call_You.mp3";
import audio2 from "./music/in501.wav";
import audio3 from "./music/little_star_generated_e2e.wav"
import audio4 from "./music/result2.wav";


const Player = () => {
    return(
        <div>
            <AudioPlayer
            src = {audio1}
            onPlay={e => console.log("onPlay")}
            />
            <br/>
            <AudioPlayer
            src = {audio2}
            onPlay={e => console.log("onPlay")}
            />
            <br/>
            <AudioPlayer
            src = {audio3}
            onPlay={e => console.log("onPlay")}
            />
            <br/>
            <AudioPlayer
            src = {audio4}
            onPlay={e => console.log("onPlay")}
            />
            <br/>
        </div>
    );
}

export default Player;