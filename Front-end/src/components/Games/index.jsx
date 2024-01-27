import React, { memo,useState } from "react";
import * as S from './styles';


const GameConteiner = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    console.log('Antes:', isSelected);
    setIsSelected(!isSelected);
    console.log('Depois:', !isSelected);

};
console.log('isSelected:', isSelected);
  return (
    <S.Conteiner>
      <S.TitleWrapper>
        JOGOS
      </S.TitleWrapper>
      <S.GamesWrapper>
      <S.CardGame className={`refrao-game ${isSelected ? 'select-game' : ''}`} onClick={handleClick}>
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
