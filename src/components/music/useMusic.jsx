import React, { useState } from 'react';
import axios from 'axios';
import AudioPlayer from 'react-h5-audio-player';
import Button from '../../lib/styles/Button';
import styled from 'styled-components';
import styles from './styles.css';
import little from './little.wav';
import { Link } from 'react-router-dom';
function useMusic() {
  const [mp3s, setMp3] = useState([
    {
      id: 1,
      music: '',
      api: little,
      isDown: false,
      text: '노래 A',
    },
    {
      id: 2,
      music: '',
      api: 'https://storage.googleapis.com/siliconwildcat_poc_bucket/music/IU_Secret_Garden.mp3',
      isDown: false,
      text: '노래 B',
    },
    {
      id: 3,
      music: '',
      api: 'https://storage.googleapis.com/siliconwildcat_poc_bucket/music/IU_Secret_Garden.mp3',
      isDown: false,
      text: '노래 C',
    },
    {
      id: 4,
      music: '',
      api: 'https://storage.googleapis.com/siliconwildcat_poc_bucket/music/IU_Secret_Garden.mp3',
      text: '노래 D',
    },
  ]);
  const fetchMp3 = async (id) => {
    try {
      // const response = await axios.get(mp3s[id - 1].api);
      setMp3(
        mp3s.map((mp3) =>
          mp3.id === id ? { ...mp3, isDown: !mp3.isDown } : mp3
        )
      );
    } catch (e) {
      console.log(e);
    }
  };
  const onClickDown = (id) => {
    fetchMp3(id);
  };

  return { mp3s, fetchMp3, onClickDown };
}

const MusicWrapper = styled.div`
  font-family: sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Top = styled.h1`
  font-size: 2em;
  width: 100%;
  text-align: center;
  display: block;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: 400;
`;

const Hr = styled.div`
  border-bottom: 1px solid black;
  margin-bottom: 1rem;
  width: 90%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 50%;
  margin: 2rem;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-bottom: 2rem;
`;
const Text2 = styled.h2`
  text-align: center;
  width: 50%;
  font-weight: 400;
`;
const Text = styled.div`
  text-align: center;
  width: 50%;
`;
const Buttons = styled.button`
  font-size: 18px;
  font-weight: 200;
  padding: 1em;
  width: 100%;
  height: 100%;
  background: transparent;
  box-sizing: border-box;
  border: 4px solid #f2a12f;
  border-radius: 4px;
  transition: all 0.4s ease 0s;
  cursor: pointer;
  color: #f2a12f;
  &:hover,
  &:focus {
    background: #f2a12f;
    color: #fff;
  }
`;

const Footer = styled.footer`
  border-top: 1px solid #0d122b;
  text-align: center;
  width: 100%;

  position: absolute;
  text-decoration: none;
  color: black;
  left: 0;

  bottom: 0;

  width: 100%;
`;

export default function Music() {
  const { mp3s, fetchMp3, onClickDown } = useMusic();

  return (
    <MusicWrapper>
      <Top>Singing Voice Synthesis</Top>
      <Hr />
      <Text2>기존 모델을 이용한 학습결과</Text2>
      {mp3s.map((mp3) =>
        mp3.isDown ? (
          <>
            <Text key={mp3.text}>{mp3.text}</Text>
            <AudioPlayer
              key={mp3.text}
              src={mp3.api}
              className={styles}
              style={{
                marginTop: '.5rem',
                marginBottom: '1rem',
                width: '50%',
              }}
            />
          </>
        ) : (
          <>
            <Text key={mp3.text}>{mp3.text}</Text>
            <ButtonWrapper>
              <>
                <Buttons
                  key={mp3.text}
                  onClick={() => {
                    onClickDown(mp3.id);
                  }}
                  fullWidth
                >
                  들어보기
                </Buttons>
              </>
            </ButtonWrapper>
          </>
        )
      )}
      <Footer>
        <p>
          Built by&nbsp;
          <a
            style={{ color: 'black', textDecoration: 'underline' }}
            href="https://github.com/SiliconWildCat"
          >
            Silicon Wild Cat
          </a>
        </p>
      </Footer>
    </MusicWrapper>
  );
}
