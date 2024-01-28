import React, { memo, useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import logo from './../../assets/Logo-symphonIA.svg'
import autofalante from './../../assets/autofalante.svg'
import styled from "styled-components";
import AudioPlayer from "../../components/AudioPlayer/index"

const GameRoom = () => {
  const audioUrl = '/instrumental-isolado.wav';
  const [tema, setTema] = useState(null);
  const [ placeholderText, setPlaceholder]= useState("Ex: Cortar cebola");
  const navigate = useNavigate();
  

  const handleInputChange = (e) => {
    setTema(e.target.value);
  };
  const ButtonEnviarTema = () => {
    if (tema && tema.trim() !== "") {
      localStorage.setItem('tema', tema.trim());
      setTimeout(() => {
        navigate('/audio-room');
      }, 500);
    } else {
      setPlaceholder("Tema está vazio");
    }

  };
  
    return (
      <S.Conteiner>

      <S.WrapperLogo>
        <img src={logo} alt="logo" style={{width: '636px', height: "114px"}}></img>
      </S.WrapperLogo>

      <S.WrapperMain>
        <div className="div-main">
          <S.WrapperAction>
            <S.ConteinerInf>
            Ouça a música e imagine um tema para ela!
            </S.ConteinerInf>
            <S.ConteinerPlayer>
              
                <AudioPlayer audioURL={audioUrl}></AudioPlayer>
              
            </S.ConteinerPlayer>
            <S.DivEnviar>

                <S.DivInput>
                    <S.Label>Escreva o seu tema abaixo!</S.Label>
                    <S.Input value={tema} onChange={handleInputChange} placeholder={placeholderText}/>
                </S.DivInput>
                <S.ButtonEnviar onClick={ButtonEnviarTema}>
                        Enviar
                </S.ButtonEnviar>
            </S.DivEnviar>

          </S.WrapperAction>

        <div>
            <img className="img-autofalante" src={autofalante} alt="autofalante"></img>
        </div>
        </div>

      </S.WrapperMain>


      </S.Conteiner>
    );
  }

export default memo(GameRoom);