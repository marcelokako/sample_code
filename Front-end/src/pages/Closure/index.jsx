import React, { memo, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Participants  from "../../components/Participants/index";
import logo from './../../assets/Logo-symphonIA.svg'
import * as S from './styles';
import * as Tone from 'tone';

const Closure = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();
  const player = new Tone.Player("joined_user_result copy.wav").toDestination();

  const ButtonBackHome = () => {
    localStorage.clear();
    navigate('/');
  };
  const ButtonComeca = () => {
    navigate('/game-room');
  };


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

  useEffect(() => {
    player.load("resultado_user_1.wav")
      .then(() => console.log("Áudio carregado"))
      .catch(e => console.error("Erro ao carregar o áudio", e));
  }, []);

  return (
    <S.Conteiner>
      <S.WrapperLogo>
        <img src={logo} alt="logo" style={{width: '636px', height: "114px"}}></img>
      </S.WrapperLogo>
      <S.WrapperMain>
        <Participants/>
        <S.ResultConteiner>
            <S.TileWrapper>Resultado</S.TileWrapper>
            <S.ThemeWrapper>
                <S.User>
                    Abobrinha
                </S.User>
                <S.Theme>
                    Tá muito calor!!!!
                </S.Theme>
            </S.ThemeWrapper>
            <S.AudioWrapper>
                <S.User>
                    Abobrinha
                </S.User>
                <S.Audio>
                <img src="/play-circle.svg" alt="mesinha de dj" style={{ width: '53px', height: '53px'}} onClick={startPlayback}/>
                <img src="/pause.svg" alt="mesinha de dj"  style={{ width: '53px', height: '53px'}} onClick={stopPlayback}/>
                <img src="/progress.svg" alt="mesinha de dj"  style={{ width: '414px', height: '16px'}}/>
                </S.Audio>
            </S.AudioWrapper>

        </S.ResultConteiner>
      </S.WrapperMain>
      <S.WrapperAction>
        <button className="button-style" style={{background: '#F2B705', color: ''}} onClick={ButtonComeca}>Jogar novamente</button>
        <button className="button-style" onClick={ButtonBackHome}>Sair</button>
      </S.WrapperAction>
      
    </S.Conteiner>
  );
}

export default memo(Closure);
