import React, { memo } from "react";
import GameConteiner  from "../../components/Games/index";
import Participants  from "../../components/Participants/index";
import logo from './../../assets/Logo-symphonIA.svg'
import * as S from './styles';

const WaitingRoom = () => {
  return (
    <S.Conteiner>
      <S.WrapperLogo>
        <img src={logo} alt="logo" style={{width: '636px', height: "114px"}}></img>
      </S.WrapperLogo>
      <S.WrapperMain>
        <>
        <button className="button-position button-style">Voltar</button>
          <Participants/>
          <GameConteiner/>
        </>
      </S.WrapperMain>
      <S.WrapperAction>
        <button className="button-style" style={{background: '#F2B705', color: ''}}>Começar!</button>
        <button className="button-style">Convidar Amigos</button>
      </S.WrapperAction>
    </S.Conteiner>
  );
}

export default memo(WaitingRoom);
