import React, { memo } from "react";
import * as S from './styles';


const GameConteiner = () => {
  console.log("333333333333333")
  return (
    <S.Conteiner>
      <S.TitleWrapper>
        JOGOS
      </S.TitleWrapper>
      <S.GamesWrapper>
        <S.CardGame className="refrao-game">
        <img src="/mesinha-de-dj.svg" alt="mesinha de dj"  style={{ width: 281.039, height: 147.996 }}/>
        <p>REFRÃO</p>
        </S.CardGame>
        <S.CardGame>
          
        </S.CardGame>
        <S.CardGame>
          
        </S.CardGame>
        <S.CardGame>
          
        </S.CardGame>

      </S.GamesWrapper>
    </S.Conteiner>
  );
}

export default memo(GameConteiner);
