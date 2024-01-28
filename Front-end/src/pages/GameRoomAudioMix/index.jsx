import React, { memo, useState } from "react";
import logo from './../../assets/Logo-symphonIA.svg';
import * as S from './styles';
import { Slider, Input } from 'antd';

const { TextArea } = Input;

const GameRoomAudioMix = () => {

  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
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
              <Slider vertical defaultValue={0}  style={{color: '#023059' }}/>
              <S.Spreed>SPREED</S.Spreed>
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
              <img src="/play-circle.svg" alt="mesinha de dj" onClick={handleClick} style={{ width: '53px', height: '53px'}}/>
              <img src="/pause.svg" alt="mesinha de dj"  style={{ width: '53px', height: '53px'}}/>
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
