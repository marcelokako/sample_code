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
