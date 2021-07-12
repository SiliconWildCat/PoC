import React, { useState, useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import axios from 'axios';
import styles from './styles.css';

import test_audio1 from './music/in501.wav';

const Player = () => {
  const [users, setUsers] = useState(null);
  const [mp3, setMp3] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchUsers = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setUsers(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);

      const response = await axios.get(
        'https://storage.googleapis.com/siliconwildcat_poc_bucket/music/IU_Secret_Garden.mp3'
      );
      setMp3(response.config.url); // 데이터는 response.data 안에 들어있습니다.
      console.log(response);

      } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  const onClickDown = () => {
    fetchUsers();
  }; 

  return (
    <div>
    <button id="down_btn" onClick={onClickDown}>다운로드</button><br />
       
       {mp3 && (
        <div> 
        다운로드 버튼 플레이어
        <AudioPlayer
          className={styles}
          src={mp3}
          onPlay={(e) => console.log('onPlay')}
        />
        </div>
      )}
      <br />
      src 링크 
      <AudioPlayer
          className={styles}
          src="https://fastcampus2022.s3.ap-northeast-2.amazonaws.com/Ed+Sheeran+-+Bad+Habits+%5BOfficial+Video%5D.mp3"
          onPlay={(e) => console.log('onPlay')}
        />
      <br />
      로컬
      <AudioPlayer
          className={styles}
          src={test_audio1}
          onPlay={(e) => console.log('onPlay')}
        />
      <br />
    </div>
  );
};


export default Player;
