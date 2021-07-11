import React, { useState, useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import axios from 'axios';
import styles from './styles.css';
import audio1 from './music/What_Do_I_Call_You.mp3';
import audio2 from './music/in501.wav';
import audio3 from './music/little_star_generated_e2e.wav';
import audio4 from './music/result2.wav';

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
        'https://fastcampus2022.s3.ap-northeast-2.amazonaws.com/Ed+Sheeran+Bad+Habits+%5BOfficial+Acoustic+Video%5D+(2)+(2).mp3'
      );
      const { data } = response;
      setMp3(response.data); // 데이터는 response.data 안에 들어있습니다.
      setError(response);
      // setMp3(JSON.parse(data));
      setUsers(JSON.stringify(response));
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
      {/* {loading && (
        <AudioPlayer className={styles} onPlay={(e) => console.log('onPlay')} />
      )} */}
      <button onClick={onClickDown}>다운 로드</button>
      {console.log('hhih', mp3)}
      {!loading && users && (
        <AudioPlayer
          className={styles}
          src="https://fastcampus2022.s3.ap-northeast-2.amazonaws.com/Ed+Sheeran+Bad+Habits+%5BOfficial+Acoustic+Video%5D+(2)+(2).mp3"
          onPlay={(e) => console.log('onPlay')}
        />
      )}
      <br />
      {mp3 && (
        <AudioPlayer
          className={styles}
          src={mp3}
          onPlay={(e) => console.log('onPlay')}
        />
      )}
      <br />
      {error && (
        <AudioPlayer
          className={styles}
          src={error}
          onPlay={(e) => console.log('onPlay')}
        />
      )}
      <br />
      <AudioPlayer
        className={styles}
        src={audio4}
        onPlay={(e) => console.log('onPlay')}
      />
      <br />
    </div>
  );
};

export default Player;
