import React, { memo } from "react";
import * as S from './styles';

const GameConteiner = () => {
  console.log("333333333333333")
  return (
    <S.Conteiner>
      <S.TitleWrapper>
        JOGOS
      </S.TitleWrapper>
      <S.Gamesrapper>
      
      </S.Gamesrapper>
    </S.Conteiner>
  );
}

export default memo(GameConteiner);
