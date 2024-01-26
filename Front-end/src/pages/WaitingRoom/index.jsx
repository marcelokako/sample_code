import React, { memo } from "react";
import GameConteiner  from "../../components/Games/index";
import * as S from './styles';

const WaitingRoom = () => {
  return (
    
    <S.Conteiner>
      <S.WrapperLogo>
        logo
      </S.WrapperLogo>
      <S.WrapperMain>
        <GameConteiner/>
      </S.WrapperMain>
      <S.WrapperAction>
        <button>Começar!</button>
        <button>Convidar Amigos</button>
      </S.WrapperAction>
    </S.Conteiner>
  );
}

export default memo(WaitingRoom);
