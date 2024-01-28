import React, { memo, useState, useEffect } from "react";
import logo from './../../assets/Logo-symphonIA.svg';
import * as S from './styles';
import { Slider, Input } from 'antd';
import * as Tone from 'tone';

const { TextArea } = Input;

const GameRoomAudioMix = () => {
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const player = new Tone.Player("resultado_user_1.wav").toDestination();

  useEffect(() => {
    player.load("resultado_user_1.wav")
      .then(() => console.log("Áudio carregado"))
      .catch(e => console.error("Erro ao carregar o áudio", e));
  }, []);

  useEffect(() => {
    player.playbackRate = playbackRate;
  }, [playbackRate]);

  const startPlayback = async () => {
    if (Tone.context.state !== "running") {
      await Tone.start();
    }
    await player.start();
    setIsPlaying(true);
  };

  const stopPlayback = async () => {
    await player.stop();
    setIsPlaying(false);
  };

  const handleSpeedChange = async (value) => {
    if (isPlaying) {
      player.stop();
      await new Promise(resolve => setTimeout(resolve, 100)); // Espera um pouco para garantir que o áudio parou
    }
    setPlaybackRate(value);
    if (isPlaying) {
      await player.start();
    }
  };
  
  return (
    <S.Conteiner>
      <S.WrapperLogo>
        <img src={logo} alt="logo" style={{width: '535px', height: '105px'}} />
      </S.WrapperLogo>
      <S.WrapperMain>
        <img src="/ondas-audios-refrao.svg" alt="mesinha de dj"  style={{ width: '1470px', height: '244px'}}/>
        <S.Mixer>
          <S.MixerSection1>
            <div style={{ display: 'inline-block', height: '300px', marginLeft: '70px'}}> 
              <Slider vertical defaultValue={0}  style={{color: '#023059' }}/>
              <S.Pitch className="pitch">PITCH</S.Pitch>
            </div>
            <div style={{ display: 'inline-block', height: '300px', marginLeft: '70px'}}> 
              <Slider 
              vertical 
              defaultValue={1} 
              min={0.5} 
              max={2} 
              step={0.1}
              onChange={handleSpeedChange}  
              style={{color: '#023059' }}/>
              <S.Spreed>SPEED</S.Spreed>
            </div>
            <div style={{ display: 'inline-block', height: '300px', marginLeft: '70px'}}> 
              <Slider vertical defaultValue={0}  style={{color: '#023059' }}/>
              <S.Volume>VOLUME</S.Volume>
            </div>
            <div style={{ display: 'inline-block', height: '300px', marginLeft: '70px'}}> 
              <Slider vertical defaultValue={0}  style={{color: '#023059' }}/>
              <S.Autotune>AUTOTUNE</S.Autotune>
            </div>
          </S.MixerSection1>
          <S.MixerSection2>
            <label>Abaixo você pode escrever um trecho pra colocar na música:</label>
  
            <div><TextArea rows={4} /></div>
            <p>Abaixo você pode adicionar um áudio:</p>
            <S.AudioPlayer>
              <img src="/mic.svg" alt="mesinha de dj"  style={{ width: '53px', height: '53px'}}/>
              <img src="/play-circle.svg" alt="mesinha de dj" style={{ width: '53px', height: '53px'}} onClick={startPlayback}  />
              <img src="/pause.svg" alt="mesinha de dj"  style={{ width: '53px', height: '53px'}} onClick={stopPlayback} />
              <img src="/onda de audio 3.svg" alt="mesinha de dj"  style={{ width: '243px', height: '54px'}}/>
              <img src="/check-circle-2.svg" alt="mesinha de dj"  style={{ width: '53px', height: '53px'}}/>
              <img src="/x-circle.svg" alt="mesinha de dj"  style={{ width: '53px', height: '53px'}}/>
            </S.AudioPlayer>
          </S.MixerSection2>
        </S.Mixer>
      </S.WrapperMain>
    </S.Conteiner>
  );
}

export default memo(GameRoomAudioMix);
