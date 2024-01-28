import React, { memo } from "react";
import { useNavigate } from 'react-router-dom';
import GameConteiner  from "../../components/Games/index";
import Participants  from "../../components/Participants/index";
import logo from './../../assets/Logo-symphonIA.svg'
import * as S from './styles';

const Closure = () => {
  const navigate = useNavigate();

  const ButtonBackHome = () => {
    localStorage.clear();
    navigate('/');
  };
  const ButtonComeca = () => {
    navigate('/game-room');
  };

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
                <img src="/play-circle.svg" alt="mesinha de dj" style={{ width: '53px', height: '53px'}}/>
                <img src="/pause.svg" alt="mesinha de dj"  style={{ width: '53px', height: '53px'}}/>
                <img src="/progress.svg" alt="mesinha de dj"  style={{ width: '414px', height: '16px'}}/>
                </S.Audio>
            </S.AudioWrapper>

        </S.ResultConteiner>
      </S.WrapperMain>
      <S.WrapperAction>
        <button className="button-style" style={{background: '#F2B705', color: ''}} onClick={ButtonComeca}>Jogar novamente</button>
        <button className="button-style">Sair</button>
      </S.WrapperAction>
      
    </S.Conteiner>
  );
}

export default memo(Closure);
